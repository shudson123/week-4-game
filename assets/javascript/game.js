var blueCrystal = "Blue";
var greenCrystal = "Green";
var redCrystal = "Red";
var yellowCrystal = "Yellow";

var score = 0;
var target = 0;
var wins = 0;
var losses = 0;

var game = function() {
    score = 0;
    target = Math.floor(Math.random() * (101))+19;
    $("#randomNumber").html(target);
    $("#playerScore").html(score);
    bluePoints  = Math.floor(Math.random() * (11))+1;
    redPoints   = Math.floor(Math.random() * (11))+1;
    greenPoints = Math.floor(Math.random() * (11))+1;
    yellowPoints= Math.floor(Math.random() * (11))+1;
}

var result = function(){
    if (score == target) {
        alert("You won!");
        wins++;
        $("#wins").html(wins);
        game();
    }
    else if (score > target){
        alert("You lose!");
        losses++;
        $("#losses").html(losses);
        game();
    }
}

$("#blue").click(function(blue) {
    score = bluePoints + score;
    $("#playerScore").html(score);
    result();
})
$("#red").click(function(red) {
    score = redPoints + score;
    $("#playerScore").html(score);
    result();
})
$("#green").click(function(green) {
    score = greenPoints + score;
    $("#playerScore").html(score);
    result();
})
$("#yellow").click(function(yellow) {
    score = yellowPoints + score;
    $("#playerScore").html(score);
    result();
})

game();

    
