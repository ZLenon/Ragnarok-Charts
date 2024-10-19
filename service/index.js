const irbutton = document.getElementById("ir-button");
const voltarbutton = document.getElementById("voltar-button");
const numbInput = document.getElementById("numb-chart");
const checkboxfavorite = document.getElementById("checkboxfavorite");
const btnfavorite = document.getElementById("btnfavorite");
import {
  getDom,
  insertUrl,
  verifyCheck,
  favoritos,
} from "../utils/domutils.js";

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
  } else {
    const index = favoritos.indexOf(imgPrincipal.src);
    favoritos.splice(index, 1);
  }
  if (favoritos.length > 1) {
    btnfavorite.disabled = false;
  } else {
    btnfavorite.disabled = true;
  }
  verifyCheck();
});

btnfavorite.addEventListener("click", () => {
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  window.location.href = "../pages/favoritos.html";
});
