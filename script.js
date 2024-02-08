// let countClicks = 0
// let actionButton = document.getElementById("actionButton");
// let inputName = document.getElementById("name");


//     if (!inputName.value) {
//         actionButton.style.backgroundColor = "red"
//         return;
//     }
//     actionButton.style.backgroundColor = "green"
// }
// console.log(action);


// function action() {
//     countClicks++

//     let times;
//     if (countClicks == 1){
//         actionButton.innerText = (`Foi clicado: ${countClicks} vez`)
//         return;
//     }
//     actionButton.innerText = (`Foi clicado: ${countClicks} vezes`)
// }

//     let actionButton = document.getElementById("actionButton"){

//     actionButton.innerText = "Cliclou"
//     actionButton.style.backgroundColor = "#009488";
//     actionButton.style.border = "none";

//     //console.log(actionButton.innerText);

let countClicks = 0
let actionButton = document.getElementById("actionButton");
let inputAge = document.getElementById("age");
let message = document.getElementById("message");

function action() {
    let inputAgeValue = inputAge.value
    console.log(inputAgeValue)
    if (!inputAgeValue) {
        message.innerText = "Preencha o campo de idade!"
        message.style.color = 'red';
        return;
    }


    if (inputAgeValue >= 18) {
        message.innerText = "Você já pode ser preso!"
        message.style.color = 'green';
        return;
    }

    message.innerText = "Ainda não pode ser preso!"
    message.style.color = 'orange';
}