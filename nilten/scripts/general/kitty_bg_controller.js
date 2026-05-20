let kitty_bg = document.getElementById('site-bg-kitty-01');

// constant values
var SHIFT_KEY = 16;
var LEFT_KEY = 37;
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;

var keysPressed = {}; // global list of all keys held dowb by the user wait a sec could this be potentially dangerous i hope not help

addEventListener("keydown", (eventDown) => {
    if (eventDown.keyCode != SHIFT_KEY 
        && eventDown.keyCode != UP_KEY 
        && eventDown.keyCode != DOWN_KEY 
        && eventDown.keyCode != LEFT_KEY 
        && eventDown.keyCode != RIGHT_KEY)
    {
        return;
    } else {
        keysPressed[eventDown.which] = true;
        // Up
        if (keysPressed[SHIFT_KEY] && keysPressed[UP_KEY]) {
            kitty_bg.style.animationName = "kitty_smrpg_background_up"
        }
        // Left
        else if (keysPressed[SHIFT_KEY] && keysPressed[LEFT_KEY]) {
            kitty_bg.style.animationName = "kitty_smrpg_background_left"
        }
        // Down
        else if (keysPressed[SHIFT_KEY] && keysPressed[DOWN_KEY]) {
            kitty_bg.style.animationName = "kitty_smrpg_background_down"
        }
        // Right
        else if (keysPressed[SHIFT_KEY] && keysPressed[RIGHT_KEY]) {
            kitty_bg.style.animationName = "kitty_smrpg_background_right"
        }
        // Up left
        else if (keysPressed[SHIFT_KEY] && keysPressed[LEFT_KEY] && keysPressed[UP_KEY] ) {
            kitty_bg.style.animationName = "kitty_smrpg_background_up_left"
        }
        // Up right
        else if (keysPressed[SHIFT_KEY] && keysPressed[UP_KEY] && keysPressed[RIGHT_KEY] ) {
            kitty_bg.style.animationName = "kitty_smrpg_background_up_right"
        }
        // Down left
        else if (keysPressed[SHIFT_KEY] && keysPressed[LEFT_KEY] && keysPressed[DOWN_KEY] ) {
            kitty_bg.style.animationName = "kitty_smrpg_background_down_left"
        }
        // Down right
        else if (keysPressed[SHIFT_KEY] && keysPressed[RIGHT_KEY] && keysPressed[DOWN_KEY] ) {
            kitty_bg.style.animationName = "kitty_smrpg_background_down_right"
        }
    }
})
// ^= T T =^ i hate this code it's not working how it's supposed to ouughhh...

addEventListener("keyup", (eventUp) => {
    if (eventUp.keyCode != SHIFT_KEY 
        && eventUp.keyCode != UP_KEY 
        && eventUp.keyCode != DOWN_KEY 
        && eventUp.keyCode != LEFT_KEY 
        && eventUp.keyCode != RIGHT_KEY)
    {
        return;
    } else{
        //console.log(keysPressed);
        keysPressed[eventUp.which] = false;
    }
});