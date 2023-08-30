const bar = document.getElementById("bar");
const barsIcon = document.getElementById("barsIcon");
const crossIcon = document.getElementById("crossIcon");
const vpravoIcon = document.getElementById("vpravoIcon");
const podMenu = document.getElementById("podMenu");

barsIcon.onclick = () => {
  podMenu.style.transition = "1s linear";
  bar.style.height = "300px";
  barsIcon.style.display = "none";
  crossIcon.style.display = "unset";
  vpravoIcon.style.display = "none";
  podMenu.style.opacity = 0;
  setTimeout(() => {
    podMenu.style.display = "flex";
    setTimeout(() => {
      podMenu.style.opacity = 1;
    }, "100");
  }, "100");
};

crossIcon.onclick = () => {
  bar.style.height = "50px";
  barsIcon.style.display = "unset";
  crossIcon.style.display = "none";
  podMenu.style.display = "none";
  podMenu.style.transition = "0s";
};

onresize = () => {
  if (window.innerWidth > 1250 && podMenu.style.display === "none") {
    vpravoIcon.style.display = "flex";
  }
  if (window.innerWidth < 1200) {
    vpravoIcon.style.display = "none";
  }
};
