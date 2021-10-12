const refs = {
  timerEl: document.getElementById('timer-1'),
  daysEl: document.querySelector('[data-value="days"]'),
  hoursEl: document.querySelector('[data-value="hours"]'),
  minsEl: document.querySelector('[data-value="mins"]'),
  secsEl: document.querySelector('[data-value="secs"]'),
};
const { timerEl, daysEl, hoursEl, minsEl, secsEl } = refs;

class CountdownTimer {
  constructor(timerSet) {
    const { selector, targetDate } = timerSet;
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    setInterval(() => {
      const currentDate = Date.now();
      const timeUntil = this.targetDate - currentDate;
      const days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const mins = Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((timeUntil % (1000 * 60)) / 1000);
      daysEl.textContent = days;
      hoursEl.textContent = hours;
      minsEl.textContent = mins;
      secsEl.textContent = secs;
    }, 1000);
  }
}

const courseFinishTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Feb 13, 2022'),
});

courseFinishTimer.start;

console.log(courseFinishTimer.start());
