var nimet = [];
var i;
for (i = 0; i < 2; i++) {
    nimet.push ((prompt("Syötä pelaajien nimet" , "")));
}

for (let i = 0; i < nimet.length; i++) {
    document.writeln(`${i+1}. ${nimet[i]}` + "<br>");
}




function rollDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "You rolled "+diceTotal+".";
    if(d1 == d2){
        status.innerHTML += " DOUBLES! You get a free turn!!";
    }
}