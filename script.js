let hand = document.getElementById("hand");
let table = document.getElementById("table");
let result = document.getElementById("result");

hand.addEventListener("click", openHand);

function openHand() {
  hand.src = "image/hand-palm.png";

  table.innerHTML = "";
  result.innerText = "";

  let count = Math.floor(Math.random() * 20) + 1;

  for (let i = 0; i < count; i++) {

    let grain = document.createElement("div");
    grain.classList.add("grain");

    // Random position
    let x = Math.random() * 250 + "px";
    let y = Math.random() * 80 + "px";

    grain.style.setProperty('--x', x);
    grain.style.setProperty('--y', y);

    table.appendChild(grain);
  }

  setTimeout(() => {
    if (count % 2 === 0) {
    result.innerText = "વધાવો";
     
    } else {
       result.innerText = "વેણ";
    }
  }, 800);
}

function resetGame() {
  hand.src = "image/hand.png";
  table.innerHTML = "";
  result.innerText = "";
}
