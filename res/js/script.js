const bar = document.getElementById("bar");
const barsIcon = document.getElementById("barsIcon");
const crossIcon = document.getElementById("crossIcon");
const vpravoIcon = document.getElementById("vpravoIcon");
const podMenu = document.getElementById("podMenu");

barsIcon.onclick = () => {
  bar.style.height = "250px";
  barsIcon.style.display = "none";
  crossIcon.style.display = "unset";
  vpravoIcon.style.display = "none";
  podMenu.style.display = "flex";
  podMenu.style.justifyContent = "center";
  podMenu.style.alignItems = "center";
};

crossIcon.onclick = () => {
  bar.style.height = "50px";
  barsIcon.style.display = "unset";
  crossIcon.style.display = "none";
  vpravoIcon.style.display = "flex";
  podMenu.style.display = "none";
};
