const irbutton = document.getElementById("ir-button");
const voltarbutton = document.getElementById("voltar-button");
const numbInput = document.getElementById("numb-chart");

// -----------
numbInput.addEventListener("input", () => {
  const imgPrincipal = document.getElementById("imgPrincipal");
  const numaterior = document.getElementById("numaterior");
  const numatual = document.getElementById("numatual");
  const numproximo = document.getElementById("numproximo");

  numaterior.innerText = Number(numbInput.value) - 1;
  numatual.innerText = Number(numbInput.value);
  numproximo.innerText = Number(numbInput.value) + 1;

  imganterior.src = `https://static.ragnaplace.com/db/npc/gif/${numaterior.innerText}.gif`;
  imgPrincipal.src = `https://static.ragnaplace.com/db/npc/gif/${numatual.innerText}.gif`;
  imgproximo.src = `https://static.ragnaplace.com/db/npc/gif/${numproximo.innerText}.gif`;
});
// -----------
irbutton.addEventListener("click", () => {
  const imgPrincipal = document.getElementById("imgPrincipal");
  const imganterior = document.getElementById("imganterior");
  const imgproximo = document.getElementById("imgproximo");
  const numaterior = document.getElementById("numaterior");
  const numatual = document.getElementById("numatual");
  const numproximo = document.getElementById("numproximo");

  numaterior.innerText = Number(numaterior.innerText) + 1;
  numatual.innerText = Number(numatual.innerText) + 1;
  numproximo.innerText = Number(numproximo.innerText) + 1;
  imganterior.src = `https://static.ragnaplace.com/db/npc/gif/${numaterior.innerText}.gif`;
  imgPrincipal.src = `https://static.ragnaplace.com/db/npc/gif/${numatual.innerText}.gif`;
  imgproximo.src = `https://static.ragnaplace.com/db/npc/gif/${numproximo.innerText}.gif`;
});
// -----------
voltarbutton.addEventListener("click", () => {
  const imgPrincipal = document.getElementById("imgPrincipal");
  const imganterior = document.getElementById("imganterior");
  const imgproximo = document.getElementById("imgproximo");
  const numaterior = document.getElementById("numaterior");
  const numatual = document.getElementById("numatual");
  const numproximo = document.getElementById("numproximo");

  numaterior.innerText = Number(numaterior.innerText) - 1;
  numatual.innerText = Number(numatual.innerText) - 1;
  numproximo.innerText = Number(numproximo.innerText) - 1;
  imganterior.src = `https://static.ragnaplace.com/db/npc/gif/${numaterior.innerText}.gif`;
  imgPrincipal.src = `https://static.ragnaplace.com/db/npc/gif/${numatual.innerText}.gif`;
  imgproximo.src = `https://static.ragnaplace.com/db/npc/gif/${numproximo.innerText}.gif`;
});
