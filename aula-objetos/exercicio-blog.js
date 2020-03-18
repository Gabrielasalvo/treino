

class postBlog {
    constructor(titulo, autor, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }

    
    
}

let arrayBlog = []
const input = document.getElementById("autor")
const post = document.getElementById("postagem")
const titulo = document.getElementById("titulo")

const divParagrafos = document.getElementById("divDaPostagem")



function inserirTexto() {


    


    let objetoDoBlog = new postBlog(titulo.value, input.value, post.value)
    console.log(objetoDoBlog)

    arrayBlog.push(objetoDoBlog)
    console.log(arrayBlog)
 
    imprimePosts (arrayBlog)

}

function imprimePosts (arrayDePosts) {
     divParagrafos.innerHTML = ""

            arrayDePosts.forEach((post, index, array)=> {

            divParagrafos.innerHTML += "<p>" + post.autor + "</p>"

            divParagrafos.innerHTML += "<p>" + post.titulo + "</p>"

        
            divParagrafos.innerHTML += "<p>" + post.conteudo + "</p>"




     }) 
}