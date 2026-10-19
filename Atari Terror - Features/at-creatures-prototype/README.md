# AT Creatures — funkční prototyp

Samostatný front-endový prototyp fanouškovské aplikace Atari Terror ve vizuálním směru Industrial. Otevřete `index.html` v prohlížeči nebo spusťte lokální statický server v této složce.

## Co funguje

- Výběr až pěti skladeb nebo přeskočení výběru.
- Úvodní obrazovka s proměnlivými ručně kreslenými tvářemi na texturovaném kobaltově modrém pozadí; po omezení pohybu v systému zůstane animace vypnutá.
- Katalog 26 skladeb z alb Part 3: Final Warning a Part2: Attention!, s odkazy na vyhledání každé skladby na Spotify. Tlačítko „Skladbu ještě neznám, pusť mi“ otevře náhodnou skladbu katalogu na Spotify.
- Každá skladba má interpretační profil v `song-profiles.js`, včetně odkazu na zdroj a údaje, zda byl její text dostupný. Dostupné texty jsou převedené do původních stručných interpretací, nikoli ukládané doslova. Nedostupné texty mají hypotetický motiv odvozený z názvu. Výběr ovlivňuje archetyp, popis, barvu a kreslené motivy výsledné bytosti.
- Volba podoby, věkové kategorie a osobnostního ladění.
- Lokální generování názvu, frakce, popisu a vzhledu bytosti; výsledek lze znovu vygenerovat.
- Výsledné bytosti a karty mají vlastní vektorovou ilustraci v syrovém, ručně kresleném fanzinovém duchu. Galerie používá jen artwork bytostí, bez portrétních fotografií.
- Galerie uložených obrázků obsahující výhradně karty; galerie umožňuje kartu stáhnout nebo odebrat.
- Veřejná ukázková galerie pod úvodní obrazovkou. Zobrazuje čtyři demo karty a karty uložené v tomto prohlížeči; kliknutím se karta zvětší.
- Stažení karty a znaku jako SVG, systémové sdílení / kopírování a náhled plakátu a koncertní karty.
- Odkaz na existující náhled AT Shopu.
- Responzivní zobrazení pro mobil i desktop.

## Záměrná omezení prototypu

- Odkazy na Spotify vedou na výsledky vyhledávání podle interpreta a názvu skladby; přehrávání spravuje Spotify a může vyžadovat přihlášení.
- Generování probíhá lokálně v prohlížeči. Aplikace neposílá volby ani osobní údaje na server.
- Galerie ukládá karty do místního úložiště prohlížeče; zobrazí je pouze na zařízení a v profilu daného prohlížeče.
- Veřejné karty napříč návštěvníky vyžadují serverovou databázi a výslovný souhlas autorů. V tomto prototypu jsou čtyři ukázkové karty a lokálně uložené karty.
- Plakát je náhled a koncertní QR karta je dekorativní ukázka, nikoli platná vstupenka či slevový kód.
- Pro ostrý provoz bude potřeba doplnit katalog a ověřit práva k motivům, produkční generování/tisk, objednávky, platby a případné skutečné QR kódy.
