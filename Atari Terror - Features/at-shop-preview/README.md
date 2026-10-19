# AT Shop — bezpečný prototyp

Tento samostatný náhled přebírá aktuální nabídku Atari Terror e-shopu (názvy, ceny, předobjednávkový text) a vizuální směr žlutá/černá/červená z projektu. Každý produkt má vlastní detailní URL ve tvaru `product.html?id=lp-limited`; z detailu lze zvolit variantu, množství a přidat položku do společného košíku. Správa e-shopu v `admin.html` nabízí přehled a filtrování objednávek, úpravu jejich stavu a stavu platby, kontakty zákazníků, export CSV a přepnutí dostupnosti produktů. Nic na `shop.atariterror.com` nemění.

Otevřete `index.html` v prohlížeči. Katalog, filtry, košík, testovací checkout a jednoduchý přehled stavů objednávek fungují pouze v místním `localStorage` daného prohlížeče. Formulář nepřenáší údaje a nevytváří skutečnou objednávku ani platbu.

## Co je potřeba před ostrým provozem

- Serverové API a databáze pro produkty, sklad, objednávky a auditní historii.
- Správa produktů a zabezpečené přihlášení administrátora (prototypová administrační obrazovka je záměrně bez přístupového zabezpečení).
- Comgate: firemní registrace a schválení, serverové vytvoření platby, ověření callbacku a návratového stavu; obchodní vypořádání musí být nastaveno u Comgate na firemní bankovní účet.
- Zvolený dopravce a jeho API pro výdejní místa, štítky a sledování zásilek. Ceny dopravy v prototypu jsou pouze návrhové.
- Potvrzení variant triček, skutečné skladové zásoby limitované edice a právní/daňové texty.
- Import produktů a objednávek ze Shoptetu před jakýmkoli vypnutím dosavadního obchodu.

## Bezpečný migrační postup

1. Získat přístup k Shoptet administraci, export katalogu, variant, zásob a objednávek a zjistit aktivní dopravu, platby, doménu a právní stránky.
2. Postavit novou verzi na testovací subdoméně a přenést katalog i obsah včetně SEO URL přesměrování.
3. Otestovat objednávku, storno, neúspěšnou platbu, refundaci, e-maily, dopravu a mobilní zobrazení v testovacím režimu Comgate.
4. Přepnout DNS až po odsouhlasení; původní Shoptet ponechat dostupný po dobu ověření a mít připravený návrat DNS.
