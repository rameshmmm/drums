// creating the audio objects
var audio1 = new Audio("sounds/tom-1.mp3");
var audio2 = new Audio("sounds/tom-2.mp3");
var audio3 = new Audio("sounds/tom-3.mp3");
var audio4 = new Audio("sounds/tom-4.mp3");
var audio5 = new Audio("sounds/snare.mp3");
var audio6 = new Audio("sounds/kick-bass.mp3");
var audio7 = new Audio("sounds/crash.mp3");

// play the sound for the selected letter
function playSound(letter){
  switch(letter){
  case "w":
    audio1.play();
    break;
  case "a":
    audio2.play();
    break;
  case "s":
    audio3.play();
    break;
  case "d":
    audio4.play();
    break;
  case "j":
    audio5.play();
    break;
  case "k":
    audio6.play();
    break;
  case "l":
    audio7.play();
    break;
  }
}

function buttonAnimation(currentLetter){
  var activeButton = document.querySelector("."+ currentLetter);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}

//To play the sound when the specific key is pressed
document.addEventListener("keypress",function(e){//event
  playSound(e.key);
  buttonAnimation(e.key);
});

// selecting all the buttons
var target =document.querySelectorAll("button");

// Adding the mouse click eventlistener for every button
for(var i = 0; i< target.length ; i++){
  target[i].addEventListener("click",function (){
    playSound(this.textContent);
    buttonAnimation(this.textContent);
    }
  );
}
