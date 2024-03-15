function chooseOption(player, choice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    if (player === 'player1') {
        document.getElementById('player1Prompt').textContent = 'Speler 1 heeft gekozen!';
        document.getElementById('player2Container').style.display = 'block';
        document.getElementById('player2Prompt').textContent = 'Speler 2, Kies je optie!';
    } else {
        document.getElementById('player2Prompt').textContent = 'Speler 2 heeft gekozen!';
        document.getElementById('result').style.display = 'block';
        determineWinner(player, choice, computerChoice);
    }
}
function determineWinner(player, playerChoice, computerChoice) {
    var result;
    if (playerChoice === computerChoice) {
        result = 'Gelijkspel!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'Speler 1 ' + player.charAt(player.length) + ' wint!';
    } else {
        result = 'Speler 2 wint!';
    }
    displayResult(result);
}
function displayResult(result) {
    var resultMessage = `Resultaat: ${result}`;
    document.getElementById('result').textContent = resultMessage;
}

