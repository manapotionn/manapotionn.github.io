/////////////   MAIN FUNCTIONS  ////////////////

//make another pineapple appear on click
function click(evt) {
  // var c = document.getElementById("mainCanvas");
  // c.width = window.innerWidth; // give canvas same width...
  // c.height = window.innerHeight; // and height as our window.

  var div = document.createElement("div");
  div.classList.add("pineapple");

  //pineapple image
  var pineapple = document.createElement("img");
  pineapple.src = "images/pineapple" + Math.floor(Math.random() * 3) + ".svg";

  var original_width = pineapple.width + 1;
  var original_height = pineapple.height + 1;

  pineapple.width = Math.random() * 200 + 50;
  pineapple.height = (pineapple.width * original_width) / original_height;

  div.style.position = "fixed";
  div.style.marginLeft = Math.random() * 1000 + pineapple.width + "px";
  div.style.marginTop = Math.random() * 500 - pineapple.height + "px";

  var degrees = Math.random() * 180;

  div.style.transform = "rotate(".concat(degrees.toString(), "deg)");

  div.appendChild(pineapple);

  document.body.appendChild(div);
}

// function clear(evt) {
//   var allDogs = document.getElementsByClassName("dogdiv");
//   console.log(allDogs);
//   for (var i = 0; i < allDogs.length; i++) {
//     allDogs.item(i).style.display = "none";
//   }
// }

/////////////   SETUP THE HANDLERS  ////////////////
var inter;
var numPineapples = 0;
document.addEventListener("DOMContentLoaded", (event) => {
  console.log(event);
  inter = setInterval(function () {
    numPineapples += 1;
    if (numPineapples < 50) {
      click(event);
    } else {
      document.body.innerHTML = "";
      numPineapples = 0;
    }
  }, 1000);
});
//document.addEventListener("mousemove", tongueAngle);
//document.addEventListener("mousedown", click);
//document.getElementById("button").addEventListener("mousedown", clear);
