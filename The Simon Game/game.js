var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;
var clicks = 0;

$(document).keydown(function (){
    if (gameStarted === false){
        $("h1").text("Level 0");
        nextSequence();
        gameStarted = true;
    }
})

$(".btn").click(function (){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    clicks++;

    if (verifyPattern()){
        playSound(userChosenColor);
        animatePress(userChosenColor);

        if (clicks === level){
            setTimeout(nextSequence, 1000);
        }
    }

    else{
        gameOver();
    }
});

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColor);
    level++;
    clicks = 0;
    userClickedPattern = [];

    
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    $("h1").text("Level " + level);

    playSound(randomChosenColor);
}

function playSound(name){
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();    
}

function animatePress(currentColor){
    $("#" + currentColor).toggleClass("pressed").delay(100).queue(function (){
        $(this).toggleClass("pressed").dequeue();
    });
}

function verifyPattern(){
    if (userClickedPattern.length <= gamePattern.length && userClickedPattern[clicks - 1] === gamePattern[clicks - 1]){
        return true;
    }

    return false;
}

function gameOver(){
    playSound("wrong");
    $("body").toggleClass("game-over").delay(200).queue(function (){
        $(this).toggleClass("game-over").dequeue();
    });
    $("h1").text("Game Over, Press Any Key to Restart")
    gameStarted = false;
    level = 0;
    gamePattern = [];
}