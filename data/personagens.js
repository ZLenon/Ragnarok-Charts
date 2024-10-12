class Personagem {
  constructor(nome, vida, ataque, defesa, url) {
    this.nome = nome; // Nome do personagem (string)
    this.vida = vida; // Vida do personagem (número)
    this.ataque = ataque; // Poder de ataque do personagem (número)
    this.defesa = defesa; // Poder de defesa do personagem (número)
    this.url = url; // URL de uma imagem ou representação do personagem (string)
  }

  atacar(inimigo) {
    let dano = this.ataque - inimigo.defesa;
    if (dano > 0) {
      inimigo.vida -= dano;
      console.log(
        `${this.nome} atacou ${inimigo.nome} causando ${dano} de dano.`
      );
    } else {
      console.log(`${this.nome} atacou ${inimigo.nome} mas não causou dano.`);
    }
  }

  defender(dano) {
    const danoRecebido = dano - this.defesa;
    if (danoRecebido > 0) {
      this.vida -= danoRecebido;
      console.log(`${this.nome} defendeu e recebeu ${danoRecebido} de dano.`);
    } else {
      console.log(`${this.nome} defendeu completamente o ataque.`);
    }
  }

  verificarVida() {
    if (this.vida > 0) {
      console.log(`${this.nome} tem ${this.vida} de vida restante.`);
    } else {
      console.log(`${this.nome} foi derrotado.`);
    }
  }
}

// Exemplo de uso
const personagem1 = new Personagem(
  "Guerreiro",
  100,
  30,
  20,
  "http://exemplo.com/guerreiro.png"
);
const personagem2 = new Personagem(
  "Mago",
  80,
  25,
  15,
  "http://exemplo.com/mago.png"
);

personagem1.atacar(personagem2);
personagem2.verificarVida();
personagem2.atacar(personagem1);
personagem1.verificarVida();
