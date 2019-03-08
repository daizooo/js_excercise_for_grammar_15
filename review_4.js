class AlermTimer {
  constructor() {
    this._remainSeconds = 0;
    this._isRunning = false;

    window.setInterval(() => {
      if (this._remainSeconds > 0 && this._isRunning === true) {
        alert(`残り時間：${this._remainSeconds}秒`);
        this._remainSeconds--;
      } else if (this._remainSeconds === 0 && this._isRunning === true) {
        alert('終了');
        this.stop();
      }
    }, 1000);
  }

  setSeconds(seconds) {
    this._remainSeconds = seconds;
  }

  start() {
    this._isRunning = true;
  }

  stop() {
    this._isRunning = false;
  }
}

const timer1 = new AlermTimer();

timer1.setSeconds(3);

timer1.start();
