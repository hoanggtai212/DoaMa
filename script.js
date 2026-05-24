const scaryImage = document.getElementById("scaryImage");
const scarySound = document.getElementById("scarySound");
const candleImage = document.getElementById("candleImage");

// tạo countdown
const countdownText = document.createElement("div");

countdownText.classList.add("countdown");

document.body.appendChild(countdownText);

function blowCandle(){

  // đổi ảnh nến
  candleImage.src = "./Candle-Off.png";

  let count = 3;

  // hiện countdown
  countdownText.style.display = "block";
  countdownText.innerHTML = count;

  const timer = setInterval(() => {

    count--;

    if(count > 0){

      countdownText.innerHTML = count;

    }else{

      clearInterval(timer);

      countdownText.style.display = "none";

      // hiện jumpscare
      scaryImage.style.display = "block";

      // phát âm thanh
      scarySound.play();
    }

  },1000);
}
