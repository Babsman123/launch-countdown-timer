"use strict";
// const countdownSecond = document.querySelector(".countdown__second");

// // const inputDays = document.querySelector(".input--num");
// console.log(countdownSecond);

// const startCoundownDate = function () {
//   //set the timer
//   let time = 24 * 60 * 60;

//   function flipCard(element, value) {
//     const topHalf = element.querySelector(".top");
//     const bottomHalf = element.querySelector(".bottom");

//     if (topHalf.textContent !== value) {
//       console.log(value);
//       //   topHalf.classList.add("flip");
//       bottomHalf.classList.add("flip");

//       setTimeout(() => {
//         // topHalf.textContent = value;
//         bottomHalf.textContent = value;
//         topHalf.classList.remove("flip");
//         bottomHalf.classList.remove("flip");
//       }, 500);
//     }
//   }

//   //call the timer every seconds
//   setInterval(() => {
//     let day = String(Math.floor(time / (24 * 3600))).padStart(2, 0);
//     let hour = String(Math.floor((time % (24 * 3600)) / 3600)).padStart(2, 0);
//     let minutes = String(Math.floor((time % 3600) / 60)).padStart(2, 0);
//     let seconds = String(time % 60).padStart(2, 0);

//     // countdownDay.textContent = day;
//     // countdownHour.textContent = hour;
//     // countdownMinute.textContent = minutes;
//     // countdownSecond.textContent = seconds;

//     flipCard(countdownSecond, seconds);

//     document.querySelector(".second-text").textContent = seconds;

//     // UPDATE UI
//     console.log(`${day} day, ${hour} hour, ${minutes} mins, ${seconds} sec`);
//     time--;
//   }, 1000);
// };

// startCoundownDate();

//NEW JAVASCRIPT FOR THIS PROJECT
const countdownSecond = document.querySelector(".segment__display--second");
const countdownMinute = document.querySelector(".segment__display--minute");
const countdownHour = document.querySelector(".segment__display--hour");
const countdownDay = document.querySelector(".segment__display--day");

// const countdownTop = document.querySelector(".segment__overlay--top");
// const countdownBottom = document.querySelector(".segment__overlay--bottom");

const startCoundownDate = function () {
  let timer = 24 * 60 * 60; // 24 hours in seconds

  // Select each countdown segment once
  const countdownDay = document.querySelector(".countdown__day");
  const countdownHour = document.querySelector(".countdown__hour");
  const countdownMinute = document.querySelector(".countdown__minute");
  const countdownSecond = document.querySelector(".countdown__second");

  let prevDay = "";
  let prevHour = "";
  let prevMinute = "";
  let prevSecond = "";

  function flipCard(element, newValue) {
    const display = element.querySelector(".segment__display");
    const top = element.querySelector(".segment__overlay--top");
    const bottom = element.querySelector(".segment__overlay--bottom");

    if (display.textContent !== newValue) {
      // Set new values in overlays for animation
      console.log(display);
      display.textContent = newValue;
      top.textContent = newValue;
      bottom.textContent = newValue;

      bottom.classList.add("flip--bottom");

      // Add animation class

      // After the animation duration, update the main display
      setTimeout(() => {
        bottom.classList.remove("flip--bottom");
      }, 500); // Match with CSS animation duration
    }
  }

  // Countdown loop
  setInterval(() => {
    let day = String(Math.floor(timer / (24 * 3600))).padStart(2, "0");
    let hour = String(Math.floor((timer % (24 * 3600)) / 3600)).padStart(
      2,
      "0"
    );
    let minutes = String(Math.floor((timer % 3600) / 60)).padStart(2, "0");
    let seconds = String(timer % 60).padStart(2, "0");

    // Animate only if value changed
    if (day !== prevDay) flipCard(countdownDay, day);
    if (hour !== prevHour) flipCard(countdownHour, hour);
    if (minutes !== prevMinute) flipCard(countdownMinute, minutes);
    if (seconds !== prevSecond) flipCard(countdownSecond, seconds);

    prevDay = day;
    prevHour = hour;
    prevMinute = minutes;
    prevSecond = seconds;

    timer--;
  }, 1000);
};

startCoundownDate();
