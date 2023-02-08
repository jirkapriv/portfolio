const bar = document.getElementById("bar");
const barsIcon = document.getElementById("barsIcon");
const crossIcon = document.getElementById("crossIcon");

barsIcon.onclick = () => {
  bar.style.height = "500px";
  barsIcon.style.display = "none";
  crossIcon.style.display = "unset";
};

crossIcon.onclick = () => {
  bar.style.height = "50px";
  barsIcon.style.display = "unset";
  crossIcon.style.display = "none";
};
