const knapp = document.getElementById("englishnorsk");
let language = "norsk";
let english = document.querySelector("#englishnorsk .english");
let norsk = document.querySelector("#englishnorsk .norsk");
console.log(knapp);
console.log(english);
console.log(document.getElementsByClassName("english"));
addEventListener("click", function () {
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
});

//const arraysss  {
//  {
//    let queryselector: ""
//  let norsken: ""
//let enelsken: ""
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
