let btnStartGame = document.getElementById("btnStartGame");
let scoreBlock = document.querySelector('.menu .score-block');
scoreBlock.style.display = 'none';

btnStartGame.onclick = function() {
    let skin = document.querySelector('.skins input[type=radio]:checked').value;
    let blockStartGame = document.querySelector('.start-game');
    blockStartGame.style.display = 'none';
    scoreBlock.style.display = 'block';

    createPlayer(skin);

    backgroundSound();
    heartIconsPlayer();

    for (let i=0; i < randomInteger(1,10); i++) {
        createEnemy();
    }
}

function endGame() {
    let endGameBlock = document.querySelector('.end-game');
    endGameBlock.classList.remove('hidden');
    isGameOver = true;
    app.innerHTML = "";
}

let btnRestartGame = document.getElementById("btnRestartGame");
btnRestartGame.onclick = function() {
    location.reload();
}