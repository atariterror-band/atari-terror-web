# Atari Terror Web

Oficiální web kapely Atari Terror.

> Aktuální vizuální, UX a obsahová pravidla jsou definována v `WEB_GUIDELINES.md`. Konkrétní obsah je v `CONTENT.md` a SEO metadata a strategie v `SEO.md`.

---

## 1. Dokumentace projektu

```text
WEB_GUIDELINES.md  → jak web vypadá a jak se má chovat
CONTENT.md         → jaký obsah je aktuálně použit
SEO.md             → konkrétní SEO metadata a strategie
README.md          → jak projekt používat
```

**Pořadí důležitosti:**

```text
1. WEB_GUIDELINES.md
2. CONTENT.md
3. SEO.md
4. README.md
```

Technická implementace musí respektovat pravidla výše.

---

# 2. Cíl projektu

Web má být:
- rychlý,
- jednoduchý na údržbu,
- výrazný,
- responsive,
- SEO-ready,
- snadno nasaditelný,
- dobře použitelný na mobilu,
- připravený pro budoucí rozšíření.

Výchozí koncept:

**one-page web**

s možností později přidat samostatné stránky.

---

# 3. Doporučená struktura repozitáře

Výchozí struktura:

```text
atari-terror-web/
│
├── README.md
├── WEB_GUIDELINES.md
├── CONTENT.md
├── SEO.md
│
├── assets/
│   ├── images/
│   ├── logo/
│   └── fonts/
│
├── content/
│   ├── concerts/
│   ├── music/
│   ├── band/
│   └── merch/
│
├── src/
│   ├── components/
│   ├── sections/
│   ├── styles/
│   └── scripts/
│
├── public/
│   ├── favicon/
│   ├── robots.txt
│   └── sitemap.xml
│
└── ...
```

Skutečná struktura může být jednodušší podle použité technologie.

---

# 4. Zdroj pravdy

Před změnou webu vždy zkontrolovat:

```text
WEB_GUIDELINES.md
CONTENT.md
SEO.md
```

Pokud se pravidla liší od aktuálního kódu, dokumentace má přednost, pokud není výslovně určeno jinak.

Pokud je dokumentace zastaralá, změnu nejprve promyslet a následně dokumentaci aktualizovat.

---

# 5. Technologie

Výchozí preference:

- HTML
- CSS
- JavaScript

Případně lehký moderní framework, pokud přinese konkrétní výhodu.

### Princip

> Nepoužívat technologii jen proto, že je populární.

Pro jednoduchý one-page web je preferována co nejmenší technická složitost.

---

# 6. Lokální vývoj

Konkrétní příkazy se řídí použitým stackem.

Příklad pro jednoduchý statický projekt:

```bash
git clone <REPOSITORY_URL>
cd atari-terror-web
```

Pokud projekt používá Node.js:

```bash
npm install
npm run dev
```

Produkční build:

```bash
npm run build
```

> Pokud se použije jiný stack, aktualizuj tuto sekci tak, aby odpovídala skutečným příkazům projektu.

---

# 7. Git workflow

Doporučený postup:

```text
1. Pull latest changes
2. Zkontroluj dokumentaci
3. Proveď změnu
4. Otestuj desktop
5. Otestuj mobile
6. Zkontroluj SEO
7. Zkontroluj odkazy
8. Commit
9. Push
10. Deployment
```

Příklad:

```bash
git pull
git status
git add .
git commit -m "Update concert section"
git push
```

Commit message má stručně popisovat změnu.

Příklady:

```text
Update concert dates
Add new single
Improve mobile navigation
Fix SEO metadata
Optimize gallery images
```

---

# 8. Branches

Pro malé změny lze použít:

```text
main
```

Pro větší změny:

```text
feature/merch-section
feature/mobile-menu
feature/new-release
fix/mobile-layout
fix/seo-metadata
```

Produkční větev má obsahovat pouze otestovaný stav.

---

# 9. GitHub Pages

Výchozí deployment může být přes GitHub Pages.

Princip:

```text
GitHub repository
        ↓
     build
        ↓
   GitHub Pages
        ↓
  vlastní doména
        ↓
  atariterror.com
```

V GitHubu nastavit:

```text
Repository
→ Settings
→ Pages
→ Build and deployment
```

Konkrétní nastavení závisí na použité technologii.

---

# 10. Vlastní doména

Produkční doména musí být definována v GitHub Pages a následně propojena přes DNS u registrátora domény.

Po nasazení ověřit:

```text
https://www.atariterror.com
https://atariterror.com
```

Podle zvoleného canonical nastavení má být jedna varianta primární a druhá na ni správně přesměrována nebo standardizována.

---

# 11. Assets

## Obrázky

Preferovat:

```text
.avif
.webp
```

JPEG/PNG používat tam, kde dávají smysl.

Před nahráním:
- zmenšit rozměry,
- komprimovat,
- odstranit zbytečná metadata,
- připravit varianty pro různé velikosti.

## Logo

Logo držet v:
- SVG,
- případně PNG jako fallback.

Logo neměnit bez schválení.

---

# 12. CSS / Design tokens

Barevné a typografické hodnoty centralizovat.

