const boxElm = document.createElement('div');
boxElm.classList.add('box');
document.body.append(boxElm);
const backgroundElm = document.querySelector("#background-container");


let jump = false;
let run = false;
let attack = false;
let dx = 0;
let rightAhead = true;
let charactor = 'charactor';
document.body.addEventListener('keydown', (eventData)=> {
    if (eventData.code === 'Space'){
        jump = true;
    }else if (eventData.code === 'ArrowRight'){
        boxElm.classList.remove('mirror');
        run = true;
        dx = 2;
    }else if (eventData.code === 'ArrowLeft'){
        boxElm.classList.add('mirror');
        run = true;
        dx = -2;
    }else if (eventData.code === 'KeyX'){
        attack = true;
        
    }
});

document.body.addEventListener('keyup', (eventData) => {
    if (eventData.code === 'ArrowRight'){
        run = false;
        dx = 0;
    }else if (eventData.code === 'ArrowLeft'){
        run = false;
        dx = 0;
    }else if (eventData.code === 'KeyX'){
        attack = false;
    }
});

let angle = 0;
function doJump(){
    let y  = Math.cos(angle * (Math.PI / 180));
    y *= 5;
    boxElm.style.top = (boxElm.offsetTop - y) + "px";
    angle++;
    boxElm.style.height = '300px';
    // boxElm.style.backgroundColor = 'red';

    if (angle >  180){
        angle = 0; 
        boxElm.style.height = '150px'; 
        jump = false;
    }
}


// function doRun(){
//     let x = boxElm.offsetLeft + dx;
//     if ((x + boxElm.offsetWidth)> innerWidth) {
//         x = innerWidth - boxElm.offsetWidth;
//     }else if (x <= 0) x = 0;
//     boxElm.style.left = `${x}px`;
// }
function doRun(){
    let x = backgroundElm.offsetLeft + dx;
    if ((x + backgroundElm.offsetWidth)> innerWidth) {
        x = innerWidth - backgroundElm.offsetWidth;
    }else if (x <= 0) x = 0;
    backgroundElm.style.left = `${x}px`;
}

function doAttack(){
    
}


let i = 0;
function drawIdle(){
    boxElm.style.backgroundImage = `url('img/${charactor}/Idle__00${i++}.png')`;
    if(i === 10) i = 0;
}
function drawRun(){
    boxElm.style.backgroundImage = `url('img/${charactor}/Run__00${i++}.png')`;
    if(i === 10) i = 0;
}
function drawJump(){
    boxElm.style.backgroundImage = `url('img/${charactor}/Jump__00${i++}.png')`;
    if(i === 10) i = 0;
}
function drawAttack(){
    boxElm.style.backgroundImage = `url('img/${charactor}/Attack__00${i++}.png')`;
    if(i === 10) i = 0;
}



setInterval(()=> {
    if (jump){
        doJump();
    }
    if (run){
        doRun();
    }
    if (attack){
        boxElm.style.height = '170px';
        boxElm.style.bottom = '82px';
    }else{
        boxElm.style.height = '150px';
        boxElm.style.bottom = '100px';
    }

}, 5);

setInterval(()=> {
    if(!run && !jump){
        drawIdle();
    }
},1000/10);
setInterval(()=> {
    if(run && !jump && !attack){
        drawRun();
    }
    if(attack){
        drawAttack();
        
        
    }
},1000/20); 
setInterval(()=> {
    if(jump && !attack){
        drawJump();
    }
},1000/20);   


const weapon = document.createElement('div');
weapon.classList.add('weapon');
document.body.append(weapon);
weapon.style.bottom = "150px";
weapon.style.left = "95vw";


const play = true;
let weaponAngle = 0;
setInterval(()=>{
    if(play){
        weapon.style.rotate = weaponAngle+"deg";
        weapon.style.left = (weapon.offsetLeft-10)+'px'
        weaponAngle -=15;
        console.log(weaponAngle)
    }
},30)



// Get the fullscreen button element
var fullscreenButton = document.getElementById('fullscreenButton');

// Add a click event listener to the fullscreen button
fullscreenButton.addEventListener('click', function() {
  // Check if fullscreen mode is supported by the browser
  if (document.documentElement.requestFullscreen) {
    // Enter fullscreen mode
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) { // Firefox
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
    document.documentElement.msRequestFullscreen();
  }
});





