document.getElementById("play").addEventListener("click", function(){
    fPlay();
});

function fPlay(){
    document.querySelector(".container").innerHTML = "";

    const difficultySelected = parseInt(document.getElementById("Difficulty").value);
    let squareNumber, squareNumberRow;

    switch(difficultySelected){
        case 1:
            squareNumber = 100;
            break;
        case 2:
            squareNumber = 81;
            break;
        case 3:
            squareNumber = 49;
    }

    const bombsNumber = 16;
    const bombList = generateBombs();
    console.log(bombList);

    function generateBombs(){
        const arrayBombs = [];

        while(arrayBombs.length < bombsNumber){
            const numeroRandom = generateNumeroRandom(1, squareNumber);
            if(!arrayBombs.includes(numeroRandom)){
                arrayBombs.push(numeroRandom);
            }
        }
        return arrayBombs;
    }
    
    function generateNumeroRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    squareNumberRow = Math.sqrt(squareNumber);

    creazioneQuadrato();
    function creazioneQuadrato(){
        const square = document.querySelector(".container");

        for(let i = 1; i <= squareNumber; i++){
            const quadrato = createItem(i);

            square.appendChild(quadrato);

            quadrato.addEventListener("click", function(){
                this.classList.add("selected");         
            });
        }
    }

    function createItem(num){
        const cell = document.createElement("div");
        const size = `calc(100% / ${squareNumberRow})`;
        cell.style.width = size;
        cell.style.height = size;
        cell.innerHTML = num;
        cell.classList.add("square");
        return cell;
    }
}