Preferovaný princip:

```css
:root {
  --color-black: #080808;
  --color-black-soft: #111111;
  --color-off-white: #E8E5DF;
  --color-grey: #777777;
  --color-red: #C62828;
}
```

Konkrétní hodnoty jsou definované v `WEB_GUIDELINES.md`.

Nepoužívat náhodné nové hodnoty napříč komponentami.

---

# 13. Responsive development

Každou novou komponentu testovat minimálně na:

```text
375 px
390 px
768 px
1024 px
1440 px
```

A také v průběžných šířkách.

Kontrolovat:
- přetečení,
- navigaci,
- fonty,
- obrázky,
- CTA,
- touch targets,
- pořadí obsahu.

---

# 14. Mobile-first myšlení

Při tvorbě nové komponenty se nejprve definují:
- obsah,
- mobilní layout,
- tablet,
- desktop.

Neplatí:

> „Desktop už je hotový, mobil jen zmenšíme.“

Mobilní UX může mít jiné:
- pořadí,
- rozložení,
- navigaci,
- počet prvků,
- způsob prezentace galerie,
- způsob prezentace koncertů.

---

# 15. Accessibility

Před merge ověřit:
- keyboard navigation,
- focus states,
- kontrast,
- alt text,
- sémantické HTML,
- tlačítka a odkazy,
- formuláře.

Nepoužívat `div` jako tlačítko, pokud není důvod.

---

# 16. Performance

Při každé změně se ptát:

```text
Je nový JavaScript opravdu potřeba?
Je nový externí script opravdu potřeba?
Je obrázek optimalizovaný?
Je možné použít CSS místo JS?
Lze použít odkaz místo těžkého embed komponentu?
```

Preferovat jednoduché řešení.

---

# 17. Content workflow

Obsah se mění především v:

```text
CONTENT.md
```

Příklad nového koncertu:

```text
Datum:
Město:
Venue:
Akce:
Čas:
Vstupenky:
Event URL:
Status:
```

Po změně obsahu zkontrolovat:
- homepage,
- mobil,
- schema.org,
- SEO metadata,
- odkazy.

---

# 18. SEO workflow

Při změně významného obsahu zkontrolovat:

```text
SEO.md
↓
title
meta description
H1/H2
Open Graph
structured data
sitemap
canonical
```

---

# 19. AI / Codex workflow

AI před každou změnou:

### 1. Přečte

```text
WEB_GUIDELINES.md
CONTENT.md
SEO.md
```

podle rozsahu změny.

### 2. Identifikuje existující komponenty

Nejdříve hledá, zda už požadovaná funkce existuje.

### 3. Mění minimum

Pokud lze problém vyřešit malou změnou, nevytváří novou architekturu.

### 4. Testuje

Minimálně:
- desktop,
- mobile,
- odkazy,
- console errors,
- SEO základ.

### 5. Dokumentuje zásadní změny

Pokud změna mění pravidla webu, aktualizuje příslušný `.md` dokument.

---

# 20. AI MUST NOT

AI nesmí bez explicitního zadání:
- měnit brand,
- měnit hlavní barvy,
- měnit fontový směr,
- měnit logo,
- vymýšlet obsah,
- vymýšlet koncerty,
- vytvářet falešné odkazy,
- odstraňovat SEO,
- odstraňovat accessibility,
- přidávat zbytečné knihovny,
- přepisovat celý projekt kvůli malé úpravě.

---

# 21. Testing checklist

## Desktop

- [ ] 1024 px
- [ ] 1440 px
- [ ] velký monitor
- [ ] navigace
- [ ] všechny CTA
- [ ] galerie
- [ ] externí odkazy

## Mobile

- [ ] 375 px
- [ ] 390 px
- [ ] menu
- [ ] touch targets
- [ ] hero
- [ ] koncerty
- [ ] hudba
- [ ] merch
- [ ] galerie
- [ ] kontakt
- [ ] žádný horizontální overflow

## SEO

- [ ] title
- [ ] description
- [ ] H1
- [ ] Open Graph
- [ ] canonical
- [ ] sitemap
- [ ] robots
- [ ] structured data

---

# 22. Deployment checklist

Před produkcí:

```text
[ ] git status
[ ] build bez chyb
[ ] žádné console errors
[ ] všechny odkazy
[ ] desktop
[ ] mobile
[ ] SEO
[ ] accessibility
[ ] performance
[ ] aktuální obsah
```

Po deploymentu:
- otevřít produkční URL,
- otestovat homepage,
- otestovat mobil,
- ověřit HTTPS,
- ověřit canonical,
- ověřit sitemap.

---

# 23. Changelog

Významné změny projektu zapisovat sem.

| Datum | Změna | Autor |
|---|---|---|
| 2026-09-07 | Základní dokumentace projektu | Atari Terror |

---

# 24. Základní pravidlo projektu

> **Web se má vyvíjet postupně, ne neustále přepisovat.**

Nová funkce musí mít důvod.

Nová technologie musí mít důvod.

Nový vizuální prvek musí mít důvod.

Pokud něco funguje, neměnit to pouze proto, že existuje „modernější“ varianta.
