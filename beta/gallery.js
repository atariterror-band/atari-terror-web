const photoDialog = document.querySelector("[data-photo-lightbox]");

if (photoDialog) {
  const fullPhoto = photoDialog.querySelector("[data-photo-full]");
  let zoom = 1;

  document.querySelectorAll("[data-photo-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const photo = button.querySelector("img");
      if (!photo) return;

      fullPhoto.src = photo.currentSrc || photo.src;
      fullPhoto.alt = photo.alt;
      zoom = 1;
      fullPhoto.style.transform = `scale(${zoom})`;
      photoDialog.showModal();
    });
  });

  photoDialog.querySelector("[data-zoom-in]").addEventListener("click", () => {
    zoom = Math.min(zoom + 0.25, 2.5);
    fullPhoto.style.transform = `scale(${zoom})`;
  });

  photoDialog.querySelector("[data-zoom-out]").addEventListener("click", () => {
    zoom = Math.max(zoom - 0.25, 0.75);
    fullPhoto.style.transform = `scale(${zoom})`;
  });

  photoDialog.querySelector("[data-photo-close]").addEventListener("click", () => photoDialog.close());
  photoDialog.addEventListener("click", (event) => {
    if (event.target === photoDialog) photoDialog.close();
  });
  photoDialog.addEventListener("close", () => {
    fullPhoto.removeAttribute("src");
    fullPhoto.alt = "";
    zoom = 1;
    fullPhoto.style.transform = `scale(${zoom})`;
  });
}
