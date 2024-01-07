const knapp = document.getElementById("englishnorsk");
let language = "english";
let english = document.querySelector("#englishnorsk .english");
let norsk = document.querySelector("#englishnorsk .norsk");
console.log(knapp);
console.log(english);
console.log(document.getElementsByClassName("english"));
knapp.addEventListener("click", function () {
  console.log("knappen er trykket!");
  if (language === "norsk") {
    console.log("Konverterer nettsiden til Engelsk.");
    //Converter nettside start
    english.style.fontWeight = "400";

    norsk.style.fontWeight = "900";
    //Converter nettside slutt
    language = "english";
  } else if (language === "english") {
    console.log("Converting the webpage to Norwegian.");
    //Converting webpage start
    english.style.fontWeight = "900";

    norsk.style.fontWeight = "400";
    //Converting webpage end
    language = "norsk";
  }
  byttspraok(language);
});

function byttspraok(languagen) {
  Object.keys(array).forEach((key) => {
    let spraok = array[key];
    let settetekst = spraok[languagen];
    console.log(`settetekst = ${settetekst}`);
    console.log(key, array[key]);
    let gammeltekst = document.querySelector(key);
    console.log(`gammeltekst = ${gammeltekst}`);
    gammeltekst.innerHTML = settetekst;
  });
}

const array = {
  "main #introduksjon p": {
    norsk:
      "Jupiter er den største planeten i solsystemet, dobbel så stor som massen av alle de andre planetene sin masse til sammen. <br ><br >",
    english:
      "Jupiter is the largest planet i the solar system, twice as big as mass of all the other planets combined. <br ><br >",
  },
  "main #introduksjon .imgtekst > div > div > div": {
    norsk: "Nøkkel-stikkord",
    english: "Key-notes",
  },
  "main #introduksjon .imgtekst ul": {
    norsk: "<li>95 måner</li><li>2 satellitter</li><li>Great Red Spot</li>",
    english: "<li>95 moons</li><li>2 satellites</li><li>Great Red Spot</li>",
  },
  "main #myswiping #Jupiter-swipe p": {
    norsk: "Linker til Jupiter",
    english: "Links to Jupiter",
  },
  "main #myswiping #Atmosfære-swipe": {
    norsk: "<h3>Atmosfæren</h3><p>Linker til<br > Atmosfæren</p>",
    english: "<h3>The Atmosphere</h3><p>Links to Atmosphere</p>",
  },
  "main #myswiping #TheGreatRedSpot-swipe p": {
    norsk: "Linker til <br />The Great Red Spot",
    english: "Links to <br />The Great Red Spot ",
  },
  "main #myswiping #Ring-swipe": {
    norsk: "<h3>Ringer</h3><p>Linker til <br >Ringene</p>",
    english: "<h3>The Rings</h3><p>Links to <br >The Rings</p>",
  },
  "main #myswiping #Moons-swipe": {
    norsk: "<h3>Månene</h3><p>Linker til <br>Månene</p>",
    english: "<h3>The Moons</h3><p>Links to <br >The Moons</p>",
  },
  "main #myswiping #Europa-swipe p": {
    norsk: "Linker til <br />Europa",
    english: "Links to <br />Europa",
  },
  "main #Jupiter h1": {
    norsk: "Jupiter, en romersk gudekonge.",
    english: "Jupiter, a Roman god-king.",
  },
  "main #Jupiter p": {
    norsk:
      "Jupiter har fått sitt navn fra kongen av de romerske gudene, og er den største planeten i solsystemet vårt. Hvis jorden var av størrelse av atomet nikkel, ville Jupiter være på størrelse med en basketball, i følge NASA.",
    english:
      "Jupiter has got its name from the king of the Roman gods, and it is the largest planet in the our solar system. If the earth was at the size of the atom nickel, Jupiter would be on the size of a basketball, according to NASA.",
  },
  "main #Atmosfæren #Atmosfære-tittel-1": {
    norsk: "Atmosfæren",
    english: "Atmosphere",
  },
  "main #Atmosfæren #Atmosfære-avsnitt-1": {
    norsk: `Jupiters observerbare atmosfære er veldig tynn. Like tynn som et
              epleskall på et eple. Atmosfæren er den delen av en planet i
              gassform man kan observere med det blåtte øye. <br /><br />Atmosfærens
              overflate har et veldig fascinertende mønster, det kommer av vortex. Vortex
              er turbulent fluidstrømninger, hvilket vil si at masse gass
              virvler i fullstendig kaos. Men allikevel ser man at det er system
              i kaoset. Vortex har en konstant vindretning. Hvert lag av farge i
              atmosfæren, fra ekvator til polene, har sin egen vindretning, og
              mønsteret er tilsvarende symmetrisk fra ekvator og til hver sin
              respektiv polar. Mellom lagene ser man turbulent vortex, og dens
              retning skyldes av samme type værfenomen som man finner på jorden,
              Coriolios effekten. <br /><br />Sentripital radiusen til Jupiters
              kjerne er størst ved ekvator hvilke gir kraftigere vinder, og blir
              mindre jo mer man nærmer seg polene, hvor rotasjonshastigheten er
              null. Dette gir forskjellige regioner med lav og høytrykk som gir
              systematiske vindretninger.`,
    english: `Jupiters atmosphere is seemingly thin. Just as thin as the 
              apple peel is to an apple. The atmosphere is the part of the planet in
              gaseous form that can be observed by the naked eye.<br /><br />The atmospheric layer 
              has a fascinating pattern, which is caused by vortex. Vortex is turbulent
              streams of fluid. In other words: lots of gasseous streams out of order. 
              The streams has a constant point of direction. Each layer's color in the 
              atmosphere, from the equator till their respective poles, has its own flow direction. 
              `,
  },
};

//const arraysss  {
//  {
//    let queryselector: ""
//  let norsken: ""
//let englsken: ""
//},

//{
//  let queryselector: ""
//let norsken: ""
//let enelsken: ""
//}
//}
//for (i<0, arraysss.length,i++){
//  arraysss[i].queryselector
//}
knapp.click();
