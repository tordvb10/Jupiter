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
    console.log(settetekst)
    console.log(key, array[key]);
    document.querySelector(key).innerHTML = settetekst
  });
}

const array = {
  "main #introduksjon p": {
    'norsk': "Jupiter er den største planeten i solsystemet, dobbel så stor som massen av alle de andre planetene sin masse til sammen.",
    'english': "Jupiter is the largest planet i the solar system, twice as big as mass of all the other planets combined.",
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