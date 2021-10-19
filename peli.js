var tempScore = 0;
var round = 0;
var turn = 1;
var pisteet = 0;
var nimet = [];
var i;
var o = 1;
var maara = [];
var result= 0;



 maara.push ((prompt("Syötä pelaajien määrä numerona", "")));

for (i = 0; i < maara; i++) {
    nimet.push ((prompt("Syötä pelaajan " + o++ + " nimi" , "")));
}
for (let i = 0; i < nimet.length; i++) {
  document.writeln(`${nimet[i]}` + " pisteet: " + pisteet +"<br>");
}





function rollDice(){
  var result = 0;
  var content = document.createTextNode("Round: " + round + " Turn: "+ turn + " Points: " + result);

    var die1 = document.getElementById("die1");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    die1.innerHTML = d1;


 if (d1==1){
  document.getElementById("status").innerHTML = "Sait 1. Vuoro vaihtuu";
    result=result +0;
    tempScore=0;
    round=round +1;
    addScore(result)
   
} else {
  document.getElementById("status").innerHTML = "Sait "+d1+".";
    result=result +d1;
    tempScore=tempScore+result;
    round=round +1;

}
}
