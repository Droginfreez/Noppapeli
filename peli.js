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

lisaaPelaajat();
paivitaPisteet();
}


  

function lisaaPelaajat() {
  for(let a = 1; a <= maara; a++){
    var id = ("pelaaja-" + a);
    var pointsID = ("pisteet-" + a);
    document.getElementById(id).innerHTML = nimet[(a - 1)];

    var pistemaara = 0;
    document.getElementById(pointsID).innerHTML = pistemaara;
}
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
    endTurn();
   
} else {
  document.getElementById("status").innerHTML = "Sait "+d1+".";
    tempScore=tempScore+d1;
    document.getElementById("tempScore").innerHTML = tempScore;
}
}


function endTurn() {
  
  document.getElementById("status").innerHTML = "Vuoro vaihtuu";
  lisaapisteet(tempScore); 
  turn = turn + 1;
  tempScore=0;
  document.getElementById("tempScore").innerHTML = tempScore;
  document.getElementById("vuoro").innerHTML = turn;

    } if (turn >= maara){
    round = round + 1;
    tempScore=0;
    document.getElementById("status").innerHTML = "Uusi kierros";
  }



function lisaapisteet(pisteet){

  if(vuoro == 1){
      pisteet1 += tempScore;
  }
  if(vuoro == 2){
      pisteet2 += tempScore;
  }
  if(vuoro == 3){
      pisteet3 += tempScore;
  }
  if(vuoro == 4){
      pisteet4 += tempScore;
  }
  if(vuoro == 5){
      pisteet5 += tempScore;
  }
  if(vuoro == 6){
      pisteet6 += tempScore;
  }
  if(vuoro == 7){
      pisteet7 += tempScore;
  }
  if(vuoro == 8){
      pisteet8 += tempScore;
  }
  paivitaPisteet();
}
function paivitaPisteet(){
  if(maara >= 8){
      document.getElementById("pisteet-8").innerHTML = pisteet8;
  }
  if(maara >= 7){
      document.getElementById("pisteet-7").innerHTML = pisteet7;
  }
  if(maara >= 6){
      document.getElementById("pisteet-6").innerHTML = pisteet6;
  }
  if(maara >= 5){
      document.getElementById("pisteet-5").innerHTML = pisteet5;
  }
  if(maara >= 4){
      document.getElementById("pisteet-4").innerHTML = pisteet4;
  }
  if(maara >= 3){
      document.getElementById("pisteet-3").innerHTML = pisteet3;
  }
  if(maara >= 2){
      document.getElementById("pisteet-2").innerHTML = pisteet2;
  }
  if(maara >= 1){
      document.getElementById("pisteet-1").innerHTML = pisteet1;
  }

}