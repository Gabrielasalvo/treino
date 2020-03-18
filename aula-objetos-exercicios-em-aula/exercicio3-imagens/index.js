function onButtonClick() {
  const input = document.getElementById("image-input");
  if (
    input.value.includes(".jpeg") ||
    input.value.includes(".png") ||
    input.value.includes(".jpg") ||
    input.value.includes("data")
  ) {
    console.log("oi");
    const containerDeImagens = document.getElementById("container-das-imagens");
    containerDeImagens.innerHTML += "<img src='" + input.value + "'>";
  } else {
    alert("Insira uma imagem válida");
  }
}

function onKeyDownInput(ev) {
  if (ev.key === "Enter") {
    if (
      ev.target.value.includes(".jpeg") ||
      ev.target.value.includes(".png") ||
      ev.target.value.includes(".jpg") ||
      ev.target.value.includes("data")
    ) {
      const containerDeImagens = document.getElementById(
        "container-das-imagens"
      );
      containerDeImagens.innerHTML += "<img src='" + ev.target.value + "'>";
    } else {
      alert("Insira uma imagem válida");
    }
  }
}
