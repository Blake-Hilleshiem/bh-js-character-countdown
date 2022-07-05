const charRemaining = document.getElementById("char-remaining");
const textInput = document.getElementById("input-box");

charRemaining.innerText = 15;

textInput.addEventListener("input", () => {
  charRemaining.innerText = 15 - textInput.value.length;
  if (charRemaining.innerText == 0 || charRemaining.innerText < 0) {
    textInput.disabled = true;
  }
});
