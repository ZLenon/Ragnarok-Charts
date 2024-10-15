function getDom() {
  const imgPrincipal = document.getElementById("imgPrincipal");
  const imganterior = document.getElementById("imganterior");
  const imgproximo = document.getElementById("imgproximo");
  //-
  const numaterior = document.getElementById("numaterior");
  const numatual = document.getElementById("numatual");
  const numproximo = document.getElementById("numproximo");

  return {
    numaterior,
    numatual,
    numproximo,
    imgPrincipal,
    imganterior,
    imgproximo,
  };
}

function insertUrl(imganterior, imgPrincipal, imgproximo) {
  imganterior.src = `https://static.ragnaplace.com/db/npc/gif/${numaterior.innerText}.gif`;
  imgPrincipal.src = `https://static.ragnaplace.com/db/npc/gif/${numatual.innerText}.gif`;
  imgproximo.src = `https://static.ragnaplace.com/db/npc/gif/${numproximo.innerText}.gif`;
}

export { getDom, insertUrl };
