
// FOR MOUSE CLICKS.
var numberofdrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofdrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){


    var x=this.innerHTML;
    buttonAnimation(x);

    switch (x) {


      case "w":
        var tom = new Audio('sounds/tom-1.mp3');
        tom.play();
        break;

      case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

      case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();

        break;

      case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();

        break;
      default:
        alert("your word doesnt exist in innterHTML");

    }




  });


}
// FOR KEYBOARD KEYS.

document.addEventListener("keydown", function(event) {

  var x=event.key;
  buttonAnimation(x);
  if(x==="w"||x==="W") {
    var tom = new Audio('sounds/tom-1.mp3');
    tom.play();
  }
  else if (x==="a"||x==="A") {
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();

  }
  else if (x==="s"||x==="S") {
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
  }
  else if (x==="d"||x==="D") {
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
  }
  else if (x==="j"||x==="J") {
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
  }
  else if (x==="k"||x==="K") {
    var crash = new Audio('sounds/crash.mp3');
    crash.play();


  }
  else if (x==="l"||x==="L") {
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();

  }



});

function buttonAnimation(click){
  var doc=document.querySelector("."+click);
  doc.classList.add("pressed");

  setTimeout(function() {
    doc.classList.remove("pressed");
}, 100);



}
