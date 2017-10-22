
function onload () {
    window.addEventListener("deviceorientation", handleOrientation, true);

}

function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;

    document.getElementById('absolute').innerHTML = `${absolute}`;
    document.getElementById('alpha').innerHTML = `${alpha}`;
    document.getElementById('beta').innerHTML = `${beta}`;
    document.getElementById('gamma').innerHTML = `${gamma}`;

    
}
