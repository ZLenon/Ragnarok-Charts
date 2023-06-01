const mygif = document.getElementById('mygif'); // tag IMG
const confirmaBtn =  document.getElementById('confirma'); //bottao
const avancaBtn =  document.getElementById('avanca'); //bottao
const retornaBtn = document.getElementById('retorna'); //bottao
const favoritarBtn = document.getElementById('favorito') // bottao favoritar
const numeracao = document.getElementById('numeracao'); //inpult text
const divImages = document.getElementById('divImages'); // div das imagens favoritadas


let valorAtual = 487;
numeracao.value = valorAtual;
let favoritos = [];

const search = () => {
  valorAtual = +numeracao.value;
  let newGif = `https://static.ragnaplace.com/db/npc/gif/${valorAtual}.gif`
  return mygif.src = newGif;   
}

const advance = () => {
  if (valorAtual === 3510) {
    let newGif = `https://static.ragnaplace.com/db/npc/gif/${valorAtual}.gif`;
    numeracao.value = valorAtual;
    return mygif.src = newGif;   
  }
  valorAtual += 1;
  let newGif = `https://static.ragnaplace.com/db/npc/gif/${valorAtual}.gif`;
  numeracao.value = valorAtual;
  return mygif.src = newGif; 
}

const retro = () => { 
  if (valorAtual === 1) {
    let newGif = `https://static.ragnaplace.com/db/npc/gif/${valorAtual}.gif`
    numeracao.value = valorAtual;
    return mygif.src = newGif;
  }
  valorAtual -= 1;
  let newGif = `https://static.ragnaplace.com/db/npc/gif/${valorAtual}.gif`
  numeracao.value = valorAtual;
  return mygif.src = newGif;
}

const fav = () => {
  let id = 0;
  favoritos.push(mygif.src);
  localStorage.setItem(id +=1, JSON.stringify(favoritos));
  console.log(favoritos);
  const imgNPC = document.createElement("img");

  favoritos.map((npc) => {
   
    imgNPC.src = npc;
    divImages.appendChild(imgNPC);
  })
}

confirmaBtn.addEventListener('click',search);
avancaBtn.addEventListener('click',advance);
retornaBtn.addEventListener('click', retro);
favoritarBtn.addEventListener('click', fav);
