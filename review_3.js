class KitchenTimer {
  constructor(name) {
    this._name = name;
    this._remainingSeconds = 0;
    this._isRunning = false;

    window.setInterval(() => {
      if (this._isRunning === true && this._remainingSeconds > 0) {
        console.log(
          `タイマー名：${this._name}、残り時間：${this._remainingSeconds}`
        );
        this._remainingSeconds--;
      }
    }, 1000);
  }
  setSeconds(seconds) {
    this._remainingSeconds = seconds;
  }
  start() {
    this._isRunning = true;
  }
}

const timer1 = new KitchenTimer('タイマー1');
const timer2 = new KitchenTimer('タイマー2');

timer1.setSeconds(20);
timer2.setSeconds(30);

timer1.start();
timer2.start();
