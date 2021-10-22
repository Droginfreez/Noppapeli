var tempScore = 0;
var round = 1;
var turn = 1;
var pisteet1= 0;
var pisteet2= 0;
var pisteet3= 0;
var pisteet4= 0;
var pisteet5= 0;
var pisteet6= 0;
var pisteet7= 0;
var pisteet8= 0;
var nimet = [];
var i;
var o = 1;
var maara = [];
document.addEventListener('DOMContentLoaded', function()  {
  pelaajienMaara();
}, false);


function pelaajienMaara() {
 maara.push ((prompt("Syötä pelaajien määrä numerona, maks 8", "")));
pelaajienNimet();
}

function pelaajienNimet() {
  
for (i = 0; i < maara; i++) {
  var  pisteet1 = [];
    nimet.push ((prompt("Syötä pelaajan " + o++ + " nimi" , "")));
   
}
alert("moro")
lisaaPelaajat();
}


  




function rollDice(){

    var die1 = document.getElementById("die1");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    die1.innerHTML = d1;
    

 if (d1==1){
  document.getElementById("status").innerHTML = "Sait 1. Vuoro vaihtuu";
  
    tempScore=0;
    turn=turn +1;
    document.getElementById("tempScore").innerHTML = tempScore;
   
} else {
  document.getElementById("status").innerHTML = "Sait "+d1+".";
    tempScore=tempScore+d1;
    round=round +1;
    document.getElementById("tempScore").innerHTML = tempScore;
}
}
function endTurn() {
  document.getElementById("status").innerHTML = "Vuoro vaihtuu";
  turn = turn + 1;
  pisteet = pisteet + tempScore;
  tempScore=0;
  document.getElementById("pisteet").innerHTML = pisteet;
  document.getElementById("tempScore").innerHTML = tempScore;
if (pisteet >= 100) {
  alert("Pelaaja" + nimi + "voitti pelin")
  location.reload(); 
    } else if (turn > maara){
    turn = 1;
    round = round + 1;
    tempScore=0;
    document.getElementById("status").innerHTML = "Uusi kierros";
  }
}
function lisaaPelaajat() {
  for(let a = 1; a <= pelaajia; a++){
    var id = ("pelaaja-" + a);
    var pointsID = ("pisteet-" + a);
    document.getElementById(id).innerHTML = nimet[(a - 1)];

    var pistemaara = 0;
    document.getElementById(pointsID).innerHTML = pistemaara;
}
}

