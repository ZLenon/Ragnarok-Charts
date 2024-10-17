const irbutton = document.getElementById("ir-button");
const voltarbutton = document.getElementById("voltar-button");
const numbInput = document.getElementById("numb-chart");
const checkboxfavorite = document.getElementById("checkboxfavorite");
import { getDom, insertUrl } from "../utils/domutils.js";
let favoritos = ["Lista de URL's"];

// -----------
numbInput.addEventListener("input", () => {
  const dom = getDom();

  dom.numaterior.innerText = Number(numbInput.value) - 1;
  dom.numatual.innerText = Number(numbInput.value);
  dom.numproximo.innerText = Number(numbInput.value) + 1;

  insertUrl(dom.imganterior, dom.imgPrincipal, dom.imgproximo);
  verifyCheck();
});
// -----------
irbutton.addEventListener("click", () => {
  const dom = getDom();

  dom.numaterior.innerText = Number(dom.numaterior.innerText) + 1;
  dom.numatual.innerText = Number(dom.numatual.innerText) + 1;
  dom.numproximo.innerText = Number(numproximo.innerText) + 1;
  numbInput.value = numatual.innerText;

  insertUrl(dom.imganterior, dom.imgPrincipal, dom.imgproximo);
  verifyCheck();
});
// -----------
voltarbutton.addEventListener("click", () => {
  const dom = getDom();

  dom.numaterior.innerText = Number(dom.numaterior.innerText) - 1;
  dom.numatual.innerText = Number(dom.numatual.innerText) - 1;
  dom.numproximo.innerText = Number(dom.numproximo.innerText) - 1;
  numbInput.value = numatual.innerText;

  insertUrl(dom.imganterior, dom.imgPrincipal, dom.imgproximo);
  verifyCheck();
});

checkboxfavorite.addEventListener("change", () => {
  const imgPrincipal = document.getElementById("imgPrincipal");
  if (!favoritos.includes(imgPrincipal.src)) {
    favoritos.push(imgPrincipal.src);
    console.log("Adicionou!!!");
  } else {
    const index = favoritos.indexOf(imgPrincipal.src);
    favoritos.splice(index, 1);
    console.log("Removeu!!!");
  }
  verifyCheck();
});

function verifyCheck() {
  const imgPrincipal = document.getElementById("imgPrincipal");

  if (favoritos.includes(imgPrincipal.src)) {
    checkboxfavorite.checked = true;
  } else {
    checkboxfavorite.checked = false;
  }

  console.log(favoritos);
}
