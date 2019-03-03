class KitchenTimer {
  constructor(name) {
    this._name = name;
    this._remainingSeconds = 0;
    this._isRunning = false;

    window.setInterval(() => {
      if (this._isRunning === true && this._remainingSeconds > 0) {
        this._remainingSeconds--;
        console.log(`名前：${this._name}、残り時間${this._remainingSeconds}`);
      }
    }, 1000);
  }

  setSeconds(seconds) {
    this._remainingSeconds = seconds;
  }

  start() {
    this._isRunning = true;
  }

  stop() {
    this._isRunning = false;
  }
}

const timer1 = new KitchenTimer('タイマー１');
const timer2 = new KitchenTimer('タイマー２');

timer1.setSeconds(5);
timer2.setSeconds(10);

timer1.start();
timer2.start();
