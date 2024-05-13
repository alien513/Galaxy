let body = document.querySelector("body");

function createAsteroid() {
    // 1. Create div
    //    Provide random coordinates to start moving
    // 2. Move asteroid to the bottom
        let left = randomInteger(100, document.querySelector("body").offsetWidth - 100);
        let dir = randomInteger(0,1);
        let asteroid = document.createElement('div');
        asteroid.className = "asteroid";
        asteroid.style.left = left + "px";
        app.appendChild(asteroid);
        moveAsteroid(asteroid, dir);
    }

function moveAsteroid(asteroid, dir) {
    let timerID = setInterval(function() {
        asteroid.style.top = asteroid.offsetTop + 1 + "px";
        // Choose the direction: L->R (0) or R->L (1)
/*        if (dir == 0) {
            asteroid.style.left = asteroid.offsetLeft + 1 + "px";
        } else {
            asteroid.style.left = asteroid.offsetLeft - 1 + "px";
        }
*/
        if (asteroid.className == "enemy boom") {
            // Player hit asteroid
            setTimeout(function() {
                asteroid.remove();
            }, 800);
            clearInterval(timerID);
            timerID = null;
        } else if (asteroid.offsetTop > body.offsetHeight ||
                   asteroid.offsetLeft > body.offsetWidth ||
                   asteroid.offsetLeft < 0) {
            // Asteroid is outside the viewport
            asteroid.remove();
            clearInterval(timerID);
            timerID = null;
        }
    }, 1);

}

function createPlanet() {
    let skin = 'skin-' + randomInteger(1,4);
    let planet = document.createElement('div');
    planet.className = 'planet ' + skin;
    planet.style.left = randomInteger(100,body.offsetWidth-500) + "px";
    app.appendChild(planet);

    let timerID = setInterval(function() {
        planet.style.top = planet.offsetTop + 30 + "px";
        if (planet.offsetTop > body.offsetHeight) {
            planet.remove();
            clearInterval(timerID);
            setTimeout(function() {
                console.log('here');
                createPlanet();
            },0);
        }
    },10);
}

setTimeout(function() {
    createPlanet();
},0);
//},randomInteger(1000,100000));