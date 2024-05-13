let player = null;
let lifesPlayer = 5;
let score = 0;
let scoreSpan = document.querySelector('#score');

function createPlayer(skin) {
    player = document.createElement('div');
    player.className = skin;
    player.id = "player";
    app.appendChild(player);
}

document.onkeydown = function(event) {
    // ArrowLeft = 37; ArrowRight = 39;
    switch(event.code) {
        case "ArrowRight":
            moveRight();
            break;
        case "ArrowLeft":
            moveLeft();
            break;
        case "Space":
            shot();
            break;
    }
}

function moveLeft() {
    // player.style.left--
    player.style.left = player.offsetLeft - 60 + "px";
}

function moveRight() {
    // player.style.left++
    player.style.left = player.offsetLeft + 60 + "px";
}

function shot() {
    let bullet = document.createElement('div');

    bullet.className = 'bullet';
    bullet.style.top = player.offsetTop + "px";
    bullet.style.left = player.offsetLeft + player.offsetWidth / 2 + "px";
    app.appendChild(bullet);
    shotSound();

    let timerID = setInterval(function() {
        let hit = isHitEnemy(bullet);
        score = score + hit;
        scoreSpan.innerHTML = score;

        if (hit || bullet.offsetTop < 0) {
            bullet.remove();
            clearInterval(timerID);
            timerID = null;
        }
        bullet.style.top = bullet.offsetTop - 20 + "px";

    }, 100);
}

function isHitEnemy(bullet) {
    //let enemy = document.querySelector('.enemy');
    let enemies = document.querySelectorAll('.enemy');
    //let asteroids = document.querySelectorAll('.asteroid');
    //let all = [...enemies, ...asteroids];
    //for (let i=0; i < all.length; i++) {
    for (let i=0; i < enemies.length; i++) {
        //let enemy = all[i];
        let enemy = enemies[i];
        if (enemy && !enemy.classList.contains('boom')) {
            let top = bullet.offsetTop > enemy.offsetTop && bullet.offsetTop < enemy.offsetTop + enemy.offsetHeight; // true || false
            let left = bullet.offsetLeft > enemy.offsetLeft && bullet.offsetLeft < enemy.offsetLeft + enemy.offsetWidth; // true || false
            if (top && left) {
                enemy.className = "enemy boom";
                boomSound();
                return true;
            }
        }
    }
    return false;
}

function isHitPlayer(enemy) {
    if (enemy && !enemy.classList.contains('boom')) {
        let top = player.offsetTop > enemy.offsetTop && player.offsetTop < enemy.offsetTop + enemy.offsetHeight; // true || false
        let left = !(enemy.offsetLeft > player.offsetLeft + player.offsetWidth || enemy.offsetLeft + enemy.offsetWidth < player.offsetLeft); // true || false
        if (top && left) {
            enemy.className = "enemy boom";
            boomSound();
            deathPlayer();
            return true;
        }
    }
    return false;
}

function deathPlayer() {
    lifesPlayer--;
    if (lifesPlayer <= 0) {
        endGame();
    }
    heartIconsPlayer();
}

function heartIconsPlayer() {
    let lifesBlock = document.querySelector('.menu .lifes');
    lifesBlock.innerHTML = "";
    for (let i = 0; i < lifesPlayer; i++) {
        let span = document.createElement('span');
        lifesBlock.appendChild(span);
    }
}
