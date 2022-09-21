const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

const keys = [];

const player = {
    x: 200,
    y: 200,
    width: 40,
    height: 70,
    frameX: 0,
    frameY: 0,
    speed: 5,
    moving: false,
};

const playerImg = new Image();
playerImg.src = "Img/JPG.png";
const background = new Image();
background.src = "Img/BACKGROUND-1000.png";


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
}
animate();

function animatePlayer() {
    ctx.drawImage(playerImg, 100,100, player.x, player.y, )
    movePlayer();
    requestAnimationFrame(animatePlayer)
}
animatePlayer();

window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
    console.log(keys)
});
window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
})

function movePlayer() {
    if(keys[38] && player.y >  100)
    player.y -= player.speed
}
