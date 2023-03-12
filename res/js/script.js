const bar = document.getElementById("bar");
const barsIcon = document.getElementById("barsIcon");
const crossIcon = document.getElementById("crossIcon");
const vpravoIcon = document.getElementById("vpravoIcon");
const podMenu = document.getElementById("podMenu");

barsIcon.onclick = () => {
  bar.style.height = "300px";
  barsIcon.style.display = "none";
  crossIcon.style.display = "unset";
  vpravoIcon.style.display = "none";
  podMenu.style.opacity = 1;
  podMenu.style.transition = "1.5s linear";
};

crossIcon.onclick = () => {
  bar.style.height = "50px";
  barsIcon.style.display = "unset";
  crossIcon.style.display = "none";
  vpravoIcon.style.display = "flex";
  podMenu.style.opacity = 0;
  podMenu.style.transition = "0s";
};
