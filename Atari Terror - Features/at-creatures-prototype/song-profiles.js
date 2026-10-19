// Krátké autorské interpretace, bez přepisování chráněných textů.
// lyricBasis rozlišuje profily odvozené z načteného textu od odhadů podle názvu.
window.AT_SONG_PROFILES = {
  'Eve': { spark: 'Ráj s cenovkou a varováním', reading: 'Text staví vedle sebe chamtivost, falešný příslib ráje a svět, v němž se spalují peníze i lidé.', motif: 'flame', palette: '#d84a38', archetype: 6, lyricBasis: 'read' },
  'Ghost of the Bloodbath': { spark: 'Vzpomínka, která zanechává stopu', reading: 'Stín minulosti, který se odmítá rozplynout.', motif: 'ghost', palette: '#b72f36', archetype: 2 },
  'Bright Sun': { spark: 'Světlo prorážející kouř', reading: 'Vzdor, který si najde vlastní zdroj energie.', motif: 'sun', palette: '#edb72d', archetype: 3 },
  'Mother': { spark: 'Ochrana s ostrými hranami', reading: 'Pouto, které umí zahřát i sevřít.', motif: 'roots', palette: '#a94e3e', archetype: 4 },
  'Insane': { spark: 'Dvě pravdy v jedné hlavě', reading: 'Rozkolísaná perspektiva a nečekaná logika.', motif: 'spiral', palette: '#d53c32', archetype: 6 },
  'Oh My God': { spark: 'Pochybnost o tom, co je skutečné', reading: 'Text zpochybňuje první dojem a hledá jistotu v tom, čemu lze věřit.', motif: 'eye', palette: '#d8bf78', archetype: 2, lyricBasis: 'read' },
  'Stuck to the Tit': { spark: 'Přilepený chaos bez brzdy', reading: 'Neodbytnost, která se nedá setřást ani uhladit.', motif: 'claw', palette: '#db4d39', archetype: 1 },
  'Great Pain': { spark: 'Jizva jako mapa', reading: 'Bolest přetavená ve výdrž a tvrdou schránku.', motif: 'scar', palette: '#bb3940', archetype: 4 },
  'Cereal Killer': { spark: 'Snídaně, která kouše zpátky', reading: 'Černý humor, zrní a malý predátor v jednom.', motif: 'grain', palette: '#d7bc40', archetype: 1 },
  'Dance Machine': { spark: 'Tělo naladěné na rytmus', reading: 'Pohyb jako motor, který se sám znovu roztáčí.', motif: 'gear', palette: '#4c9c91', archetype: 1 },
  'This Is the Day': { spark: 'Dnešek jako bod zlomu', reading: 'Probuzení a rozhodnutí vykročit právě teď.', motif: 'sun', palette: '#e7b83a', archetype: 3 },
  'The Wicked Hand': { spark: 'Ruka s vlastní vůlí', reading: 'Zručnost, pokušení a prsty, které vědí víc než hlava.', motif: 'hand', palette: '#b64a39', archetype: 2 },
  'The Beginning': { spark: 'Prasklina, kterou vstupuje nový svět', reading: 'Začátek bez návodu a s prostorem pro proměnu.', motif: 'seed', palette: '#d7bd68', archetype: 3 },
  'Attention!': { spark: 'Pohled, který nic nepřehlédne', reading: 'Bdělost a napětí před tím, než se něco stane.', motif: 'eye', palette: '#db4638', archetype: 7 },
  'Wonderful Underground': { spark: 'Podzemní slib, který se vrací každý den', reading: 'Text se vrací k opakovaným slibům, doteku a každodennímu rytmu skrytého vztahu.', motif: 'roots', palette: '#629478', archetype: 5, lyricBasis: 'read' },
  'Motofoko': { spark: 'Tělo přepnuté do dravého režimu', reading: 'Groteskní obraz lidského těla, chtíče a monstra, které se dere ven.', motif: 'claw', palette: '#d9513a', archetype: 1, lyricBasis: 'read' },
  'Chosen One': { spark: 'Unavený hrdina bez vítězné pózy', reading: 'Text rozkládá představu vyvoleného hrdiny: zůstává únava, hořkost a boj o vlastní hlas.', motif: 'scar', palette: '#dab94d', archetype: 4, lyricBasis: 'read' },
  'Only': { spark: 'Hrdina, který zůstal sám se sebou', reading: 'Motiv osamělého a unaveného hrdiny navazuje na hořkost i vzdor.', motif: 'eye', palette: '#8797ad', archetype: 5, lyricBasis: 'read' },
  'Airbag Death': { spark: 'Rychlá jízda na hraně pochybnosti', reading: 'Text spojuje prudkou rychlost, obraz koně a nejistotu, která se drží jezdce.', motif: 'horse', palette: '#d64c3d', archetype: 6, lyricBasis: 'read' },
  'Fight for Your Country': { spark: 'Cizinec na dlouhé cestě domů', reading: 'Text vypráví o poutníkovi, pocitu cizosti a hledání místa, které lze nazvat domovem.', motif: 'road', palette: '#d1b94f', archetype: 5, lyricBasis: 'read' },
  'Honey Honey': { spark: 'Sladké pozvání, které tlačí blíž', reading: 'Smyslný, naléhavý hlas si říká o blízkost a nenechává mnoho prostoru k odstupu.', motif: 'honey', palette: '#ddb33b', archetype: 1, lyricBasis: 'read' },
  'Sweetest Pie': { spark: 'Sladkost, která přidává na tlaku', reading: 'Text staví na svůdném obrazu sladkosti a stále intenzivnější noční energii.', motif: 'honey', palette: '#cb708f', archetype: 6, lyricBasis: 'read' },
  'Sky Burning': { spark: 'Hořící nebe a zbytek naděje', reading: 'Obrazy pláče, moci a ničení se potkávají s křehkým příslibem růstu.', motif: 'flame', palette: '#e25a32', archetype: 6, lyricBasis: 'read' },
  'Carramba': { spark: 'Přepínání jazyků uprostřed večírku', reading: 'Hravý proud španělských zvolání vytváří barevnou, nadsazenou bytost.', motif: 'burst', palette: '#e2a735', archetype: 1, lyricBasis: 'read' },
  'War': { spark: 'Strach vepsaný pod kůži', reading: 'Text sleduje strach, vize a moc jako něco, co člověku bere jméno i vlastní pravidla.', motif: 'shield', palette: '#bd4037', archetype: 7, lyricBasis: 'read' },
  'Bleeding Tree': { spark: 'Kořeny, kterými proudí červená míza', reading: 'Živá věc poznamenaná ztrátou, která přesto roste.', motif: 'roots', palette: '#bd3935', archetype: 4 }
};
const atSongSlugs = {
  'Eve':'eve','Ghost of the Bloodbath':'ghost-of-the-bloodbath','Bright Sun':'bright-sun','Mother':'mother','Insane':'insane','Oh My God':'oh-my-god','Stuck to the Tit':'stuck-to-the-tit','Great Pain':'great-pain','Cereal Killer':'cereal-killer','Dance Machine':'dance-machine','This Is the Day':'this-is-the-day','The Wicked Hand':'the-wicked-hand','The Beginning':'the-beginning','Attention!':'attention','Wonderful Underground':'wonderful-underground','Motofoko':'motofoko','Chosen One':'chosen-one','Only':'only','Airbag Death':'airbag-death','Fight for Your Country':'fight-for-your-country','Honey Honey':'honey-honey','Sweetest Pie':'sweetest-pie','Sky Burning':'sky-burning','Carramba':'carramba','War':'war','Bleeding Tree':'bleeding-tree'
};
for (const [title, profile] of Object.entries(window.AT_SONG_PROFILES)) {
  profile.lyricBasis ||= 'title-only';
  profile.sourceUrl = `https://pisnicky-akordy.cz/atari-terror/${atSongSlugs[title]}`;
}
