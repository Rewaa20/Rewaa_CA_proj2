let options = ['rock', 'paper', 'scissor'];
function generateChoice() {
    let indOfChoice = Math.trunc(Math.random() * 3);
    let choice = options[indOfChoice];
    return choice;
}
function setOption(choice, elm) {
    const player = document.getElementById(`${elm}`);

    if (choice === "rock") {
        player.innerHTML = "✊";

    } else if (choice === "paper") {
        player.innerHTML = "🖐️";

    } else {
        player.innerHTML = "✌";

    }
}
function computer() {
    let comChoice = generateChoice();
    setOption(comChoice, "computer");
}
function player(event) {
    computer();
    const plaChoice = event.target.value;
    setOption(plaChoice, "player");
    winner();
}
function winnerAnimate(player){
    player.animate(
        [
        { transform: "scale(1)" },
        { transform: "scale(1.2)" },
        { transform: "scale(1)" },

    ],
    {
        duration: 1500,
        iterations: 1,
    }
    );
}
function winner() {
    const c_player = document.getElementById('computer');
    const p_player = document.getElementById('player');
    const computer = document.getElementById('computer').innerHTML;
    const player = document.getElementById('player').innerHTML;
    const result = document.getElementById('result');
    if (computer == "✊" && player == "✌" || computer == "🖐️" && player == "✊" || computer == "✌" && player == "🖐️") {
        result.innerHTML = "🙄 you lose 🚶🏻";
        result.classList.add('loser');
        result.classList.remove('winner');
        winnerAnimate(c_player);
    }
    else if (player == "✊" && computer == "✌" || player == "🖐️" && computer == "✊" || player == "✌" && computer == "🖐️") {
        result.innerHTML = "🏆 you win 🎉";
        result.classList.add('winner');
        result.classList.remove('loser');
        winnerAnimate(p_player);
      
    }
    if (player === computer) {
        result.innerHTML = "you Tied";
        result.classList.remove('winner');
        result.classList.remove('loser');
        

    }
}
function reset() {
    document.getElementById('computer').innerText = "✊";
    document.getElementById('player').innerText = "✊";
    document.getElementById('result').innerText = "Who is winner?";
    document.getElementById('result').classList.remove('winner');
    document.getElementById('result').classList.remove('loser');
}