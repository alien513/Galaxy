let speed = 30;

function createEnemy() {
// 1. Create div
//    Provide random coordinates to start moving
// 2. Move enemy to the bottom
    if (isGameOver) {
        return;
    }
    let left = randomInteger(150, document.querySelector("body").offsetWidth - 150);
    let enemy = document.createElement('div');
    enemy.className = "enemy skin1";
    enemy.style.left = left + "px";
    app.appendChild(enemy);
    moveEnemy(enemy);
}

function moveEnemy(enemy) {
    let timerID = setInterval(function() {
        enemy.style.top = enemy.offsetTop + (speed + 5 * Math.trunc(score/10)) + "px";
        console.log('speed=',speed + 5 * Math.trunc(score/10));
        let hitPlayer = isHitPlayer(enemy);
        if (isGameOver || enemy.className == "enemy boom" || enemy.offsetTop > document.querySelector("body").offsetHeight) {
            // Enemy hit the player, player hit the enemy or enemy pass the viewport
            if (enemy) {
                setTimeout(function() {
                enemy.remove();
                }, 800);
            }
            createEnemy();
            clearInterval(timerID);
            timerID = null;
            return;
        }

    }, 1);
}
