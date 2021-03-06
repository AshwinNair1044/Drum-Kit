var n = document.querySelectorAll(".drum").length;


window.addEventListener("load", function() {
  //this  part is responsible for making sound when the buttons are clicked
  for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      var letter = this.innerHTML;
      makeSound(letter);
      buttonAnimation(letter);
    })
  }
  //this part is responsible for making sound when the keys are pressed
  document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });
  //funtion responsible for making the sound
  function makeSound(key) {
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      default:
        console.log("error");
        break;
    }
  }
  function buttonAnimation(currentKey){
    var active = document.querySelector("."+currentKey);
    active.classList.add("pressed");
    setTimeout(function () {
      active.classList.remove("pressed");
    }, 100);
  }
});
