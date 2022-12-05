const first = {
    playerName: "Player One",
    name: document.querySelector('#namePlayerOne'),
    button: document.querySelector('#playerOne'),
    display: document.querySelector('#plOneScore'),
    score: 0,
    nameInput: document.querySelector('#nameInputPlayerOne')
}
const second = {
    playerName: "Player Two",
    name: document.querySelector('#namePlayerTwo'),
    button: document.querySelector('#playerTwo'),
    display: document.querySelector('#plTwoScore'),
    score: 0,
    nameInput: document.querySelector('#nameInputPlayerTwo')
}

let winner = document.querySelector('#winner');
const resetBtn = document.querySelector('#resetButton');
const goalSelect = document.querySelector('#goal-select');
let goal = parseInt(goalSelect.value);


goalSelect.addEventListener('input', function (event) {
    goal = parseInt(goalSelect.value);
    buttonSet();
    event.stopPropagation();
})

//

first.button.addEventListener('click', function () {
    buttonEvent(first, second);
    // if (valueOne < goal & valueTwo < goal) {
    //     valueOne++;
    //     plOneScore.textContent = valueOne;
    //     if (valueOne === goal) {                                                     My First Implementation
    //         plOneScore.style.color = 'green';
    //         plTwoScore.style.color = 'red';
    //         buttonOne.disabled = true;
    //         buttonTwo.disabled = true;
    //     }
    // }

})

second.button.addEventListener('click', function () {
    buttonEvent(second, first);
    // if (valueTwo < goal & valueOne < goal) {
    //     valueTwo++;
    //     plTwoScore.textContent = valueTwo;
    //     if (valueTwo === goal) {             
    //         plOneScore.style.color = 'red';
    //         plTwoScore.style.color = 'green';
    //         buttonOne.disabled = true;
    //         buttonTwo.disabled = true;
    //     }
    // }
})

resetBtn.addEventListener('click', function () {
    for (player of [first, second]) {
        player.score = 0;
        player.display.textContent = player.score;
        player.name.textContent = player.playerName;
    }
    // first.score = 0;
    // second.score = 0;
    // second.display.textContent = second.score;                       My First Implementation
    // first.display.textContent = first.score;
    // namePlayerOne.textContent = "Player One";
    // namePlayerTwo.textContent = "Player Two";
    goalSelect.value = 5;
    goal = parseInt(goalSelect.value);
    winner.textContent = "";
    goalSelect.disabled = false;
    buttonSet();

})

function buttonSet() {
    first.display.style.color = 'black';
    second.display.style.color = 'black';
    first.button.disabled = false;
    second.button.disabled = false;
}

function buttonEvent(first, second) {
    goalSelect.disabled = true;
    if (first.score < goal & second.score < goal) {
        first.score++;
        first.display.textContent = first.score;
        if (first.score === goal - 1 & second.score === goal - 1) {
            goal++;
        }
        if (first.score === goal) {
            console.log(first.score - second.score >= 2)
            first.display.style.color = 'red';
            second.display.style.color = 'green';
            first.button.disabled = true;
            second.button.disabled = true;
            winner.textContent = `Congratulations ${first.name.textContent}, you are the winner! `;

        }
    }
}

let nameInputPlayerOne = document.querySelector('#nameInputPlayerOne');
let nameInputPlayerTwo = document.querySelector('#nameInputPlayerTwo');

nameInputPlayerOne.addEventListener('change', function () {
    setName(nameInputPlayerOne, first);
})
nameInputPlayerTwo.addEventListener('change', function () {
    setName(nameInputPlayerTwo, second);
})

function setName(name, player) {
    player.name.textContent = name.value;
    name.value = '';
}



