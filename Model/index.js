const irbutton = document.getElementById("ir-button");
const voltarbutton = document.getElementById("voltar-button");
const numbInput = document.getElementById("numb-chart");
const checkboxfavorite = document.getElementById("checkboxfavorite");
import { getDom, insertUrl } from "../utils/domutils.js";

// -----------
numbInput.addEventListener("input", () => {
  const dom = getDom();

  dom.numaterior.innerText = Number(numbInput.value) - 1;
  dom.numatual.innerText = Number(numbInput.value);
  dom.numproximo.innerText = Number(numbInput.value) + 1;

  insertUrl(dom.imganterior, dom.imgPrincipal, dom.imgproximo);
});
// -----------
irbutton.addEventListener("click", () => {
  const dom = getDom();

  dom.numaterior.innerText = Number(dom.numaterior.innerText) + 1;
  dom.numatual.innerText = Number(dom.numatual.innerText) + 1;
  dom.numproximo.innerText = Number(numproximo.innerText) + 1;
  numbInput.value = numatual.innerText;

  insertUrl(dom.imganterior, dom.imgPrincipal, dom.imgproximo);
});
// -----------
voltarbutton.addEventListener("click", () => {
  const dom = getDom();

  dom.numaterior.innerText = Number(dom.numaterior.innerText) - 1;
  dom.numatual.innerText = Number(dom.numatual.innerText) - 1;
  dom.numproximo.innerText = Number(dom.numproximo.innerText) - 1;
  numbInput.value = numatual.innerText;

  insertUrl(dom.imganterior, dom.imgPrincipal, dom.imgproximo);
});

checkboxfavorite.addEventListener("change", () => {
  console.log(checkboxfavorite.checked);
  const imgPrincipal = document.getElementById("imgPrincipal");
  const favoritos = [];
  if (checkboxfavorite.checked) {
    favoritos.push(imgPrincipal.src);
  } else {
    favoritos.forEach((url) => {
      if (url === imgPrincipal.src) {
        favoritos.shift();
      }
    });
  }
  console.log(favoritos);
});
