const scaryImage = document.getElementById("scaryImage");
const scarySound = document.getElementById("scarySound");
const candleImage = document.getElementById("candleImage");

// tạo text đếm ngược
const countdownText = document.createElement("div");

countdownText.classList.add("countdown");

document.body.appendChild(countdownText);

function blowCandle() {

  candleImage.src = "./style/Candle-Off.png";

  let count = 3;

  countdownText.style.display = "block";
  countdownText.innerText = count;

  const timer = setInterval(() => {

    count--;

    if (count > 0) {

      countdownText.innerText = count;

    } else {

      clearInterval(timer);

      countdownText.style.display = "none";

      scaryImage.style.display = "block";

      scarySound.play();
    }

  }, 1000);
}
