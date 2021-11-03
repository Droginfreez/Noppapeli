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
  if(maara > 8) {alert("pelissä voi olla enintään 8 pelaajaa!")
return false;} else {}
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
    tempScore=0;
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
  voittiko();
  if (turn >= maara) {
  vuoronVaihto();
    } else {
        turn = turn +1;
        tempScore=0;
        document.getElementById("tempScore").innerHTML = tempScore;
        document.getElementById("turn").innerHTML = turn;
          }
}

function vuoronVaihto() {

        round = round + 1;
        tempScore=0;
        turn = 1;
        document.getElementById("status").innerHTML = "Uusi kierros";
        document.getElementById("round").innerHTML = round;
        document.getElementById("tempScore").innerHTML = tempScore;
      document.getElementById("turn").innerHTML = turn;
    }   


function lisaapisteet(tempScore){

  if(turn == 1){
      pisteet1 += tempScore;
  }
  if(turn == 2){
      pisteet2 += tempScore;
  }
  if(turn == 3){
      pisteet3 += tempScore;
  }
  if(turn == 4){
      pisteet4 += tempScore;
  }
  if(turn == 5){
      pisteet5 += tempScore;
  }
  if(turn == 6){
      pisteet6 += tempScore;
  }
  if(turn == 7){
      pisteet7 += tempScore;
  }
  if(turn == 8){
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
function voittiko() {
    if(pisteet1 >= 100){
       alert("Pelaaja " + nimet[0] + " voitti pelin!")
       location. reload()
    }
    if(pisteet2 >= 100){
        alert("Pelaaja " + nimet[1] + " voitti pelin!")
        location. reload()
    }
    if(pisteet3 >= 100){
        alert("Pelaaja " + nimet[2] + " voitti pelin!")
        location. reload()
    }
    if(pisteet4 >= 100){
        alert("Pelaaja " + nimet[3] + " voitti pelin!")
        location. reload()
    }
    if(pisteet5 >= 100){
        alert("Pelaaja " + nimet[4] + " voitti pelin!")
        location. reload()
    }
    if(pisteet6 >= 100){
        alert("Pelaaja " + nimet[5] + " voitti pelin!")
        location. reload()
    }
    if(pisteet7 >= 100){
        alert("Pelaaja " + nimet[6] + " voitti pelin!")
        location. reload()
    }
    if(pisteet8 >= 100){
        alert("Pelaaja " + nimet[7] + " voitti pelin!")
        location. reload()
    }
    
}