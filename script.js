const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";

document.addEventListener("DOMContentLoaded", () => {
const element = document.getElementById("scramble");

function startScramble() {
let iteration = 0;
const targetText = element.dataset.value;

clearInterval(element.interval);

element.interval = setInterval(() => {
element.innerText = targetText
.split("")
.map((char, index) => {
if (index < iteration) {
return targetText[index];
}
return letters[Math.floor(Math.random() * letters.length)];
})
.join("");

if (iteration >= targetText.length) {
clearInterval(element.interval);
}

iteration += 1 / 3;
}, 50);
}

// Trigger on hover (or call startScramble() directly for page load)

element.addEventListener("mouseover", startScramble);
});

