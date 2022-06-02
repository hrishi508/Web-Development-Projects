var numberOfDrums = document.querySelectorAll(".drum").length

function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();                
            break;

        case "s":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();                
            break;

        case "a":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();                
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();                
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();                
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();                
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();                
            break;

        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(key){
    document.querySelector("." + key).classList.toggle("pressed");
    setTimeout(function () {
        document.querySelector("." + key).classList.toggle("pressed");
    }, 100);
}

for (var i = 0; i < numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        makeSound(this.textContent);
        buttonAnimation(this.textContent);
    });
}

document.addEventListener("keydown", function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
});