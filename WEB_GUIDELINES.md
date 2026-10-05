# Atari Terror — Web Guidelines

**Verze:** 1.0  
**Stav:** základní pravidla pro návrh, vývoj a obsah webu  
**Primární jazyk:** čeština  
**Typ webu:** moderní one-page web kapely s možností dalšího rozšíření

---

## 1. Účel dokumentu

Tento dokument je **zdrojem pravdy pro web Atari Terror**.

Určuje:
- vizuální identitu webu,
- strukturu a pořadí sekcí,
- UX a responsive chování,
- typografii,
- barvy a další design tokens,
- obsahová pravidla,
- SEO,
- accessibility,
- výkon,
- technická pravidla,
- pravidla pro další úpravy prováděné člověkem nebo AI.

### Základní princip

> Web má působit jako Atari Terror, ne jako generická webová šablona pro hudební kapelu.

Každá nová část webu musí být posouzena podle těchto priorit:

1. **Identita kapely**
2. **Čitelnost a použitelnost**
3. **Mobilní použitelnost**
4. **Rychlost**
5. **SEO**
6. **Jednoduchost údržby**

Pokud se dvě pravidla dostanou do konfliktu, přednost má výše uvedené pořadí.

---

# 2. Charakter webu

Web má být:

- temný,
- syrový,
- industriální,
- koncertní,
- sebevědomý,
- současný,
- vizuálně výrazný,
- ale nikoli přeplácaný.

Nemá působit jako:
- korporátní web,
- běžný WordPress template,
- EDM/festivalový web,
- technologický startup,
- retro web z počátku 2000s.

### Klíčová asociace

**ATARI TERROR = hudba / energie / napětí / živost / autenticita**

Vizuál může pracovat s:
- černou,
- špinavou bílou,
- červeným akcentem,
- zrnem,
- kouřem,
- kontrastem světla a tmy,
- fotografiemi z koncertů,
- lehce industriálními a distressed prvky.

---

# 3. Design Tokens

Design tokens jsou závazné základní hodnoty. Pokud není důvod je měnit, nové části webu je musí používat.

## 3.1 Barvy

| Token | Hodnota | Použití |
|---|---:|---|
| `--color-black` | `#080808` | hlavní pozadí |
| `--color-black-soft` | `#111111` | alternativní pozadí |
| `--color-off-white` | `#E8E5DF` | hlavní text |
| `--color-white` | `#F5F5F5` | zvýraznění |
| `--color-grey` | `#777777` | sekundární text |
| `--color-grey-dark` | `#292929` | linky, rámečky |
| `--color-red` | `#C62828` | hlavní akcent |
| `--color-red-bright` | `#E53935` | hover / výrazné CTA |

### Pravidla barev

- Černá je dominantní.
- Off-white je hlavní barva textu.
- Červená je **akcent**, nikoli plošná výplň celého webu.
- Červenou používat především pro:
  - CTA,
  - aktivní stav navigace,
  - důležité odkazy,
  - drobné grafické akcenty.
- Nepřidávat další výrazné barvy bez vědomého důvodu.
- Kontrast textu musí být dostatečný i na fotografickém pozadí.

---

# 4. Typografie

Typografie má být výrazná, úderná a dobře čitelná.

## 4.1 Doporučený font stack

### Nadpisy / display

Preferovaný směr:

`Oswald`, `Arial Narrow`, `Impact`, sans-serif

Použití:
- H1,
- H2,
- názvy sekcí,
- velké číselné údaje,
- krátké výrazné claimy.

### Běžný text

Preferovaný směr:

`Inter`, `Helvetica Neue`, `Arial`, sans-serif

Použití:
- odstavce,
- popisy,
- navigace,
- metadata,
- tlačítka.

### Pravidla

- Nadpisy mohou být uppercase.
- Běžný text nepoužívat zbytečně uppercase.
- Nepoužívat více než 2 hlavní fontové rodiny.
- Řádkování musí zůstat vzdušné.
- Extrémně dlouhé řádky textu nejsou žádoucí.

---

# 5. Typografická škála

