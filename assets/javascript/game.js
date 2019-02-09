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
var coin1 = 0;
var coin2 = 0;
var coin3 = 0;
var coin4 = 0;
var isGameStarted = false;
console.log("game started " + isGameStarted);

function targetNumGen(){
      targetNum = Math.floor((Math.random() * 120) + 19);
       return;
 }

function coinNumGen(){
      coin1 = Math.floor((Math.random() * 12) + 1);
      coin2 = Math.floor((Math.random() * 12) + 1);
      coin3 = Math.floor((Math.random() * 12) + 1);
      coin4 = Math.floor((Math.random() * 12) + 1);
      return;
}



function resetGame(){
console.log("resetting game");
targetNumGen();
coinNumGen();
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

//score check
function scoreCheck(){
// if ( isGameStarted = true) {

      if (counter === targetNum) {
            alert("You win!");
            wins++;
            resetGame();
          }
      
          else if (counter >= targetNum) {
            alert("You lose!!");
            losses++;
            resetGame();
          }
      updateDOM();       
      return; 
}

//game start

//       resetGame();
// }
// if (isGameStarted = false){
// resetGame();
// }
// else {

// Click events for coins
$("#start").on("click", function() {

      console.log("game started " + isGameStarted);
      resetGame();
      console.log("game started " + isGameStarted);
      return;
     });

$("#coin1").on("click", function() {

       console.log("coin1 clicked " + coin1);
       counter += coin1;
       console.log("counter " + counter);
       scoreCheck();
      return;
      });

$("#coin2").on("click", function() {

       console.log("coin2 clicked " + coin2);
       counter += coin2;
       console.log("counter " + counter);
       scoreCheck();
       return;
      });

$("#coin3").on("click", function() {

       console.log("coin3 clicked " + coin3);
       counter += coin3;
       console.log("counter " + counter);
       scoreCheck();
       return;
      });

$("#coin4").on("click", function() {

       console.log("coin4 clicked " + coin4);
       counter += coin4;
       console.log("counter " + counter);
       scoreCheck();
       return;
      });


  

   
//game start END
// }

// else {
// console.log("resetting game");
// resetGame();
// return;
// }



// DOCUMENT READY END
  });

