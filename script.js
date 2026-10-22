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


 const navLinks = document.querySelectorAll(".column a");

  navLinks.forEach(link => {
    link.addEventListener("mousemove", (event) => {
      // 1-in-6 chance per mouse move tick to ensure the text generation feels fluid, not spammy
      if (Math.random() > 0.15) return;

      // Extract the pipe-separated phrases from the hovered link's data attribute
      const phraseData = link.getAttribute("data-phrases");
      if (!phraseData) return;
      
      const phrasesArray = phraseData.split("|");
      
      // Select a random phrase from that specific link's set
      const chosenPhrase = phrasesArray[Math.floor(Math.random() * phrasesArray.length)];

      // Create a floating text element
      const floatingText = document.createElement("div");
      floatingText.className = "floating-hover-text";
      floatingText.innerText = chosenPhrase;

      // Calculate an unpredictable position anywhere on the user's screen (subtracting padding)
      const randomX = Math.random() * (window.innerWidth - 300);
      const randomY = Math.random() * (window.innerHeight - 50);

      floatingText.style.left = `${randomX}px`;
      floatingText.style.top = `${randomY}px`;

      // Inject the text element into the DOM body
      document.body.appendChild(floatingText);

      // Completely remove the text node once its CSS fade animation completes
      setTimeout(() => {
        floatingText.remove();
      }, 1500);
    });
  });
});
