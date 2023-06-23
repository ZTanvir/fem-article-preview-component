const shareDestopBtn = document.querySelector(".share-arrow-destop");
const desktopShareEl = document.querySelector(".article__share-desktop");

// Show social share section by click on share icon for desktops
shareDestopBtn.addEventListener("click", (e) => {
  desktopShareEl.classList.toggle("active-desktop-share");
});
//
