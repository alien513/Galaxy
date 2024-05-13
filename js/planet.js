let body = document.querySelector("body");

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
                createPlanet();
            },0);
        }
    },10);
}

setTimeout(function() {
    createPlanet();
},0);
//},randomInteger(1000,100000));