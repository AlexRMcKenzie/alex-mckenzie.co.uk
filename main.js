function hide() {
  document.querySelectorAll(".popup-container").forEach(el =>
    el.style.visibility = "hidden");
}

function show(popup) {
  document.getElementById(popup).style.visibility = "visible";
}
