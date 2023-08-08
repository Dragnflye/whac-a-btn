class Lights {
  #rolledNumber1;
  #rolledNumber2;
  constructor() {
    this.#rolledNumber1 = null;
    this.#rolledNumber2 = null;
    this.lights = document.querySelectorAll('.light');
  }
  getRolledNumber1() {
    return this.#rolledNumber1;
  }
  getRolledNumber2() {
    return this.#rolledNumber2;
  }
  #rollRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
  }
  resetLights() {
    this.lights.forEach((light) => {
      light.classList.remove('lightOn');
    });
  }
  getRandomLights(isRunning) {
    if (isRunning) {
      this.#rolledNumber1 = this.#rollRandomNumber(6);
      this.#rolledNumber2 = this.#rollRandomNumber(6);

      // const horizontalLights = lights.slice(1, 6);
      // const verticalLights = lights.slice(7);

      // lightOn(horizontalLights, rolledNumber1);
      // lightOn(verticalLights, rolledNumber2);

      if (this.#rolledNumber1 == 0) {
        this.lights[1].classList.add('lightOn');
      } else if (this.#rolledNumber1 == 1) {
        this.lights[2].classList.add('lightOn');
      } else if (this.#rolledNumber1 == 2) {
        this.lights[3].classList.add('lightOn');
      } else if (this.#rolledNumber1 == 3) {
        this.lights[4].classList.add('lightOn');
      } else if (this.#rolledNumber1 == 4) {
        this.lights[5].classList.add('lightOn');
      } else if (this.#rolledNumber1 == 5) {
        this.lights[6].classList.add('lightOn');
      }

      if (this.#rolledNumber2 == 0) {
        this.lights[7].classList.add('lightOn');
      } else if (this.#rolledNumber2 == 1) {
        this.lights[8].classList.add('lightOn');
      } else if (this.#rolledNumber2 == 2) {
        this.lights[9].classList.add('lightOn');
      } else if (this.#rolledNumber2 == 3) {
        this.lights[10].classList.add('lightOn');
      } else if (this.#rolledNumber2 == 4) {
        this.lights[11].classList.add('lightOn');
      } else if (this.#rolledNumber2 == 5) {
        this.lights[12].classList.add('lightOn');
      }
    }
  }
}

const lights = new Lights();

// Element.addEventListener('click', Buttons.getLastClickedButton);
// arg()

// elementen.addEventListener('click', () => this.#checkMatch());
// arg()

class Buttons {
  #lastClickedButton;
  #correct;
  constructor() {
    this.buttons = document.querySelectorAll('.button');
    this.#lastClickedButton = null;
    this.#correct = null;
    this.buttons.forEach((button) => {
      button.addEventListener('click', this.#checkMatch.bind(this));
      // button.addEventListener('click', () => this.#checkMatch());
    });
  }
  getLastClickedButton() {
    return this.#lastClickedButton;
  }
  getCorrect() {
    return this.#correct;
  }
  #checkMatch(e) {
    // const abc = [...buttons].reduce(
    //   (acc, button, index) => {
    //     if (index % 6 === 0 && index) {
    //       acc.currentRow += 1;
    //     }

    //     if (!acc.matrix[acc.currentRow]) {
    //       acc.matrix[acc.currentRow] = [];
    //     }

    //     acc.matrix[acc.currentRow].push(button);

    //     return acc;
    //   },
    //   { currentRow: 0, matrix: [] }
    // );

    // if (abc.matrix[rolledNumber2][rolledNumber1].id === lastClickedButton) {
    //   score += 1;
    //   lights.forEach((light) => {
    //     light.classList.remove('lightOn');
    //   });
    //   gameContinue();
    // } else {
    //   score -= 1;
    //   body.style.backgroundColor = 'red';
    //   setTimeout(() => {
    //     body.style.backgroundColor = '';
    //   }, '100');
    // }

    // this.lastClickedButton = e.target.id;

    this.#lastClickedButton = e.target.id;
    switch (this.#lastClickedButton) {
      case 'button1':
        if (lights.getRolledNumber1() == 0 && lights.getRolledNumber2() == 0) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button2':
        if (lights.getRolledNumber1() == 1 && lights.getRolledNumber2() == 0) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button3':
        if (lights.getRolledNumber1() == 2 && lights.getRolledNumber2() == 0) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button4':
        if (lights.getRolledNumber1() == 3 && lights.getRolledNumber2() == 0) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button5':
        if (lights.getRolledNumber1() == 4 && lights.getRolledNumber2() == 0) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button6':
        if (lights.getRolledNumber1() == 5 && lights.getRolledNumber2() == 0) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button7':
        if (lights.getRolledNumber1() == 0 && lights.getRolledNumber2() == 1) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button8':
        if (lights.getRolledNumber1() == 1 && lights.getRolledNumber2() == 1) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button9':
        if (lights.getRolledNumber1() == 2 && lights.getRolledNumber2() == 1) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button10':
        if (lights.getRolledNumber1() == 3 && lights.getRolledNumber2() == 1) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button11':
        if (lights.getRolledNumber1() == 4 && lights.getRolledNumber2() == 1) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button12':
        if (lights.getRolledNumber1() == 5 && lights.getRolledNumber2() == 1) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button13':
        if (lights.getRolledNumber1() == 0 && lights.getRolledNumber2() == 2) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button14':
        if (lights.getRolledNumber1() == 1 && lights.getRolledNumber2() == 2) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button15':
        if (lights.getRolledNumber1() == 2 && lights.getRolledNumber2() == 2) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button16':
        if (lights.getRolledNumber1() == 3 && lights.getRolledNumber2() == 2) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button17':
        if (lights.getRolledNumber1() == 4 && lights.getRolledNumber2() == 2) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button18':
        if (lights.getRolledNumber1() == 5 && lights.getRolledNumber2() == 2) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button19':
        if (lights.getRolledNumber1() == 0 && lights.getRolledNumber2() == 3) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button20':
        if (lights.getRolledNumber1() == 1 && lights.getRolledNumber2() == 3) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button21':
        if (lights.getRolledNumber1() == 2 && lights.getRolledNumber2() == 3) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button22':
        if (lights.getRolledNumber1() == 3 && lights.getRolledNumber2() == 3) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button23':
        if (lights.getRolledNumber1() == 4 && lights.getRolledNumber2() == 3) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button24':
        if (lights.getRolledNumber1() == 5 && lights.getRolledNumber2() == 3) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button25':
        if (lights.getRolledNumber1() == 0 && lights.getRolledNumber2() == 4) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button26':
        if (lights.getRolledNumber1() == 1 && lights.getRolledNumber2() == 4) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button27':
        if (lights.getRolledNumber1() == 2 && lights.getRolledNumber2() == 4) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button28':
        if (lights.getRolledNumber1() == 3 && lights.getRolledNumber2() == 4) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button29':
        if (lights.getRolledNumber1() == 4 && lights.getRolledNumber2() == 4) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button30':
        if (lights.getRolledNumber1() == 5 && lights.getRolledNumber2() == 4) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button31':
        if (lights.getRolledNumber1() == 0 && lights.getRolledNumber2() == 5) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button32':
        if (lights.getRolledNumber1() == 1 && lights.getRolledNumber2() == 5) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button33':
        if (lights.getRolledNumber1() == 2 && lights.getRolledNumber2() == 5) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button34':
        if (lights.getRolledNumber1() == 3 && lights.getRolledNumber2() == 5) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button35':
        if (lights.getRolledNumber1() == 4 && lights.getRolledNumber2() == 5) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
      case 'button36':
        if (lights.getRolledNumber1() == 5 && lights.getRolledNumber2() == 5) {
          this.#correct = true;
        } else {
          this.#correct = false;
        }
        break;
    }
  }
}