Výchozí hodnoty:

| Prvek | Desktop | Mobile |
|---|---:|---:|
| H1 | 72–120 px | 44–64 px |
| H2 | 40–64 px | 32–42 px |
| H3 | 24–32 px | 22–28 px |
| Body | 18 px | 16–17 px |
| Small | 13–15 px | 12–14 px |
| Button | 14–16 px | 14–16 px |

Hodnoty jsou orientační. Prioritou je vizuální hierarchie a čitelnost.

---

# 6. Layout

## 6.1 Desktop

- maximální šířka obsahu: přibližně `1200–1400 px`,
- horizontální padding: přibližně `40–64 px`,
- grid typicky 12 sloupců,
- sekce mají výrazné vertikální rozestupy,
- obsah nesmí být nalepený na okraje viewportu.

## 6.2 Mobile

- horizontální padding: `20–24 px`,
- primárně 1 sloupec,
- případně 2 sloupce pouze tam, kde to dává smysl,
- text nesmí být příliš malý,
- žádné horizontální scrollování,
- interaktivní prvky musí být pohodlně ovladatelné prstem.

---

# 7. Breakpointy

Používat responsive design, nikoli samostatnou „mobilní verzi“ webu.

Doporučené breakpointy:

```text
Mobile:       < 640 px
Tablet:       640–1023 px
Desktop:      1024–1439 px
Large desktop: ≥ 1440 px
```

Design musí být použitelný i mezi breakpointy.

Nikdy nepředpokládat pouze:
- 375 px,
- 768 px,
- 1440 px.

---

# 8. Mobilní verze — závazná pravidla

Mobilní návštěvník je plnohodnotný uživatel, ne zmenšená desktopová verze.

## 8.1 Navigace

Desktop:

```text
LOGO     DOMŮ  KONCERTY  HUDBA  KAPELA  MERCH  KONTAKT     SOCIAL
```

Mobile:

```text
LOGO                                      MENU
```

Po otevření:

```text
DOMŮ
KONCERTY
HUDBA
KAPELA
MERCH
KONTAKT

Instagram
Facebook
YouTube
Spotify
```

Navigace:
- musí být snadno dosažitelná,
- menu tlačítko musí mít dostatečně velkou dotykovou plochu,
- otevřené menu musí být vizuálně jednoznačné,
- po kliknutí na kotvu se menu zavře,
- menu nesmí zakrývat důležitý obsah bez možnosti návratu.

## 8.2 Touch targets

Interaktivní prvky mají mít ideálně minimálně:

`44 × 44 px`

Platí pro:
- menu,
- ikony,
- odkazy,
- tlačítka,
- ovládací prvky galerie.

## 8.3 Hero

Na mobilu:
- výška hero může být přibližně `75–100vh`,
- hlavní fotografie musí zůstat čitelná,
- text nesmí překrýt klíčovou část fotografie,
- H1 musí být dominantní,
- CTA musí být viditelné bez nutnosti složitého scrollování.

Pokud je desktopový hero příliš vizuálně komplexní, na mobilu se může zjednodušit.

## 8.4 Sekce

Mobilní pořadí musí respektovat prioritu:

1. Hero
2. Nejbližší koncert
3. Nová hudba
4. Kapela
5. Merch
6. Galerie
7. Kontakt

Pokud se objeví důležitá novinka nebo nový release, může být pořadí dočasně změněno.

## 8.5 Koncerty

Na mobilu nesmí být kalendář řešen širokou tabulkou.

Preferovaný formát:

```text
14. 11. 2026
PRAHA — MEETFACTORY

Název akce / festival

[ VSTUPENKY ]
```

Každá položka koncertu musí být snadno skenovatelná.

## 8.6 Merch

Na mobilu:
- produkty mohou být v horizontálním carouselu nebo 2sloupcovém gridu,
- fotografie musí být dostatečně velké,
- cena a název musí být čitelné,
- CTA musí být snadno dostupné.

## 8.7 Galerie

Preferovat:
- 1–2 sloupce,
- velké fotografie,
- jednoduchý lightbox.

