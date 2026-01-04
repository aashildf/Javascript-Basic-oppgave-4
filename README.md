Javascript basic oppgave 4
🎄 Julekalender for Nettbutikk: Arv 
<img width="1439" height="1034" alt="Skjermbilde 2026-01-04 213613" src="https://github.com/user-attachments/assets/47c048a9-8fce-4904-a58e-3f3a5c928cb4" />


Dette er en interaktiv adventskalender utviklet som en del av et skoleprosjekt. Kalenderen er designet for en smykkebutikk på nett, hvor kunder kan åpne én luke hver dag for å motta eksklusive rabatter på utvalgte produkter fra butikkens kolleksjoner.

📋 Om prosjektet
Målet med oppgaven var å skape en engasjerende brukeropplevelse ved hjelp av JavaScript. Prosjektet demonstrerer hvordan man kan bruke data (objekter i arrays) til å generere dynamisk innhold på en nettside.

Funksjoner
Dynamisk generering: Lukene genereres automatisk med en for-loop i JavaScript.

Dato-sjekk: Brukeren kan ikke "tjuvstarte" – kalenderen sjekker dagens dato og tillater kun åpning av luker som er tilgjengelige.

Tilfeldig innhold: Hver luke trekker et tilfeldig smykke fra en liste med over 40 produkter og gir en unik rabatt mellom 10% og 50%.

Dynamiske rabattkoder: Systemet genererer en unik kode basert på produktets kolleksjon, rabattprosent og tilfeldige bokstaver (f.eks. ELVA35K).

Visuelle effekter: Bruk av CSS-animasjoner, hover-effekter med GIF-wrappers og en egendefinert "tryllestav"-musepeker.

🛠 Teknologier brukt
HTML5: Struktur for kalender-containeren.

CSS3: Grid-layout, animasjoner og maskering av bilder.

JavaScript (ES6): DOM-manipulasjon, event-lyttere og logikk for tilfeldig utvelgelse.

📂 Prosjektstruktur
varer: En array med objekter som inneholder produktnavn, type, kolleksjon og pris.

lagKalender(): Funksjonen som bygger opp rutenettet i HTML.

åpneLuke(): Kjernefunksjonen som håndterer logikken ved klikk, inkludert validering av dato og beregning av rabatt.

💡 Fremtidig utvidelse (Backend-muligheter)
Som nevnt i kildekoden, er dette i dag en frontend-prototype. For at dette skulle vært en fungerende løsning i en ekte nettbutikk, ville neste steg vært å:

Koble applikasjonen til en Database (f.eks. MongoDB eller SQL) for å lagre genererte koder.

Lage et API som validerer om koden faktisk er gyldig i handlekurven.

Implementere innlogging slik at hver kunde kun kan åpne hver luke én gang.
