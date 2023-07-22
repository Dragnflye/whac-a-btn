let rolledNumber1;
let rolledNumber2;
let lastClickedButton;
let score = 0;
let gameOn = false;
const body = document.body;
const buttonStart = document.querySelector('.start');
const lights = document.querySelectorAll('.light');
const buttons = document.querySelectorAll('.button');
let scoreDisplay = document.getElementById('scoreValue');
const timeLeft = document.getElementById('displayCounter');

scoreDisplay.innerHTML = `score: ${score}`;
timeLeft.innerHTML = 60;

const counterStart = () => {
  if (!gameOn) {
    timeLeft.innerHTML = 60;
    gameOn = true;
    let counter = setInterval(() => {
      if (timeLeft.innerHTML > 0) {
        timeLeft.innerHTML--;
      } else {
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        clearInterval(counter);
        gameOn = false;
      }
    }, 1000);
  }
};

const rollRandomNumber = (maxNumber) => {
  return Math.floor(Math.random() * maxNumber);
};

const gameStart = () => {
  if (!gameOn) {
    score = 0;
    scoreDisplay.innerHTML = `score: ${score}`;
    rolledNumber1 = rollRandomNumber(6);
    rolledNumber2 = rollRandomNumber(6);
    if (rolledNumber1 == 0) {
      lights[1].classList.add('lightOn');
    } else if (rolledNumber1 == 1) {
      lights[2].classList.add('lightOn');
    } else if (rolledNumber1 == 2) {
      lights[3].classList.add('lightOn');
    } else if (rolledNumber1 == 3) {
      lights[4].classList.add('lightOn');
    } else if (rolledNumber1 == 4) {
      lights[5].classList.add('lightOn');
    } else if (rolledNumber1 == 5) {
      lights[6].classList.add('lightOn');
    }

    if (rolledNumber2 == 0) {
      lights[7].classList.add('lightOn');
    } else if (rolledNumber2 == 1) {
      lights[8].classList.add('lightOn');
    } else if (rolledNumber2 == 2) {
      lights[9].classList.add('lightOn');
    } else if (rolledNumber2 == 3) {
      lights[10].classList.add('lightOn');
    } else if (rolledNumber2 == 4) {
      lights[11].classList.add('lightOn');
    } else if (rolledNumber2 == 5) {
      lights[12].classList.add('lightOn');
    }
  }
};

const gameContinue = () => {
  if (timeLeft.innerHTML > 0) {
    rolledNumber1 = rollRandomNumber(6);
    rolledNumber2 = rollRandomNumber(6);
    if (rolledNumber1 == 0) {
      lights[1].classList.add('lightOn');
    } else if (rolledNumber1 == 1) {
      lights[2].classList.add('lightOn');
    } else if (rolledNumber1 == 2) {
      lights[3].classList.add('lightOn');
    } else if (rolledNumber1 == 3) {
      lights[4].classList.add('lightOn');
    } else if (rolledNumber1 == 4) {
      lights[5].classList.add('lightOn');
    } else if (rolledNumber1 == 5) {
      lights[6].classList.add('lightOn');
    }

    if (rolledNumber2 == 0) {
      lights[7].classList.add('lightOn');
    } else if (rolledNumber2 == 1) {
      lights[8].classList.add('lightOn');
    } else if (rolledNumber2 == 2) {
      lights[9].classList.add('lightOn');
    } else if (rolledNumber2 == 3) {
      lights[10].classList.add('lightOn');
    } else if (rolledNumber2 == 4) {
      lights[11].classList.add('lightOn');
    } else if (rolledNumber2 == 5) {
      lights[12].classList.add('lightOn');
    }
  }
};

const checkMatch = (e) => {
  lastClickedButton = e.target.id;
  switch (lastClickedButton) {
    case 'button1':
      if (rolledNumber1 == 0 && rolledNumber2 == 0) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button2':
      if (rolledNumber1 == 1 && rolledNumber2 == 0) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button3':
      if (rolledNumber1 == 2 && rolledNumber2 == 0) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button4':
      if (rolledNumber1 == 3 && rolledNumber2 == 0) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button5':
      if (rolledNumber1 == 4 && rolledNumber2 == 0) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button6':
      if (rolledNumber1 == 5 && rolledNumber2 == 0) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button7':
      if (rolledNumber1 == 0 && rolledNumber2 == 1) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button8':
      if (rolledNumber1 == 1 && rolledNumber2 == 1) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button9':
      if (rolledNumber1 == 2 && rolledNumber2 == 1) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button10':
      if (rolledNumber1 == 3 && rolledNumber2 == 1) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button11':
      if (rolledNumber1 == 4 && rolledNumber2 == 1) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button12':
      if (rolledNumber1 == 5 && rolledNumber2 == 1) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button13':
      if (rolledNumber1 == 0 && rolledNumber2 == 2) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button14':
      if (rolledNumber1 == 1 && rolledNumber2 == 2) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button15':
      if (rolledNumber1 == 2 && rolledNumber2 == 2) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button16':
      if (rolledNumber1 == 3 && rolledNumber2 == 2) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button17':
      if (rolledNumber1 == 4 && rolledNumber2 == 2) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button18':
      if (rolledNumber1 == 5 && rolledNumber2 == 2) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button19':
      if (rolledNumber1 == 0 && rolledNumber2 == 3) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button20':
      if (rolledNumber1 == 1 && rolledNumber2 == 3) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button21':
      if (rolledNumber1 == 2 && rolledNumber2 == 3) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button22':
      if (rolledNumber1 == 3 && rolledNumber2 == 3) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button23':
      if (rolledNumber1 == 4 && rolledNumber2 == 3) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button24':
      if (rolledNumber1 == 5 && rolledNumber2 == 3) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button25':
      if (rolledNumber1 == 0 && rolledNumber2 == 4) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button26':
      if (rolledNumber1 == 1 && rolledNumber2 == 4) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button27':
      if (rolledNumber1 == 2 && rolledNumber2 == 4) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button28':
      if (rolledNumber1 == 3 && rolledNumber2 == 4) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button29':
      if (rolledNumber1 == 4 && rolledNumber2 == 4) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button30':
      if (rolledNumber1 == 5 && rolledNumber2 == 4) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button31':
      if (rolledNumber1 == 0 && rolledNumber2 == 5) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button32':
      if (rolledNumber1 == 1 && rolledNumber2 == 5) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button33':
      if (rolledNumber1 == 2 && rolledNumber2 == 5) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button34':
      if (rolledNumber1 == 3 && rolledNumber2 == 5) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button35':
      if (rolledNumber1 == 4 && rolledNumber2 == 5) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
    case 'button36':
      if (rolledNumber1 == 5 && rolledNumber2 == 5) {
        score += 1;
        lights.forEach((light) => {
          light.classList.remove('lightOn');
        });
        gameContinue();
      } else {
        score -= 1;
        body.style.backgroundColor = 'red';
        setTimeout(() => {
          body.style.backgroundColor = '';
        }, '100');
      }
      break;
  }
  scoreDisplay.innerHTML = `score: ${score}`;
};
buttonStart.addEventListener('click', gameStart);
buttonStart.addEventListener('click', counterStart);

buttons.forEach((button) => {
  button.addEventListener('click', checkMatch);
});
