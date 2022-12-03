/* 
TO DO:
 -- Etter vakt flyttes alle objekter en plass framover og sistnevne settes inn bakerst.
 -- Må lage sorteringssystem, når en ny vakt genereres må arrayet sorteres etter hvem som har fått mest søvn,
 -- Legge inn semikolon mellom 2 første og siste siffer i vakt, bruk String[x,y].
 -- Legg til ikon ved siden av overskrift.
 -- Ta input fra HTML og lag deltagerobjekter.
 -- Lag system for registrering av hviletid.
 -- Få arrayet til å rekursere slik at lista får vakter for de neste 24 timene.
 -- Sambandsvakt...
*/

var mainEl = document.querySelector("#main");
var buttonEl = document.querySelector("#button");
buttonEl.addEventListener("click", listConstructor);

function listConstructor(){
    var currentDate = new Date();
    var startingHour = (currentDate.getHours() + 1) * 100;
    var intBegin = startingHour;
    var intEnd = startingHour + 200;
    var guardBegin = intBegin;
    var guardEnd = intEnd;
    
    var unsortedList = [
    personOne = {
    name: "VICTOR UDNÆS", isVF: false, restBeginHour: 0, restBeginDay: 0},
    personTwo = {
    name: "MARI TORGUNRUD", isVF: true, restBeginHour: 0, restBeginDay: 0},
    personThree = {
    name: "HENRIK VEDELD", isVF: true, restBeginDay: 0}
    ];

    for (var i = 0; i<unsortedList.length; i++) {
        var newPerson = document.createElement("p");

        if (intEnd >= 2400) {
            var temp = intEnd;
            intEnd = temp - 2400;
        }
        if (intBegin < 1000) {
            guardBegin = "0" + intBegin;
        }

        if (intEnd < 1000) {
            guardEnd = "0" + intEnd;
        } else {
            guardEnd = intEnd;
        }

        newPerson.innerHTML = unsortedList[i].name + ",&nbsp&nbsp&nbsp Vakt fra kl. " +
        guardBegin + "&nbsp&nbsp&nbsp&nbsp&nbsp Til kl. " + guardEnd;
        intBegin = intEnd;
        intEnd = intEnd + 200;
        unsortedList[i].restBeginDay = guardEnd;
        unsortedList[i].restBeginDay = currentDate.getDay;
        mainEl.appendChild(newPerson);

    }
}

function getTimeRested(breakStart) {
    var currentDate = new Date();
    return minutesElapsed = (currentDate.getTime() - breakStart)/1000;
}

function popup() {
var popup = document.getElementById("myPopup");
popup.classList.toggle("show");
}
