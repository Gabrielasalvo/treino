class AlunoF4 {
  constructor(nome, idade, js) {
    this.nome = nome;
    this.idade = idade;
    this.gostaDeJS = js;
  }

  apresenteSe() {
    console.log("Oi sou o ", this.nome, " e tenho ", this.idade, " anos");
  }

  voceGostaDeJS() {
    if (this.gostaDeJS) {
      console.log("Sim");
    } else {
      console.log("Não");
    }
  }
}

const tiago = new AlunoF4("Tiago", 25, false);
tiago.apresenteSe();
tiago.voceGostaDeJS();

class Cachorro {
  constructor(nome, peso) {
    this.nome = nome;
    this.peso = peso;
  }

  latir() {
    console.log("Au au!");
  }

  // a cada minuto que ele corre, ele perde 0.1kg
  correr(tempoEmMinuto) {
    this.peso = this.peso - tempoEmMinuto * 0.1;
  }
}

const astrodog = new Cachorro("Astrodog", 20);
console.log(astrodog);
astrodog.latir();
astrodog.correr(5);
console.log(astrodog);
