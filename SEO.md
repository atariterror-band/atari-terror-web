# Atari Terror — SEO

**Verze:** 1.0  
**Primární jazyk:** cs-CZ  
**Typ webu:** one-page band website

> Tento soubor obsahuje konkrétní SEO metadata a strategii. Obecná pravidla webu jsou v `WEB_GUIDELINES.md`.

---

# 1. SEO cíl

Primárním cílem SEO je, aby uživatel při hledání Atari Terror snadno našel:

1. oficiální web kapely,
2. nejbližší koncerty,
3. hudbu,
4. videa,
5. merch,
6. kontakt / booking.

Sekundárně má web podporovat relevantní vyhledávání kolem české rockové / alternativní hudby.

**Neprovádět keyword stuffing.**

---

# 2. Základní metadata

## Homepage

### Title

```text
Atari Terror – česká rocková kapela | Koncerty, hudba a merch
```

Doporučení: při růstu webu sledovat délku title a jeho skutečný obsah. Název značky „Atari Terror“ má zůstat na začátku.

### Meta description

```text
Atari Terror – česká rocková kapela. Hudba, koncerty, videa, merch a aktuální informace.
```

### Canonical

```text
https://www.atariterror.cz/
```

> Produkční doména musí být potvrzena před nasazením.

---

# 3. H1–H3

Homepage:

```text
H1: Atari Terror

H2: Nejbližší koncert
H2: Hudba
H2: Kapela
H2: Merch
H2: Galerie
H2: Kontakt
```

H3 používat pro podsekce, například jednotlivé koncerty nebo release.

**Na homepage používat právě jeden H1.**

---

# 4. Klíčová témata

Primární:

```text
Atari Terror
```

Sekundární:

```text
Atari Terror koncerty
Atari Terror hudba
Atari Terror merch
Atari Terror kapela
česká rocková kapela
český alternativní rock
```

Long-tail dotazy řešit přirozeně prostřednictvím obsahu koncertů, release a případných samostatných stránek.

---

# 5. SEO pro koncerty

Pokud vznikne samostatná stránka koncertu, doporučený title:

```text
Atari Terror – [MĚSTO] – [DATUM] | Koncert
```

Například:

```text
Atari Terror – Praha – 14. 11. 2026 | Koncert
```

Meta description:

```text
Atari Terror živě v [MĚSTO] dne [DATUM]. [VENUE], vstupenky a informace o koncertu.
```

Používat `MusicEvent` structured data.

---

# 6. SEO pro hudbu

Pokud vznikne detail release:

### Title

```text
Atari Terror – [NÁZEV RELEASE] | Oficiální hudba
```

### Meta description

```text
Poslechněte si [NÁZEV RELEASE] od Atari Terror. Oficiální odkazy na Spotify, YouTube a další platformy.
```

---

# 7. URL

Preferovat:

```text
/
 /koncerty
 /hudba
 /kapela
 /merch
 /kontakt
```

U detailních položek:

```text
/koncerty/praha-2026-11-14
/hudba/nazev-release
```

Pravidla:
- lowercase,
- bez diakritiky,
- slova oddělovat pomlčkou,
- krátké URL,
- žádné zbytečné parametry.

---

# 8. Image SEO

Každý významový obrázek musí mít smysluplný alt.

Příklad:

```html
alt="Atari Terror během koncertu v Praze"
```

Soubor může být pojmenovaný:

```text
atari-terror-koncert-praha.webp
```

Nepoužívat:

```text
IMG_4827.JPG
image1.png
final-final2.jpg
```

Alt text není místo pro seznam klíčových slov.

---

# 9. Open Graph

Homepage:

```text
og:type = website
og:title = Atari Terror – česká rocková kapela
og:description = Hudba, koncerty, videa, merch a aktuální informace.
og:url = https://www.atariterror.cz/
```

Výchozí obrázek:

```text
1200 × 630 px
```

Doporučený soubor:

```text
assets/images/og-atari-terror.jpg
```

---

# 10. Twitter / X Card

Použít:

```text
twitter:card = summary_large_image
```

A podle potřeby:

```text
twitter:title
twitter:description
twitter:image
```

---

# 11. Structured Data

Homepage podle skutečně dostupných údajů:

- `MusicGroup`
- `Organization`

Koncert:

- `MusicEvent`

Produkt:

- `Product`

Person:

- `Person`

Structured data musí vždy odpovídat viditelnému obsahu.

**Nevkládat schema data pro informace, které uživatel na stránce nevidí nebo které nejsou pravdivé.**

---

# 12. MusicGroup

Doporučená data:

```text
name
url
image
sameAs
genre
member
```

`sameAs` používat pouze pro skutečné oficiální profily:

- Instagram,
- Facebook,
- YouTube,
- Spotify,
- Bandcamp,
- další ověřené profily.

---

# 13. Sitemap

Produkční web má mít:

```text
/sitemap.xml
```

Pokud je web skutečně pouze jedna stránka, sitemap může obsahovat pouze homepage.

Po přidání samostatných stránek sitemap aktualizovat.

---

# 14. Robots

Produkční web:

```text
User-agent: *
Allow: /
```

Sitemap:

```text
Sitemap: https://www.atariterror.cz/sitemap.xml
```

URL domény musí být před produkcí potvrzena.

---

# 15. Search Console

Po nasazení webu doporučujeme přidat:
- Google Search Console,
- případně Bing Webmaster Tools.

Kontrolovat:
- indexaci,
- Core Web Vitals,
- mobilní použitelnost,
- vyhledávací dotazy,
- chyby crawlování.

---

# 16. Analytics

Používat analytiku pouze pokud je skutečně potřeba.

Minimální sledované události mohou být:

```text
ticket_click
music_click
merch_click
booking_click
social_click
```

Při nasazení analytiky respektovat aktuální požadavky na soukromí a souhlas uživatelů.

---

# 17. Internal linking

I one-page web má jasnou interní informační architekturu.

CTA mají odkazovat na relevantní sekci:

```text
POSLECHNI SI → #hudba
VSTUPENKY → externí ticket URL
VÍCE O NÁS → #kapela
ZOBRAZIT MERCH → externí e-shop / #merch
NAPIŠ NÁM → #kontakt
```

Po přidání samostatných stránek používat interní odkazy mezi souvisejícím obsahem.

---

# 18. Local / Event SEO

U koncertů vždy uvádět:
- město,
- venue,
- datum,
- případně adresu,
- odkaz na oficiální informace.

To pomáhá uživateli i vyhledávačům pochopit událost.

---

# 19. Mobile SEO

Mobilní verze je stejně důležitá jako desktop.

Kontrolovat:
- viewport,
- čitelnost textu,
- touch targets,
- rychlost,
- CLS,
- obrázky,
- navigaci,
- dostupnost hlavního obsahu bez zbytečných interakcí.

Nesmí existovat rozdíl v zásadním SEO obsahu mezi desktopem a mobilem.

---

# 20. SEO checklist

Před nasazením:

- [ ] Title
- [ ] Meta description
- [ ] H1
- [ ] H2/H3 struktura
- [ ] Canonical
- [ ] Open Graph
- [ ] Social image
- [ ] Alt texty
- [ ] Sitemap
- [ ] Robots
- [ ] Structured data
- [ ] Favicon
- [ ] Mobile viewport
- [ ] Funkční interní odkazy
- [ ] Funkční externí odkazy
- [ ] Search Console
- [ ] Performance check

---

# 21. SEO pravidlo pro AI

AI musí vždy preferovat:

**užitečný obsah > SEO trik**

AI nesmí:
- vkládat klíčová slova nepřirozeně,
- vytvářet falešný obsah kvůli SEO,
- přidávat skrytý text,
- vytvářet falešné schema,
- vytvářet stránky pouze za účelem manipulace vyhledávačů,
- používat nepravdivá metadata.

---

# 22. SEO při změně obsahu

Při změně:
- názvu release,
- koncertu,
- hlavního obrázku,
- claimu,
- domény,
- struktury URL

zkontrolovat odpovídající metadata.

Při změně URL zachovat redirect ze staré URL, pokud URL již byla veřejně používána.

---

# 23. Výchozí SEO pozice

Web je především **oficiální web Atari Terror**.

SEO má podporovat skutečný obsah kapely, ne vytvářet obsah jen proto, aby se web objevil na co nejvíce dotazů.
