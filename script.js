// Liste over varer fra butikken som skal brukes til å trekke random vare på salg i dagens kalender

const varer = [
  // Nature / Weird Collection
  {
    navn: "Nature Leaf Necklace",
    type: "smykke",
    kolleksjon: "Nature / Weird",
    pris: 699,
  },
  {
    navn: "Twisted Branch Ring",
    type: "ring",
    kolleksjon: "Nature / Weird",
    pris: 499,
  },
  {
    navn: "Moss Drop Earrings",
    type: "øredobber",
    kolleksjon: "Nature / Weird",
    pris: 549,
  },
  {
    navn: "Stone Whisper Bracelet",
    type: "smykke",
    kolleksjon: "Nature / Weird",
    pris: 599,
  },
  {
    navn: "Golden Beetle Brooch",
    type: "smykke",
    kolleksjon: "Nature / Weird",
    pris: 649,
  },
  {
    navn: "Silver Root Pendant",
    type: "smykke",
    kolleksjon: "Nature / Weird",
    pris: 579,
  },
  {
    navn: "Twilight Fern Earrings",
    type: "øredobber",
    kolleksjon: "Nature / Weird",
    pris: 499,
  },
  {
    navn: "Crescent Wood Ring",
    type: "ring",
    kolleksjon: "Nature / Weird",
    pris: 449,
  },
  {
    navn: "Lava Drop Necklace",
    type: "smykke",
    kolleksjon: "Nature / Weird",
    pris: 699,
  },
  {
    navn: "Frozen Dew Earrings",
    type: "øredobber",
    kolleksjon: "Nature / Weird",
    pris: 519,
  },
  {
    navn: "Crystal Root Ring",
    type: "ring",
    kolleksjon: "Nature / Weird",
    pris: 559,
  },
  {
    navn: "Wildflower Choker",
    type: "smykke",
    kolleksjon: "Nature / Weird",
    pris: 629,
  },
  {
    navn: "Moonstone Vine Earrings",
    type: "øredobber",
    kolleksjon: "Nature / Weird",
    pris: 589,
  },

  // Elva Marn Collection
  {
    navn: "Elva Marn Silver Stream Necklace",
    type: "smykke",
    kolleksjon: "Elva Marn",
    pris: 799,
  },
  {
    navn: "Elva Marn Golden Flow Ring",
    type: "ring",
    kolleksjon: "Elva Marn",
    pris: 749,
  },
  {
    navn: "Elva Marn Crystal Drop Earrings",
    type: "øredobber",
    kolleksjon: "Elva Marn",
    pris: 699,
  },
  {
    navn: "Elva Marn Ocean Whisper Pendant",
    type: "smykke",
    kolleksjon: "Elva Marn",
    pris: 829,
  },
  {
    navn: "Elva Marn River Stone Bracelet",
    type: "smykke",
    kolleksjon: "Elva Marn",
    pris: 759,
  },
  {
    navn: "Elva Marn Flowing Leaf Ring",
    type: "ring",
    kolleksjon: "Elva Marn",
    pris: 719,
  },
  {
    navn: "Elva Marn Tide Pearl Earrings",
    type: "øredobber",
    kolleksjon: "Elva Marn",
    pris: 769,
  },
  {
    navn: "Elva Marn Streamline Necklace",
    type: "smykke",
    kolleksjon: "Elva Marn",
    pris: 849,
  },
  {
    navn: "Elva Marn Waveform Ring",
    type: "ring",
    kolleksjon: "Elva Marn",
    pris: 699,
  },
  {
    navn: "Elva Marn Flowlight Earrings",
    type: "øredobber",
    kolleksjon: "Elva Marn",
    pris: 789,
  },
  {
    navn: "Elva Marn Waterfall Pendant",
    type: "smykke",
    kolleksjon: "Elva Marn",
    pris: 879,
  },
  {
    navn: "Elva Marn Driftstone Ring",
    type: "ring",
    kolleksjon: "Elva Marn",
    pris: 769,
  },

  // Exclusive Collection
  {
    navn: "Exclusive Diamond Line Necklace",
    type: "smykke",
    kolleksjon: "Exclusive Collection",
    pris: 1299,
  },
  {
    navn: "Exclusive Gold Halo Ring",
    type: "ring",
    kolleksjon: "Exclusive Collection",
    pris: 1399,
  },
  {
    navn: "Exclusive Emerald Drop Earrings",
    type: "øredobber",
    kolleksjon: "Exclusive Collection",
    pris: 1249,
  },
  {
    navn: "Exclusive Sapphire Shine Pendant",
    type: "smykke",
    kolleksjon: "Exclusive Collection",
    pris: 1349,
  },
  {
    navn: "Exclusive Platinum Circle Ring",
    type: "ring",
    kolleksjon: "Exclusive Collection",
    pris: 1499,
  },
  {
    navn: "Exclusive Ruby Heart Necklace",
    type: "smykke",
    kolleksjon: "Exclusive Collection",
    pris: 1399,
  },
  {
    navn: "Exclusive Diamond Pearl Earrings",
    type: "øredobber",
    kolleksjon: "Exclusive Collection",
    pris: 1299,
  },
  {
    navn: "Exclusive Golden Star Bracelet",
    type: "smykke",
    kolleksjon: "Exclusive Collection",
    pris: 1199,
  },
  {
    navn: "Exclusive Crystal Crown Ring",
    type: "ring",
    kolleksjon: "Exclusive Collection",
    pris: 1349,
  },
  {
    navn: "Exclusive Moonlight Earrings",
    type: "øredobber",
    kolleksjon: "Exclusive Collection",
    pris: 1249,
  },
  {
    navn: "Exclusive Midnight Shine Necklace",
    type: "smykke",
    kolleksjon: "Exclusive Collection",
    pris: 1399,
  },
  {
    navn: "Exclusive Radiant Gem Ring",
    type: "ring",
    kolleksjon: "Exclusive Collection",
    pris: 1449,
  },

  // Arv Classics
  {
    navn: "Arv Classics Silver Heritage Necklace",
    type: "smykke",
    kolleksjon: "Arv Classics",
    pris: 699,
  },
  {
    navn: "Arv Classics Vintage Gold Ring",
    type: "ring",
    kolleksjon: "Arv Classics",
    pris: 749,
  },
  {
    navn: "Arv Classics Classic Pearl Earrings",
    type: "øredobber",
    kolleksjon: "Arv Classics",
    pris: 689,
  },
  {
    navn: "Arv Classics Antique Filigree Pendant",
    type: "smykke",
    kolleksjon: "Arv Classics",
    pris: 779,
  },
  {
    navn: "Arv Classics Heirloom Diamond Ring",
    type: "ring",
    kolleksjon: "Arv Classics",
    pris: 829,
  },
  {
    navn: "Arv Classics Timeless Knot Earrings",
    type: "øredobber",
    kolleksjon: "Arv Classics",
    pris: 729,
  },
  {
    navn: "Arv Classics Heritage Gold Bracelet",
    type: "smykke",
    kolleksjon: "Arv Classics",
    pris: 799,
  },
  {
    navn: "Arv Classics Silver Crest Ring",
    type: "ring",
    kolleksjon: "Arv Classics",
    pris: 769,
  },
  {
    navn: "Arv Classics Vintage Drop Earrings",
    type: "øredobber",
    kolleksjon: "Arv Classics",
    pris: 739,
  },
  {
    navn: "Arv Classics Legacy Pendant",
    type: "smykke",
    kolleksjon: "Arv Classics",
    pris: 789,
  },
  {
    navn: "Arv Classics Gold Crest Ring",
    type: "ring",
    kolleksjon: "Arv Classics",
    pris: 799,
  },
];

