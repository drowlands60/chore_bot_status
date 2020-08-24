let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let startButton = document.getElementById('start');
let currentlyPlaying = true;
let currentScore = 0;
let bestScore = 0;


doorImage1.onclick = () => {
    if(!isClicked(doorImage1) && currentlyPlaying === true){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
    }
}

doorImage2.onclick = () => {
     if(!isClicked(doorImage2) && currentlyPlaying === true){
     doorImage2.src = openDoor2;
     playDoor(doorImage2);
     }
}

doorImage3.onclick = () => {
     if(!isClicked(doorImage3) && currentlyPlaying === true){
     doorImage3.src = openDoor3;
     playDoor(doorImage3);
     }
};

startButton.onclick = () => {
  startRound();
}

let startRound = () => {
  if(startButton.innerHTML === 'You win! Play again?' || startButton.innerHTML === 'Game over! Play again?'){
    numClosedDoors = 3;
    currentlyPlaying = true;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = 'Good luck!';
  }
  randomChoreDoorGenerator();
}

let gameOver = (status) => {
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?'
    currentScore = currentScore + 1;
    if (currentScore > bestScore){
        bestScore = currentScore;
    }
  } else {
    startButton.innerHTML = 'Game over! Play again?'
    currentScore = 0;
  }
  currentlyPlaying = false;
  document.getElementById('current-score-total').innerHTML = currentScore;
  document.getElementById('best-score-total').innerHTML = bestScore;
};

let isBot = (door) => {
  if(door.src === botDoorPath){
    return true;
  } else {
    return false;
  }
}

let isClicked = (door) =>{
  if(door.src === closedDoorPath){
    return false;
  } else {
    return true;
  }
};

let playDoor = (door) => {
  numClosedDoors = numClosedDoors-1;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if(isBot(door)){
    gameOver();
  }
};



let randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else{
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
};





startRound();