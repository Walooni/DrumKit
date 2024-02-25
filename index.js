var numsOfButton = document.querySelectorAll(".drum").length;

var crash = new Audio("./sounds/crash.mp3");
var kickBass = new Audio("./sounds/kick-bass.mp3");
var snare = new Audio("./sounds/snare.mp3");
var tom1 = new Audio("./sounds/tom-1.mp3");
var tom2 = new Audio("./sounds/tom-2.mp3");
var tom3 = new Audio("./sounds/tom-3.mp3");
var tom4 = new Audio("./sounds/tom-4.mp3");

// var listMusic = [crash, kickBass, snare, tom1, tom2, tom3, tom4];


for (var i = 0; i < numsOfButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var cek = this.innerHTML;
    caseSound(cek);
    console.log(this.innerHTML)
  });
}

for (var i = 0; i < numsOfButton; i++) {
  document.addEventListener("keydown", function (event) {
      var keyName = event.key;
      caseSound(keyName);
      console.log(keyName);
    });
}

// external function / fungsi antara

function caseSound(key) {
  switch (key) {
    case "w":
      crash.play();
      break;
    case "a":
      kickBass.play();
      break;
    case "s":
      snare.play();
      break;
    case "d":
      tom1.play();
      break;
    case "j":
      tom2.play();
      break;
    case "k":
      tom3.play();
      break;
    case "l":
      tom4.play();
      break;
  }
}
