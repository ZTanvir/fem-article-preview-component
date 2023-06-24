const shareDestopBtn = document.querySelector(".share-arrow-destop");
const desktopShareEl = document.querySelector(".article__share-desktop");

// Show social share section by click on share icon for desktops
shareDestopBtn.addEventListener("click", (e) => {
  desktopShareEl.classList.toggle("active-desktop-share");
});

const articleShareMobileEl = document.querySelector(".article__share-mobile");
const mobileShareImg = document.querySelector(".mobile__share-img");
const authorInfoEl = document.querySelector(".article__mobile_author-info");
const shareIconsEl = document.querySelector(".share-mobile__icon");

// Show social share section by click on share icon for mobile
mobileShareImg.addEventListener("click", (e) => {
  authorInfoEl.classList.toggle("hide-info-mobile");
  shareIconsEl.classList.toggle("hide-info-mobile");
  if (authorInfoEl.classList.contains("hide-info-mobile")) {
    articleShareMobileEl.style.backgroundColor = "var(--cc-dark-grayish-blue)";
  } else {
    articleShareMobileEl.style.backgroundColor = "white";
  }
});
