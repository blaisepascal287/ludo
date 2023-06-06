let box = document.getElementsByClassName("box");
// function check (){for(let i = 0; i < 72; i++){
//     box[i].innerText = i;
// }} 
// check();
let safeStops = [5,6,19,31,39,52,65,66];
let players = ["red", "blue", "yellow", "green"];
let playerCount = 0;
let diceCount = 0;
document.addEventListener("keydown", (e) =>{
    // console.log(e.code);
    if(e.code == "Space" || "Enter"){
        console.log("space");
        document.querySelector('#dice').addEventListener("click");
    }
    if(e.code == "Digit1"){
        console.log("1");
        playerList[0].addEventListener("click");
    }
    if(e.code == "Digit2"){
        console.log("2");
    }
    if(e.code == "Digit3"){
        console.log("3");
    }
    if(e.code == "Digit4"){
        console.log("4");
    }
});
let hole = document.getElementsByClassName("hole");
let coin = document.getElementsByClassName("coin");
for(let i = 0; i < 17; i++){
    coin[i].style.left = `${hole[i].getBoundingClientRect().left + 6}px`;
    coin[i].style.top = `${hole[i].getBoundingClientRect().top + 6}px`;
}
