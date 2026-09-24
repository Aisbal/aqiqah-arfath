const button = document.querySelector("button");

const cover = document.querySelector(".cover");
const invitation = document.querySelector(".invitation");

const audio = document.getElementById("backsound");

// =========================
// BUKA UNDANGAN + MUSIK
// =========================

button.addEventListener("click", function () {
  cover.style.display = "none";
  invitation.style.display = "block";

  audio.play();
});

// =========================
// COUNTDOWN
// =========================

const eventDate = new Date("2026-10-31T10:00:00+07:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(function () {
  const now = new Date().getTime();

  const distance = eventDate - now;

  const day = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hour = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const second = Math.floor((distance % (1000 * 60)) / 1000);

  days.innerText = day;
  hours.innerText = hour;
  minutes.innerText = minute;
  seconds.innerText = second;
}, 1000);

const musicButton = document.getElementById("music-button");

musicButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();

    musicButton.innerText = "🎵";

    musicButton.classList.add("playing");
  } else {
    audio.pause();

    musicButton.innerText = "▶️";

    musicButton.classList.remove("playing");
  }
});
