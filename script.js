const scaryImage = document.getElementById("scaryImage");
const scarySound = document.getElementById("scarySound");
const candleImage = document.getElementById("candleImage");

// tạo text đếm ngược
const countdownText = document.createElement("div");

countdownText.style.position = "fixed";
countdownText.style.top = "50%";
countdownText.style.left = "50%";
countdownText.style.transform = "translate(-50%, -50%)";
countdownText.style.fontSize = "120px";
countdownText.style.color = "red";
countdownText.style.fontWeight = "bold";
countdownText.style.zIndex = "9999";
countdownText.style.display = "none";

document.body.appendChild(countdownText);

function blowCandle() {

  // đổi ảnh nến
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

      // hiện ảnh scary
      scaryImage.style.display = "block";

      // phát âm thanh
      scarySound.play();
    }

  }, 1000);
}

#scaryImage{
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 9998;
}
