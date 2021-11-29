var canvas = new fabric.Canvas('myCanvas');

speed = 10;
playerX = 10;
playerY = 300;
hunterX = 650;
hunterY = (Math.floor(Math.random() * 66)) * speed;
called = 1;
Pressed = false;
var playerObject = "";
var hunterObject = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerObject = Img;
        playerObject.scaleToWidth(498);
        playerObject.scaleToHeight(142);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });
}

function new_img() {
    fabric.Image.fromURL("hunter.png", function (Img) {
        hunterObject = Img;
        hunterObject.scaleToWidth(151);
        hunterObject.scaleToHeight(140);
        hunterObject.set({
            top: hunterY,
            left: hunterX
        });
        canvas.add(hunterObject);
    });
}
player_update();
new_img();
document.getElementById("Hint").innerHTML = "Psst...the dinosuar moves 10 pixels up and down at a time and its initial cooridinate is 10, 300. The hunter's coordinate is 650, " + hunterY + ".";

window.addEventListener("keydown", keydown);

function keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    //Arrow keys
    if (Pressed == false) {
    if (keyPressed == '38') {
        if (playerY >= 0) {
            playerY = playerY - speed;
            console.log("When up arrow key is pressed, X = " + playerX + " , Y = " + playerY);
            canvas.remove(playerObject);
            player_update();
        }
    }
    if (keyPressed == '40') {
        if (playerY <= 700) {
            playerY = playerY + speed;
            console.log("When down arrow key is pressed, X = " + playerX + " , Y = " + playerY);
            canvas.remove(playerObject);
            player_update();
        }
    }
    }
    if (keyPressed == '32') {
        console.log("When space key is pressed, X = " + playerX + " , Y = " + playerY);
        Pressed = true;
        while (playerX < hunterX) {
            /*
            setTimeout(function () {
                playerX = playerX + speed;
                canvas.remove(playerObject);
                called = called + 1;            
            }, 500 * called);
            */
                playerX = playerX + speed;
                canvas.remove(playerObject);
            if (playerX == hunterX && hunterY == playerY) {
                document.getElementById("Win").innerHTML = "YOU WIN!";
                canvas.remove("hunterObject");
            }
            player_update();
        }
    }
}