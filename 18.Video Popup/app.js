// btn
const btn = document.querySelector(".btn");
// close icon
const closeIcon = document.querySelector(".close-icon");
// trailer container
const trailerContainer = document.querySelector(".trailer-container");
// Video
const video = document.querySelector("video");

btn.addEventListener("click", function () {
  trailerContainer.classList.remove("active");
});

closeIcon.addEventListener("click", function () {
  trailerContainer.classList.add("active");
  video.currTime = 0;
});

window.addEventListener("click", (e) => {
  if (e.target == trailerContainer) {
    trailerContainer.classList.add("active");
  }
});
