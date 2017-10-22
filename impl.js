
function onload () {
    window.addEventListener("deviceorientation", handleOrientation, true);
    window.addEventListener("devicemotion", handleMotion, true);    

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {
    document.getElementById('latitude').innerHTML = `latitude: ${position.coords.latitude}`;
    document.getElementById('longitude').innerHTML = `longitude: ${position.coords.longitude}`;
}

function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;

    document.getElementById('absolute').innerHTML = `absolute: ${absolute}`;
    document.getElementById('alpha').innerHTML = `alpha: ${alpha}`;
    document.getElementById('beta').innerHTML = `beta: ${beta}`;
    document.getElementById('gamma').innerHTML = `gamma: ${gamma}`;


}

function handleMotion(event) {
    var acceleration = event.acceleration;
    var accelerationIncludingGravity = event.accelerationIncludingGravity;
    var rotationRate = event.rotationRate;
    var interval = event.interval;

    document.getElementById('ax').innerHTML = `ax: ${acceleration.x}`;
    document.getElementById('ay').innerHTML = `ay: ${acceleration.y}`;
    document.getElementById('az').innerHTML = `az: ${acceleration.z}`;

    document.getElementById('axg').innerHTML = `ax+g: ${accelerationIncludingGravity.x}`;
    document.getElementById('ayg').innerHTML = `ay+g: ${accelerationIncludingGravity.y}`;
    document.getElementById('azg').innerHTML = `az+g: ${accelerationIncludingGravity.z}`;

    document.getElementById('_alpha').innerHTML = `alpha: ${rotationRate.alpha}`;
    document.getElementById('_beta').innerHTML = `beta: ${rotationRate.beta}`;
    document.getElementById('_gamma').innerHTML = `gamma: ${rotationRate.gamma}`;

    document.getElementById('interval').innerHTML = `interval: ${interval}`;
}
