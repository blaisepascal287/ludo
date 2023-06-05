var dice_count = 1;

let arr = ["red", "blue", "yellow", "green"];
let i = 1;
let element = document.getElementById("dice_red");
console.log(element);
// while(i != 0 || i != 7){
//     if(dice_count == 6){
//         element[i].addEventListener('click', () => {
//             dice_roll();
//         });
//     }
//     else if(dice_count < 6){
//         element.addEventListener('click', () => {
//             dice_roll();
//             i++;
//         });
//     }
// }

// function dice_roll(){
//     let a = 1;
//     let b = 7;
//     dice_count = Math.floor(a + (b - a) * Math.random());
//     console.log(dice_count);
//     for(let i = 1; i < 7; i++){
//         if(document.getElementById(`g${i}`) != 'flex'){
//             document.getElementById(`g${i}`).style.display = 'none';
//             document.getElementById(`g${dice_count}`).style.display = 'flex';
//         }
//     }
//     document.getElementById(`g${dice_count}`).style.display = 'flex';
//     if(d == 6){
//         // dice_roll();
//     }
// }