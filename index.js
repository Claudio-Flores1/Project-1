const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const modal = document.getElementById("myModal")
const modal2 = document.getElementById("loss-Modal")

canvas.width = 800;
canvas.height = 500;

/// THE TWO MODAL MESSAGES THAT APPEAR IN THE WIN/LOSE SITUATIONS ///

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function displayModal() {
    modal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

function displayLossModal() {
    modal2.style.display = "block";
}

/// CREATING CHARACTERS AND BACKGROUND OF THE CANVAS ///

const player = {
    x: 0,
    y: 0,
    width: 120,
    height: 150,
    speed: 55,
    moving: false,
};

const cloud = {
    x: 500,
    y: 0,
    width: 180,
    height: 180,
    speed: 2,
    moving: true,
};

const gem = {
    x: 650,
    y: 300,
    width: 80,
    height: 80,
    speed: 2,
    moving: true,
}

const playerImg = new Image();
playerImg.src = "Img/JPG.png";
const cloudImg = new Image();
cloudImg.src = "Img/Enemy.png"
const background = new Image();
background.src = "Img/BACKGROUND-1000.png";
const gemImg = new Image();
gemImg.src = "Img/GEM-100.png";


/// ANIMATING ALL THE CAHRACTERS TO APPEAR INSIDE OF THE CANVAS ///

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
    incrementGem(ctx);
    detectGemHit()
}

function animatePlayer() {
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
    requestAnimationFrame(animatePlayer)
    movePlayer();
    // ctx.strokeRect(cloud.x, cloud.y, cloud.width, cloud.height)
}

function animateCloud() {
    ctx.drawImage(cloudImg, cloud.x, cloud.y, cloud.width, cloud.height);
    requestAnimationFrame(animateCloud)
    moveCloud();
    if (isCloudHit) {
        console.log("cloud" + isCloudHit)
        displayLossModal()
        player.y = 550
    }
    // ctx.strokeRect(cloud.x, cloud.y, cloud.width, cloud.height)

}

let isGemHit = false

function animateGem() {
    ctx.drawImage(gemImg, gem.x, gem.y, gem.width, gem.height);
    requestAnimationFrame(animateGem)
    moveGem();
    detectWin()
    // ctx.strokeRect(gem.x, gem.y, gem.width, gem.height)
}

/// UTILIZED ctx.strokeRect TO BE ABLE TO SEE THE DIMENSIONS AND FULL SIZE OF THE RECTANGLES ENCOMPASSING ALL PNG'S ///

window.addEventListener("keydown", function (e) {
    movePlayer(e.keyCode)
});
// Not sure of the replacement for `e.keycode` since it is deprecated now.


// CREATING AND IMPLEMENTING THE MOVEMENT FOR THE PLAYER, AS WELL AS THE `CLOUD` & `GEM` ///
/// WAS NOT ABLE TO CREATE THE MOVEMENT TO LOOK MORE FLUID, WILL NEED TO WORK ON THIS TO IMPROVE THE GAME MORE ///

function isValidUp() {
    if (player.y < 0) {
        return false;
    }
    return true;
}
function isValidDown() {
    if (player.y > 350) {
        return false;
    }
    return true;
}
function isValidLeft() {
    if (player.x < 0) {
        return false;
    }
    return true;
}
function isValidRight() {
    if (player.x > 650) {
        return false;
    }
    return true;
}

function movePlayer(code) {
    if (code == 87 && isValidUp()) {
        player.y -= player.speed
    }
    if (code == 83 && isValidDown()) {
        player.y += player.speed
    }
    if (code == 65 && isValidLeft()) {
        player.x -= player.speed
    }
    if (code == 68 && isValidRight()) {
        player.x += player.speed
    }

}

function moveCloud() {
    if (cloud.x <= -180) {
        cloud.y = Math.random() * 320;
    }
    cloud.x -= cloud.speed;
    if (cloud.x < 0 - cloud.width) cloud.x = 900;
    detectCloudHit();
}

function moveGem() {
    if (gem.x <= -80) {
        gem.y = Math.random() * 320;
    }
    gem.x -= gem.speed;
    if (gem.x < 0 - gem.width) gem.x = 900;
    if (isGemHit) {
        gem.y = canvas.height
        isGemHit = false
    }

}

/// CREATING THE WIN AND LOSE CONDITIONS, WHILE gemsCollected WILL BE CALLED IN THE detectWin() FUNCTION TO CREATE A WIN CONDITION, detectCloudHit() ALONG WITH animateCloud() TAKES THE PLACE OF A `detectLoss()` FUNCTION. THE LOSS CONDITION IS CREATED STARTING WITH detectCloudHit() AND THEN WITH A MODAL IN animateCloud() ///

let gemsCollected = 0;

function incrementGem(ctx) {
    ctx.fillstyle = 'black';
    ctx.font = '20px Helvetica';
    ctx.fillText('Gems: ' + gemsCollected, 20, 50);
}

let count = 1

function detectGemHit() {

    if (player.x >= gem.x - 30 && player.x <= gem.x + 30
        && player.y >= gem.y - 90 && player.y <= gem.y + 90) {
        count++
        if (count == 22) {
            count = 0
            gemsCollected++
            console.log("before" + isGemHit)
            isGemHit = true
            console.log(isGemHit)
        }
    }
}

let isCloudHit = false

function detectCloudHit() {
    if (player.x >= cloud.x - 50 && player.x <= cloud.x + 50
        && player.y >= cloud.y - 110 && player.y <= cloud.y + 100) {
        isCloudHit = true;
        //window.location.reload();
    }

}

/// A FUNCTION TO START AND RUN THE GAME ON A LOOP THE SECOND IT LOADS ON THE SCREEN AND A WIN CONDITION AS WELL, THE gameReset() IS BEING USED ON BOTH OF THE RESET BUTTONS IN THE MODALS ///

function gameStart() {
    animate();
    animatePlayer();
    animateCloud();
    animateGem()
}

function detectWin() {
    if (gemsCollected === 5) {
        displayModal();
        player.y = 550
    }
}

function gameReset() {
    window.location.reload();
}

gameStart()