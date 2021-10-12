const refs = {
  timerEl: document.getElementById('timer-1'),
  daysEl: document.querySelector('[data-value="days"]'),
  hoursEl: document.querySelector('[data-value="hours"]'),
  minsEl: document.querySelector('[data-value="mins"]'),
  secsEl: document.querySelector('[data-value="secs"]'),
};
const { timerEl, daysEl, hoursEl, minsEl, secsEl } = refs;
const courseFinishDate = new Date('Feb 13, 2022');

function updateTime() {
  const currentDate = Date.now();
  const timeUntil = courseFinishDate - currentDate;
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
}

setInterval(updateTime, 1000);

// class CountdownTimer {
//   constructor(selector, targetDate) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//   }
// }

// const courseFinishTimer = new CountdownTimer(timerEl, courseFinishDate);
