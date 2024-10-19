const btnVoltar = document.getElementById("voltarPagPrincipal");
const limparFav = document.getElementById("limparFavoritos");
let favoritos = [];

function criaFavoritos() {
  favoritos = JSON.parse(localStorage.getItem("favoritos"));
  const copyFavorite = favoritos.slice(1);
  copyFavorite.forEach((url) => {
    const cards = document.getElementById("cards");
    if (cards) {
      // Verifica se o elemento "cards" existe
      const picture = document.createElement("picture");
      const imagem = document.createElement("img");
      imagem.setAttribute("src", url); // Define o atributo src da imagem

      // Adiciona os elementos ao DOM
      cards.appendChild(picture);
      picture.appendChild(imagem);
    } else {
      console.error('Elemento "cards" não encontrado no DOM.');
    }
  });
}

limparFav.addEventListener("click", () => {
  localStorage.removeItem("favoritos");
});

criaFavoritos();
btnVoltar.addEventListener("click", () => {
  window.location.href = "../index.html";
});
