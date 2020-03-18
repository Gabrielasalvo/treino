function onButtonClick() {
  const input = document.getElementById("input");
  const divDosParagrafos = document.getElementById("container-dos-paragrafos");
  divDosParagrafos.innerHTML += "<p>" + input.value + "</p>";
  input.value = "";
}

function onKeyDownInput(e) {
  if (e.key === "Enter") {
    const divDosParagrafos = document.getElementById(
      "container-dos-paragrafos"
    );
    divDosParagrafos.innerHTML += "<p>" + e.target.value + "</p>";
    e.target.value = "";
  }
}

function onButtonClick() {
  const input = document.getElementById("image-input");
  if (
    input.value.includes(".jpeg") ||
    input.value.includes(".png") ||
    input.value.includes(".jpg") ||
    input.value.includes("data")
  ) {
    const containerDeImagens = document.getElementById("container-das-imagens");
    containerDeImagens.innerHTML += "<img src='" + input.value + "'>";
  } else {
    alert("Insira uma imagem válida");
  }
}

// function onKeyDownInput(ev) {
//   if (ev.key === "Enter") {
//     if (
//       ev.target.value.includes(".jpeg") ||
//       ev.target.value.includes(".png") ||
//       ev.target.value.includes(".jpg") ||
//       ev.target.value.includes("data")
//     ) {
//       const containerDeImagens = document.getElementById(
//         "container-das-imagens"
//       );
//       containerDeImagens.innerHTML += "<img src='" + ev.target.value + "'>";
//     } else {
//       alert("Insira uma imagem válida");
//     }
//   }
// }

// Classe de Animal
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

// const tiago = new AlunoF4("Tiago", 25, false);
// tiago.apresenteSe();
// tiago.voceGostaDeJS();

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
