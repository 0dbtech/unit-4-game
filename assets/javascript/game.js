$(document).ready(function() {

console.log("javascript test");


/* <h1>Crypto Miner</h1>
<div id="info">Game info here</div>
<div id="start">Click here to start game</div>
<div id="target-number">start-number</div>
<div id="wins">wins</div>
<div id="losses">losses</div>
<div id="counter">counter</div>
<div class="coin" id="coin1">coin1</div>
<div class="coin" id="coin2">coin2</div>
<div class="coin" id="coin3">coin1</div>
<div class="coin" id="coin4">coin1</div> */

var targetNum = 0;
var wins = 0;
var losses = 0;
var counter = 0;
var isGameStarted = false;
var coinNum = 0;

console.log("game started " + isGameStarted);

function targetNumGen(){
      targetNum = Math.floor((Math.random() * 120) + 19);
       return;
 }


function coinNumGen(){
      coinNum = Math.floor((Math.random() * 12) + 1);
      return coinNum;
}


// imageCrystal.attr("data-crystalvalue", numberOptions[i]);

// function coinNumGen(){
//       // add attributes
      
//       coin = Math.floor((Math.random() * 12) + 1);
//       return coinVal;
// }


function resetGame(){
console.log("resetting game");
$('#info').hide();
targetNumGen();
loadCoins();
console.log("target # is " + targetNum);
counter = 0;
isGameStarted = true;
updateDOM();

return;
// isGameStarted = true;

}

function updateDOM(){
      $("#target-number").html("<h2>Target Number: " + targetNum + "</h2>");
      $("#wins-dom").html("<h2>Wins: " + wins + "</h2>");
      $("#loss-dom").html("<h2>Losses: " + losses + "</h2>");
      $("#counter").html("<h2>Counter: " + counter + "</h2>");
return;
}

function scoreCheck(){

      if (counter === targetNum) {
            alert("YOU WIN!");
            wins++;
            resetGame();
          }
      
          else if (counter >= targetNum) {
            alert("YOU LOST!");
            losses++;
            resetGame();
          }

      updateDOM();       
      return; 
}

function loadCoins (){
      coinNumGen()
      $('#coin1').attr('data-coinvalue', coinNum);
      console.log(coinNum);
      coinNumGen()
      $('#coin2').attr('data-coinvalue', coinNum);
      console.log(coinNum);
      coinNumGen()
      $('#coin3').attr('data-coinvalue', coinNum);
      console.log(coinNum);
      coinNumGen()
      $('#coin4').attr('data-coinvalue', coinNum);
      console.log(coinNum);
    return;     
}

// Click events for coins
$("#start").on("click", function() {

      console.log("game started " + isGameStarted);
      resetGame();
      console.log("game started " + isGameStarted);
      return;
     });

$(".coin").on("click", function() {

      var coinValue = ($(this).attr("data-coinvalue"));
      coinValue = parseInt(coinValue);
      counter += coinValue;
      console.log("coin value is " + coinValue );
      scoreCheck();  
      console.log("end");
});

// DOCUMENT READY END
  });