Nepoužívat malé náhledy, které ztrácejí význam.

## 8.8 Výkon mobilu

Mobilní verze musí být optimalizována zejména pro:
- pomalejší mobilní připojení,
- mobilní Safari,
- Chrome Android,
- zařízení s menším výkonem.

Velké fotografie se musí:
- komprimovat,
- používat v moderních formátech (`WebP`, případně `AVIF`),
- lazy-loadovat mimo první viewport,
- dodávat v odpovídající velikosti.

---

# 9. Navigace

Desktop navigace je jednoduchá a horizontální.

Doporučené položky:

```text
DOMŮ
KONCERTY
HUDBA
KAPELA
MERCH
KONTAKT
```

Logo vždy funguje jako odkaz na začátek stránky.

Aktivní sekce může být označena:
- červenou linkou,
- červeným textem,
- nebo jiným velmi subtilním stavem.

Navigace nesmí vizuálně soupeřit s hero sekcí.

---

# 10. Struktura one-page webu

## 10.1 HERO

Účel:
- okamžitě identifikovat Atari Terror,
- vytvořit atmosféru,
- dát návštěvníkovi důvod pokračovat.

Obsah:
- logo,
- H1 / název kapely,
- krátký claim,
- hlavní fotografie nebo video,
- CTA.

Preferovaný claim:

**VÍC NEŽ HUDBA**

CTA například:

**POSLECHNI SI →**

---

## 10.2 NEJBLIŽŠÍ KONCERT

Obsah:
- datum,
- město,
- klub/festival,
- případně čas,
- CTA na vstupenky.

Nejbližší koncert má být viditelný velmi brzy po vstupu na web.

Pokud žádný koncert není:
- zobrazit informaci typu „Momentálně bez potvrzených koncertů“,
- nabídnout sledování sociálních sítí.

---

## 10.3 HUDBA

Obsah:
- aktuální singl / album,
- cover,
- krátký popis,
- přehrávač nebo odkazy,
- Spotify,
- YouTube,
- Apple Music,
- Bandcamp podle dostupnosti.

Priorita:
**aktuální hudba > archiv**

---

## 10.4 KAPELA

Krátká verze:
- kdo Atari Terror jsou,
- co hrají,
- proč stojí za poslech.

Text má být stručný.

Delší historii lze případně přesunout na samostatnou stránku.

---

## 10.5 MERCH

Obsah:
- několik aktuálních produktů,
- výrazné fotografie,
- název,
- cena,
- CTA do e-shopu.

Web nemá nahrazovat e-shop, pokud je e-shop provozován externě.

---

## 10.6 GALERIE

Preferovat:
- koncertní fotografie,
- zákulisí,
- kapelu,
- publikum,
- autentické momenty.

Fotografie mají působit živě, nikoli jako sterilní promo katalog.

---

## 10.7 KONTAKT

Obsah:
- booking,
- obecný kontakt podle potřeby,
- sociální sítě.

Booking musí být snadno nalezitelný.

Preferovaný CTA:

**NAPIŠ NÁM →**

---

# 11. Tone of Voice

Komunikace má být:

- přímá,
- stručná,
- sebevědomá,
- autentická,
- současná,
- bez marketingových klišé.

Vyhnout se formulacím typu:
- „Jsme kapela, která vám přinese nezapomenutelný zážitek.“
- „Naše hudba spojuje srdce a duši.“
- „Přinášíme energii, která vás dostane.“

Preferovat konkrétní jazyk.

Například:

> Český alternativní rock. Hlasitě, živě a bez zbytečných keců.

Texty mají být především pravdivé.

---

# 12. Fotografie a vizuální obsah

Preferovaný styl:
- koncertní fotografie,
- vysoký kontrast,
- černobílé nebo tmavé fotografie,
- přirozené světlo,
- kouř,
- publikum,
- pohyb,
- zrno.

Lze používat:
- černobílou fotografii + červený akcent,
- ořez fotografie,
- překryv textur,
- lehký grain.

Nepoužívat:
- generické stock fotografie,
- přehnané neonové efekty,
- přemíru gradientů,
- laciné „rockové“ klišé.

