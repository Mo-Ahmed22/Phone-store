var card = document.getElementById("profile-card");
var btn = document.getElementById("btn-theme-toggle");
var btnText = btn.querySelector(".btn-text");
var btnIcon = btn.querySelector(".btn-icon");

let isDark = false;

btn.addEventListener("click", () => {
  isDark = !isDark;

  card.classList.toggle("dark-mode");

  if (isDark) {
    btnText.textContent = "Dark Mode";
    btnIcon.textContent = "🌙";
  } else {
    btnText.textContent = "Light Mode";
    btnIcon.textContent = "☀️";
  }
});
