const btn = document.querySelector("#btn");
let hex = document.querySelector("#hexCode");

function randomColor() {
  let letters = "0123456789ABCEDF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

btn.addEventListener("click", function () {
  document.body.style.backgroundColor = randomColor();
  hex.innerHTML = randomColor();
});
