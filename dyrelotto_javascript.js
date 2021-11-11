var p1el = document.querySelector("p");
    var correctAnimal = ""; 
    var elementType = "";
    p1el.innerHTML = "hvor er dyret som sier " + hvilketDyr() + "?";
    var cowEl = document.querySelector("#cow");
    var sheepEl = document.querySelector("#sheep");
    var pigEl = document.querySelector("#pig");
    var riktigClass = "rettValg";
    var feilClass = "feilValg";
    cowEl.addEventListener("click", riktigEllerFeil);
    sheepEl.addEventListener("click", riktigEllerFeil);
    pigEl.addEventListener("click", riktigEllerFeil);

function hvilketDyr() {
    var randNum = Math.round(Math.random()*2)+1;
    console.log(randNum);
    if (randNum == 1) {
        correctAnimal = "cow";
        return "mø";
    } else if (randNum == 2) {
        correctAnimal = "sheep";
        return "bæ";
    } else {
        correctAnimal = "pig";
        return "nøff";
}
}

function riktigEllerFeil (e) {
    var element = e.target;
    var elementId = element.id;
    console.log("image pressed");
    console.log(correctAnimal);
    console.log(elementId);
    if (elementId == correctAnimal) {
        element.setAttribute("class", riktigClass);
        
    } else {
        element.setAttribute("class", feilClass);
        elementType = feilClass;
        p1el.innerHTML = "Feil, prøv igjen";
        p1el.addEventListener("click", reset);
    }
}

function reset(e) {
    var element = e.target;
    .setAttribute("class", "ingenValg");
    p1el.innerHTML = "hvor er dyret som sier " + hvilketDyr() + "?";