---

# 13. Tlačítka a CTA

CTA musí být krátké a konkrétní.

Preferované:
- `VSTUPENKY →`
- `POSLECHNI SI →`
- `ZOBRAZIT MERCH →`
- `VÍCE O NÁS →`
- `NAPIŠ NÁM →`

Nepoužívat:
- `Klikněte zde`
- `Zjistit více informací`
- `Klikněte pro více`
- dlouhé věty uvnitř tlačítek.

Primární CTA:
- červený akcent,
- vysoký kontrast.

Sekundární CTA:
- obrysové tlačítko,
- off-white / bílá.

---

# 14. SEO

SEO není samostatná vrstva přidaná až na konci. Musí být součástí návrhu obsahu.

## 14.1 Title

Výchozí formát:

`Atari Terror – česká rocková kapela | Koncerty, hudba a merch`

Title má být:
- unikátní,
- přirozený,
- stručný,
- obsahovat značku Atari Terror.

## 14.2 Meta description

Výchozí směr:

`Atari Terror – česká rocková kapela. Hudba, koncerty, videa, merch a aktuální novinky.`

Meta description musí odpovídat skutečnému obsahu webu.

## 14.3 H1

Na homepage má být právě jeden hlavní H1:

**Atari Terror**

Další hlavní části používat jako H2:

- Koncerty
- Hudba
- Kapela
- Merch
- Galerie
- Kontakt

## 14.4 Keywords

Přirozeně pracovat zejména s tématy:

- Atari Terror
- Atari Terror koncerty
- Atari Terror hudba
- Atari Terror merch
- česká rocková kapela
- český alternativní rock

Nepřehánět hustotu klíčových slov.

---

# 15. URL struktura

Homepage:

`/`

Pokud vzniknou samostatné stránky:

```text
/koncerty
/hudba
/kapela
/merch
/kontakt
```

URL:
- krátké,
- čitelné,
- bez zbytečných parametrů,
- bez diakritiky.

---

# 16. Obrázky a ALT text

Každý významový obrázek musí mít smysluplný `alt`.

Dobře:

`Atari Terror během koncertu v Praze`

Špatně:

`IMG_4827.jpg`

Dekorativní obrázky mají mít prázdný alt:

`alt=""`

Alt text nemá být seznam klíčových slov.

---

# 17. Structured Data

Podle skutečného obsahu webu používat vhodná schema.org data.

Priorita:
- `MusicGroup`
- `MusicEvent`
- `Person`
- `Organization`
- případně `Product` na stránkách merch/e-shopu.

Koncerty mají obsahovat pokud možno:
- název,
- datum,
- místo,
- město,
- URL vstupenek.

Strukturovaná data musí odpovídat skutečně viditelnému obsahu.

---

# 18. Open Graph / Social Sharing

Homepage musí mít definované:
- `og:title`
- `og:description`
- `og:image`
- `og:url`
- `og:type`

Výchozí sdílecí obrázek má být výrazný vizuál Atari Terror.

Doporučený formát:

`1200 × 630 px`

---

# 19. Sitemap a robots

Web musí mít:
- `sitemap.xml`,
- `robots.txt`.

Robots nesmí omylem blokovat:
- homepage,
- CSS,
- JavaScript,
- obrázky,
- důležité veřejné stránky.

---

# 20. Accessibility

Web musí být použitelný i bez myši.

Povinně:
- dostatečný kontrast,
- viditelný focus stav,
- smysluplná hierarchie nadpisů,
- alt texty,
- ovládání klávesnicí,
- sémantické HTML,
- formuláře s popisky,
- dostatečně velké touch targets.

Nepoužívat text pouze jako grafický obrázek, pokud má význam pro obsah.

Animace nesmí být nutné pro pochopení obsahu.

---

# 21. Performance

Priorita:
**rychlý první dojem > efektní technologie**

Dodržovat:
- optimalizaci obrázků,
- lazy loading,
- minimalizaci JavaScriptu,
- omezení externích skriptů,
- omezení autoplay videa,
- moderní formáty obrázků,
- správné velikosti obrázků,
- pokud možno žádné zbytečné knihovny.

