// todo, select the right things
const shrinkBtn = document.getElementById("shrinkBtn");
const expandBtn = document.getElementById("expandBtn");
const photo = document.getElementById("photo");

shrinkBtn.addEventListener("click", () => {
  photo.style.transform = "scale(0.5)";
});

expandBtn.addEventListener("click", () => {
  photo.style.transform = "scale(1)";
});
