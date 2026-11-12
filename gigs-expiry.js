(() => {
  const pragueDateFormatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Prague",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  let lastCheckedDate = "";

  function getPragueDate() {
    const parts = Object.fromEntries(
      pragueDateFormatter
        .formatToParts(new Date())
        .filter((part) => part.type !== "literal")
        .map(({ type, value }) => [type, value]),
    );

    return `${parts.year}-${parts.month}-${parts.day}`;
  }

  function removeExpiredGigs() {
    const today = getPragueDate();
    if (today === lastCheckedDate) return;
    lastCheckedDate = today;

    document.querySelectorAll(".gig-list .gig time[datetime]").forEach((date) => {
      const concertDate = date.dateTime;
      if (!/^\d{4}-\d{2}-\d{2}$/.test(concertDate) || concertDate >= today) return;
      date.closest(".gig")?.remove();
    });
  }

  removeExpiredGigs();
  window.setInterval(removeExpiredGigs, 60_000);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) removeExpiredGigs();
  });
})();
