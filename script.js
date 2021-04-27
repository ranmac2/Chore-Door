const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');

const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";

const numClosedDoors = 3;

let openDoor1;
let openDoor2;
let openDoor3;

const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let isClicked = door => {

}

let playDoor = () => {
    if (numClosedDoors === 0) {
        gameOver();
    } else {
        numClosedDoors--;
    }
}

let randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = spaceDoorPath
        openDoor3 = beachDoorPath;
    } else {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
}

doorImage1.onclick = () => {
    doorImage1.src = openDoor1;
    playDoor();
};

doorImage2.onclick = () => {
    doorImage2.src = openDoor2;
    playDoor();
};

doorImage3.onclick = () => {
    doorImage3.src = openDoor3;
    playDoor();
};

randomChoreDoorGenerator();