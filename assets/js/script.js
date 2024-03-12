let bannerIndex = 0;
const banners = document.getElementsByClassName("banner__content");
const bannerContainer = document.querySelector(".banner");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

showBanner(bannerIndex);

function showBanner(index) {
    for (let i = 0; i < banners.length; i++) {
        banners[i].style.display = "none";
    }
    banners[index].style.display = "block";
    setTimeout(nextBanner, 10000);
    }

function nextBanner() {
    bannerIndex++;
    if (bannerIndex >= banners.length) {
        bannerIndex = 0;
    }
    showBanner(bannerIndex);
}

function prevBanner() {
    bannerIndex--;
    if (bannerIndex < 0) {
        bannerIndex = banners.length - 1;
    }
    showBanner(bannerIndex);
}

prevButton.addEventListener("click", prevBanner);
nextButton.addEventListener("click", nextBanner);

// mouse ile basılı tutup ileri geri gitme

let mouseDown = false;
let startX;
let scrollLeft;

bannerContainer.addEventListener("mousedown", (e) => {
    mouseDown = true;
    startX = e.pageX - bannerContainer.offsetLeft;
    scrollLeft = bannerContainer.scrollLeft;
});

bannerContainer.addEventListener("mouseleave", () => {
    mouseDown = false;
});

bannerContainer.addEventListener("mouseup", () => {
    mouseDown = false;
});

// navbar mobil menu açma kapama

const navmenu = document.querySelector(".menu-btn");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const menu = document.querySelector(".menu");
navmenu.addEventListener("click", () => {
    bar1.classList.toggle("baranimation1");
    bar2.classList.toggle("baranimation2");
    bar3.classList.toggle("baranimation3");
    menu.classList.toggle("active");
})