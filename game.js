var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var check = false;
var level = 0;


function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text(`level ${level}`);
    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    playSound(randomChosenColor);
    animatePress(randomChosenColor);

}

$(".btn").click(function () {

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer (userClickedPattern.length-1);
});

function playSound(name) {
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
};

function animatePress(currentColor) {
    $("#" + currentColor).fadeIn(100).fadeOut(100).fadeIn(100).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass('pressed');
    }, 100);


}

$("body").keypress(function (event) {

    if (event.key == "a" || event.key == "A") {

        if (check == false) {
            nextSequence();
            check = true;
        }

    }

});

function checkAnswer (currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel] ){
    console.log("Success...");

        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function () {nextSequence()}, 1000);
        }
    
    }else{
         playSound("wrong");
$("body").addClass('game-over');
    setTimeout(function () {$("body").removeClass('game-over');}, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    
    startOver();
}
    
}
function startOver(){
    var check = false;
    var level = 0;
    var gamePattern = [];
}