Hero obrázek je výjimka: musí být načten rychle, protože je součástí prvního viewportu.

---

# 22. Video a audio

Autoplay:
- pouze pokud má jasný UX důvod,
- ideálně bez zvuku,
- musí existovat možnost ovládání.

Externí embed:
- Spotify,
- YouTube,
- Bandcamp,
- další služby

používat s ohledem na výkon.

Pokud lze použít jednoduchý odkaz místo těžkého embed komponentu, preferovat odkaz.

---

# 23. Sociální sítě

Relevantní kanály mohou zahrnovat:
- Instagram,
- Facebook,
- YouTube,
- Spotify,
- Bandcamp,
- další aktuálně používané platformy.

Ikony mají být:
- jednoduché,
- konzistentní,
- bez výrazných barevných brandových efektů,
- dostatečně velké pro mobilní ovládání.

---

# 24. Merch a e-shop

Web má merch prezentovat, ale nemá zbytečně kopírovat funkce e-shopu.

Homepage:
- několik nejzajímavějších produktů,
- vizuální prezentace,
- cena,
- CTA.

Samotný nákup:
- může probíhat v externím e-shopu,
- odkaz musí být jednoznačný.

Pokud se e-shop změní, není potřeba měnit celý web.

---

# 25. Aktualizace obsahu

Obsah s nejvyšší prioritou:

1. nejbližší koncert,
2. nový release,
3. zásadní novinka,
4. merch,
5. galerie,
6. archiv.

Starý obsah nemá překrývat aktuální informace.

Například:
- skončený koncert nesmí být prezentován jako nejbližší koncert,
- starý singl nemá být označen jako nový,
- vyprodaný produkt musí mít správný stav.

---

# 26. Obsahová pravidla pro koncerty

Každý koncert by měl mít minimálně:

```text
Datum
Město
Venue
Název akce
Odkaz na vstupenky
```

Volitelně:

```text
Čas
Festival
Další kapely
Mapa
Facebook event
```

Datum používat konzistentně:

`14. 11. 2026`

---

# 27. Obsahová pravidla pro hudbu

U release používat:

```text
Název
Typ — singl / album / EP
Rok
Krátký popis
Odkazy
```

Například:

```text
NA HRANĚ
Singl · 2026

[ POSLECHNI SI ]
```

---

# 28. Technická architektura

Preferovat:
- jednoduchou statickou strukturu,
- čisté HTML/CSS/JS nebo moderní lehký framework podle potřeby,
- GitHub jako zdrojový repozitář,
- GitHub Pages nebo obdobný jednoduchý deployment.

Technická složitost musí mít konkrétní důvod.

Nepřidávat framework nebo knihovnu pouze proto, že je populární.

---

# 29. Git a deployment

Každá změna webu musí být:
1. provedena v repozitáři,
2. kontrolována,
3. commitována,
4. nasazena přes definovaný deployment proces.

Produkční web nemá být ručně upravován mimo zdrojový repozitář.

---

# 30. Pravidla pro AI / Codex

Tato sekce je závazná pro všechny AI nástroje pracující s webem.

## MUST

AI musí:
- respektovat tento dokument,
- zachovat vizuální identitu,
- používat existující design tokens,
- respektovat desktop i mobile,
- zachovat SEO strukturu,
- používat sémantické HTML,
- zachovat accessibility,
- minimalizovat zbytečné změny,
- před úpravou existující komponenty pochopit její současné chování,
- zachovat funkční odkazy a CTA.

## SHOULD

AI by měla:
- znovu používat existující komponenty,
- preferovat jednoduché řešení,
- zachovat konzistenci,
- optimalizovat obrázky,
- kontrolovat mobilní breakpointy,
- navrhovat nové komponenty pouze tehdy, když existující komponenty nestačí.

## MUST NOT

