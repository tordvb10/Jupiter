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
  byttspråk(language)
});

function byttspråk(languagen){
  Object.keys(array).forEach((key) => {
    let språk = array[key]
    let settetekst = språk[languagen]
    console.log(`settetekst = ${settetekst}`)
    console.log(key, array[key]);
    let gammeltekst = document.querySelector(key)
    console.log(`gammeltekst = ${gammeltekst}`)
    gammeltekst.innerHTML = settetekst
  });
}

const array = {
  "main #introduksjon p": {
    "norsk": 'Jupiter er den største planeten i solsystemet, dobbel så stor som massen av alle de andre planetene sin masse til sammen. <br \><br \>',
    "english": 'Jupiter is the largest planet i the solar system, twice as big as mass of all the other planets combined. <br \><br \>',
  },
  "main #introduksjon .imgtekst > div > div > div": {
    "norsk": 'Nøkkel-stikkord',
    "english": 'Key-notes',
  },
  "main #introduksjon .imgtekst ul": {
    "norsk": '<li>95 måner</li><li>2 satellitter</li><li>Great Red Spot</li>',
    "english": '<li>95 moons</li><li>2 satellites</li><li>Great Red Spot</li>',
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
knapp.click()