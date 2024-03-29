let textSpan = document.querySelector("#elevate-text");
let characters = textSpan.textContent.split("");
textSpan.innerHTML = "";

characters.forEach((char, index) => {
  let span = document.createElement("span");
  span.textContent = char;
  let offset = index * 3;
  span.style.bottom = `${offset}px`;
  // span.style.transformOrigin = 'bottom';
  // span.style.transform = `rotate(${offset*10}deg)`;
  textSpan.appendChild(span);
});