AI nesmí bez důvodu:
- měnit hlavní barevnou paletu,
- zavádět nové fonty,
- měnit strukturu homepage,
- odstranit SEO metadata,
- odstranit accessibility prvky,
- přidávat velké knihovny,
- používat stock fotografie místo schválených fotografií,
- vytvářet falešné koncerty,
- vymýšlet fakta o kapele,
- měnit texty citlivé na význam bez zadání,
- odstraňovat existující funkce pouze kvůli zjednodušení kódu.

---

# 31. Pravidlo pro nové komponenty

Před vytvořením nové komponenty AI nejprve ověří:

1. Existuje podobná komponenta?
2. Lze použít existující design token?
3. Lze komponentu vytvořit bez nové knihovny?
4. Bude fungovat na mobilu?
5. Má význam pro UX?
6. Nezhorší výkon?

Pokud odpověď na většinu není ano, komponenta se nemá přidávat.

---

# 32. Pravidlo pro změny designu

Velké vizuální změny musí být považovány za změnu design systému.

Například:
- nový hlavní font,
- nová hlavní barva,
- změna gridu,
- nový styl tlačítek,
- zásadní změna navigace.

Tyto změny se nesmí provádět pouze v jedné komponentě bez aktualizace pravidel.

---

# 33. Content vs. Code

Obsah a kód mají být pokud možno oddělené.

Například:

```text
content/
  concerts
  releases
  band
  merch
```

Díky tomu lze měnit:
- koncerty,
- nový singl,
- popisy,
- odkazy

bez zásahu do celé struktury webu.

---

# 34. Checklist před nasazením

Před každým produkčním nasazením ověřit:

### Obsah
- [ ] Aktuální koncert je správně uveden.
- [ ] Všechny odkazy fungují.
- [ ] Neobsahuje web zastaralé informace.
- [ ] Texty odpovídají skutečnosti.

### Design
- [ ] Barvy odpovídají design tokens.
- [ ] Typografie je konzistentní.
- [ ] Desktop vypadá správně.
- [ ] Mobil vypadá správně.
- [ ] Žádný obsah nepřetéká horizontálně.

### Mobile
- [ ] Navigace funguje.
- [ ] CTA jsou snadno ovladatelná.
- [ ] Touch targets jsou dostatečně velké.
- [ ] Fotografie se načítají správně.
- [ ] Text je čitelný.

### SEO
- [ ] Title
- [ ] Meta description
- [ ] H1
- [ ] H2 struktura
- [ ] Alt texty
- [ ] Open Graph
- [ ] Sitemap
- [ ] Robots

### Accessibility
- [ ] Klávesnicová navigace
- [ ] Focus stav
- [ ] Kontrast
- [ ] Sémantické HTML
- [ ] Formuláře mají labely

### Performance
- [ ] Obrázky optimalizované
- [ ] Lazy loading
- [ ] Minimum zbytečných skriptů
- [ ] Žádné zbytečné embed komponenty

---

# 35. Princip „méně, ale silněji“

Pokud existují dvě možné varianty:

**A)** více efektů, animací, komponent a textu  
**B)** méně prvků, ale silnější vizuální a obsahový dopad

Preferovat **B**.

Web Atari Terror nemá návštěvníka zaměstnat.

Má ho:
1. zaujmout,
2. ukázat hudbu,
3. ukázat koncert,
4. dostat ho ke vstupence / poslechu / merchi,
5. umožnit rychlý kontakt.

---

# 36. Budoucí rozšíření

Architektura webu má umožnit pozdější přidání:

- samostatné stránky koncertů,
- detailu jednotlivých release,
- kompletní diskografie,
- historie kapely,
- detailních profilů členů,
- blogu / news,
- press kitu,
- booking sekce,
- merch katalogu,
- newsletteru,
- více jazyků.

Tyto funkce se však nepřidávají do základního one-page webu, dokud k nim není skutečný obsahový nebo obchodní důvod.

---

# 37. Závěrečné pravidlo

> **Každý prvek webu musí mít důvod.**
>
> Pokud nepomáhá identitě Atari Terror, obsahu, orientaci, konverzi nebo použitelnosti, pravděpodobně na webu nemá být.

**ATARI TERROR — VÍC NEŽ HUDBA**
