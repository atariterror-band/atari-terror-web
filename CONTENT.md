# Atari Terror — Content

**Verze:** 1.0  
**Stav:** pracovní obsahový zdroj pro web  
**Primární jazyk:** čeština

> Tento soubor obsahuje konkrétní obsah webu. Vizuální a UX pravidla jsou v `WEB_GUIDELINES.md`. SEO metadata jsou v `SEO.md`.

---

## 1. Brand

**Název kapely:** Atari Terror  
**Claim:** VÍC NEŽ HUDBA

### Krátký popis

Atari Terror je česká rocková kapela.

> Tento text je záměrně stručný. Finální bio musí vycházet ze schválených faktů kapely.

---

## 2. Homepage

### Hero

**H1:** Atari Terror

**Claim:** VÍC NEŽ HUDBA

**Supporting copy:**
```text
Alternativní rock.
České texty.
Skutečné příběhy.
```

**Primární CTA:** POSLECHNI SI →  
**Cíl:** sekce Hudba

---

## 3. Koncerty

### Nejbližší koncert

> Tento blok se musí vždy generovat z aktuálních dat. Pokud není potvrzený koncert, nesmí AI vytvořit náhradní nebo smyšlené datum.

**Data:**
- Datum:
- Město:
- Venue:
- Akce:
- Čas:
- Vstupenky:
- Event URL:

### Další koncerty

Každý koncert má mít:

```text
date
city
venue
event
time
ticket_url
event_url
status
```

Možné hodnoty `status`:

```text
confirmed
sold_out
cancelled
past
```

---

## 4. Hudba

### Aktuální release

**Název:**  
**Typ:** singl / EP / album  
**Rok:**  
**Cover:**  
**Popis:**  
**Spotify:**  
**Apple Music:**  
**YouTube:**  
**Bandcamp:**  

### Pravidlo

Na homepage je vždy prioritně zobrazován nejnovější skutečně vydaný release.

AI nesmí označit starší release jako „nový“, pokud není výslovně určeno jinak.

---

## 5. Kapela

### Krátké bio

```text
Atari Terror je česká rocková kapela. 
[FINÁLNÍ SCHVÁLENÉ BIO DOPLNIT]
```

### Dlouhé bio

`[DOPLNIT SCHVÁLENÝ TEXT]`

### Členové

| Člen | Role | Bio | Foto |
|---|---|---|---|
| [DOPLNIT] | [DOPLNIT] | [DOPLNIT] | [DOPLNIT] |
| [DOPLNIT] | [DOPLNIT] | [DOPLNIT] | [DOPLNIT] |
| [DOPLNIT] | [DOPLNIT] | [DOPLNIT] | [DOPLNIT] |
| [DOPLNIT] | [DOPLNIT] | [DOPLNIT] | [DOPLNIT] |
| [DOPLNIT] | [DOPLNIT] | [DOPLNIT] | [DOPLNIT] |

**Pravidlo:** AI nesmí doplňovat chybějící členy, role, historii nebo fakta podle odhadu.

---

## 6. Merch

### Produkty

| Produkt | Popis | Cena | Obrázek | URL | Stav |
|---|---|---:|---|---|---|
| [DOPLNIT] | [DOPLNIT] | [DOPLNIT] | [DOPLNIT] | [DOPLNIT] | active |
| [DOPLNIT] | [DOPLNIT] | [DOPLNIT] | [DOPLNIT] | [DOPLNIT] | active |
| [DOPLNIT] | [DOPLNIT] | [DOPLNIT] | [DOPLNIT] | [DOPLNIT] | active |

Možné hodnoty `stav`:

```text
active
sold_out
hidden
preorder
```

---

## 7. Galerie

Preferované typy fotografií:

- live,
- backstage,
- promo,
- audience,
- studio.

Každá fotografie má mít:

```text
file
alt
caption
credit
year
```

### Galerie

| Soubor | Alt text | Popisek | Credit | Rok |
|---|---|---|---|---:|
| [DOPLNIT] | [DOPLNIT] | [DOPLNIT] | [DOPLNIT] | [DOPLNIT] |

---

## 8. Kontakt

### Booking

**E-mail:** `[DOPLNIT]`

**CTA:** NAPIŠ NÁM →

### Sociální sítě

| Platforma | URL |
|---|---|
| Instagram | [DOPLNIT] |
| Facebook | [DOPLNIT] |
| YouTube | [DOPLNIT] |
| Spotify | [DOPLNIT] |
| Bandcamp | [DOPLNIT] |

---

## 9. Aktualizace obsahu

Při aktualizaci homepage kontrolovat v tomto pořadí:

1. nejbližší koncert,
2. aktuální release,
3. zásadní novinky,
4. merch,
5. galerie,
6. sociální odkazy.

Staré údaje nemaž bez důvodu. Pokud jsou historicky relevantní, přesuň je do archivu.

---

## 10. Stav obsahu

Používat značky:

- `[DOPLNIT]` — obsah chybí,
- `[SCHVÁLIT]` — obsah existuje, ale není potvrzen,
- `[AKTUÁLNÍ]` — může být použit v produkci,
- `[ARCHIV]` — historický obsah.

**AI nesmí produkčně publikovat obsah označený `[DOPLNIT]` nebo `[SCHVÁLIT]`.**

---

## 11. Pravidlo pravdivosti

Pokud není informace v tomto souboru, v důvěryhodném zdroji projektu nebo v explicitním zadání, AI ji nesmí vydávat za fakt.

Především se nesmí vymýšlet:
- koncerty,
- data,
- členové,
- názvy skladeb,
- čísla prodejů,
- ocenění,
- citace,
- odkazy,
- kontaktní údaje,
- historie kapely.
