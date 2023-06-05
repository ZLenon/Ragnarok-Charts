const urlGifPersona = document.getElementById('urlGifPersonas'); // tag IMG
const confirmaBTN =  document.getElementById('confirma'); //bottao
const nextBTN =  document.getElementById('avanca'); //bottao
const backBTN = document.getElementById('retorna'); //bottao 
const criaPersona = document.getElementById('criaPersona') // bottao favoritar
const idPersona = document.getElementById('idPersona'); //inpult text
const cardPersonas = document.getElementById('cardPersona'); // div das imagens favoritadas
const name =  document.getElementById('name');
const clase =  document.getElementById('clase');
const atk =  document.getElementById('atk');
const def =  document.getElementById('def');
import { personagens } from './Model/personagens.js';

let valorAtual = '';
idPersona.value = valorAtual;

const search = () => {
  valorAtual = +idPersona.value;
  let newGif = `https://static.ragnaplace.com/db/npc/gif/${valorAtual}.gif`
  return urlGifPersona.src = newGif;   
}

const next = () => {
  if (valorAtual === 3510) {
    let newGif = `https://static.ragnaplace.com/db/npc/gif/${valorAtual}.gif`;
    idPersona.value = valorAtual;
    return urlGifPersona.src = newGif;   
  }
  valorAtual += 1;
  let newGif = `https://static.ragnaplace.com/db/npc/gif/${valorAtual}.gif`;
  idPersona.value = valorAtual;
  return urlGifPersona.src = newGif; 
}

const back = () => { 
  if (valorAtual === 1) {
    let newGif = `https://static.ragnaplace.com/db/npc/gif/${valorAtual}.gif`
    idPersona.value = valorAtual;
    return urlGifPersona.src = newGif;
  }
  valorAtual -= 1;
  let newGif = `https://static.ragnaplace.com/db/npc/gif/${valorAtual}.gif`
  idPersona.value = valorAtual;
  return urlGifPersona.src = newGif;
}

const criaPersonagem = () => {
  let cardPersonagem = {
    id: Number(valorAtual),
    name: name.value, // input name
    clase: clase.value ,// input class
    atk: Number(atk.value), // input atk
    def: Number(def.value) , // input def
    url: urlGifPersona.src
  };
  personagens.push(cardPersonagem);
 console.log(personagens);
  const imgNPC = document.createElement("img");

  personagens.map((npc) => {
   
    imgNPC.src = npc.url;
    cardPersonas.appendChild(imgNPC);
  })
}

confirmaBTN.addEventListener('click',search);
nextBTN.addEventListener('click',next);
backBTN.addEventListener('click', back);
criaPersona.addEventListener('click', criaPersonagem);
