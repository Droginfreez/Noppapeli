var tempScore = 0;
var round = 1;
var turn = 1;
var pisteet = 0;
var nimet = [];
var i;
var o = 1;
var maara = [];




 maara.push ((prompt("Syötä pelaajien määrä numerona", "")));

for (i = 0; i < maara; i++) {
  var  pisteet1 = [];
    nimet.push ((prompt("Syötä pelaajan " + o++ + " nimi" , "")));
}
for (let i = 0; i < nimet.length; i++) {
  document.getElementById("pelaajat").innerHTML ="<br>"+ `${nimet[i]}` + " pisteet: " + pisteet +"<br>";
  document.writeln(`${nimet[i]}` + " pisteet: " + pisteet +"<br>");
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
