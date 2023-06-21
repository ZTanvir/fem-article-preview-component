const shareDestopBtn = document.querySelector(".share-arrow-destop");
const desktopShareEl = document.querySelector(".article__share-desktop");

shareDestopBtn.addEventListener("click", (e) => {
  desktopShareEl.classList.toggle("active-desktop-share");
});