// Lage kalenderen:
function lagKalender(){
    const kalender = document.getElementById("calendar");

    // Lage 24 luker med for loop:
    for (let i = 1; i <= 24; i++){
      const luke = document.createElement("div");
      luke.classList.add("luke");
      luke.textContent = i; //viser tallet på luken

      // Klikk for å åpne luke:
      luke.addEventListener("click", () => åpneLuke(i, luke));

      // Mouseleave: gå tilbake til normal størrelse
      luke.addEventListener("mouseleave", () => {
        luke.classList.remove("åpnet");
      });

      kalender.appendChild(luke);
    }
}
lagKalender();

// Åpne luke:
function åpneLuke(dag, luke){
  const dagensDato = new Date().getDate();

  //sjekke om en får lov å åpne luken:
  if (dag > dagensDato) {
    alert("Denne luken kan ikke åpnes enda");
    return;
  }

  // Trekke tilfeldig vare og rabatt
  const tilfeldigVare = varer[Math.floor(Math.random() * varer.length)];
  const rabatt = Math.floor(Math.random() * 40) + 10; //gir mellom 10 og 50% rabatt.

  // Tilfeldig rabattkode (f.eks: ARV23B)
  const kode = `${tilfeldigVare.kolleksjon
    .split(" ")[0]
    .toUpperCase()}${rabatt}${String.fromCharCode(
    65 + Math.floor(Math.random() * 26)
  )}`;

  //Tømme tidligere innhold i luken
  luke.textContent = "";

  // Lager nytt element med ønsket tekst
  const tekstEl = document.createElement("p");
  tekstEl.textContent = `${rabatt}% rabatt på ${tilfeldigVare.navn}!`;
  tekstEl.classList.add("rabatt"); // legger til animasjon
  luke.appendChild(tekstEl);



  // // skrift-styling
  tekstEl.style.fontSize = "13px";
  tekstEl.style.fontWeight = "thin";
  tekstEl.style.color = "#000";
  tekstEl.style.textAlign = "center";

  //   rabattkode:
  const kodeEl = document.createElement("p");
  kodeEl.textContent = `Bruk kode: ${kode}`;
  kodeEl.style.fontSize = "11px";
  kodeEl.style.color = "#333";
  kodeEl.style.fontStyle = "italic";
  kodeEl.style.marginTop = "8px";

  luke.appendChild(tekstEl);
  luke.appendChild(kodeEl);

  // legge til "åpnet"-klasse for css-styling
  luke.classList.add("åpnet");
}

lagKalender();


// Ps: Ideen min er en julekalenderen til en nettbutikk, hvor brukeren skal få en tilfeldig rabatt på et tilfeldig produkt. Om dette var ver en virkelig nettbutikk måtte rabattkoden:

// lagres på en server/database

// være knyttet til en spesifikk vare eller kolleksjon

// ha utløpsdato, og

// valideres når kunden bruker den i handlekurven.

// Det krever:

// Backend-kode (for eksempel i Node.js, PHP eller Python)

// Database (for å lagre gyldige koder)

// Kommunikasjon mellom frontend (din kalender) og backend via API (for eksempel fetch())


// Sidne jeg ikke har lært disse tingene, har jeg for denne oppgaven bare laget en tilfeldig, visuell rabattkode når brukeren åpner en luke.