const buttons = new Buttons();

class GameMain {
  constructor(time, buttonSelector) {
    this.body = document.body;
    this.buttons = document.querySelectorAll('.button');
    this.scoreDisplay = document.getElementById('scoreValue');
    this.buttonStart = document.querySelector(buttonSelector);
    this.timeLeft = document.getElementById('displayCounter');
    this.time = time;
    this.score = 0;
    this.scoreDisplay.textContent = `score: ${this.score}`;
    this.timeLeft.textContent = this.time;
    this.gameOn = false;
    this.buttonStart.addEventListener('click', () => this.#gameStart());
    this.buttons.forEach((button) => {
      button.addEventListener('click', () => this.#buttonPressFeedback());
    });
  }
  #gameStart() {
    if (!this.gameOn) {
      this.#resetScore();
      this.gameOn = true;
      this.timeLeft.textContent = this.time;
      this.#counterRun(1000);
      lights.getRandomLights(this.gameOn);
    }
  }
  #addPoints(points) {
    this.score += points;
  }
  #backgroundFlash(color, speed) {
    this.body.style.backgroundColor = color;
    setTimeout(() => {
      this.body.style.backgroundColor = '';
    }, speed);
  }
  #counterRun(interval) {
    // if (!this.gameOn) {
    //   this.#resetScore();
    //   this.gameOn = true;
    //   this.timeLeft.textContent = this.time;
    // let counter = setInterval(() => {
    //   if (this.timeLeft.textContent > 0) {
    //     this.timeLeft.textContent--;
    //   } else {
    //     clearInterval(counter);
    //     lights.resetLights();
    //     this.gameOn = false;
    //   }
    // }, interval);

    if (this.timeLeft.textContent > 0) {
      this.timeLeft.textContent--;
    } else {
      lights.resetLights();
      this.gameOn = false;
      return;
    }

    setTimeout(() => {
      return this.#counterRun(interval);
    }, interval);
  }
  #resetScore() {
    this.score = 0;
    this.scoreDisplay.textContent = `score: ${this.score}`;
  }
  #buttonPressFeedback() {
    if (this.gameOn) {
      if (buttons.getCorrect()) {
        this.#addPoints(1);
        lights.resetLights();
        lights.getRandomLights(this.gameOn);
      } else {
        this.#addPoints(-1);
        this.#backgroundFlash('red', '70');
      }
    }
    this.scoreDisplay.textContent = `score: ${this.score}`;
  }
}

const game = new GameMain(60, '.start');
