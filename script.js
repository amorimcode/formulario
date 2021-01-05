function submit() {
    var nome = document.getElementById("nome")
    var sobrenome = document.getElementById("sobrenome")
    var email = document.getElementById("email")

    var dados = JSON.parse(localStorage.getItem("dados1"))

    if (dados == null) {
        localStorage.setItem("dadosproduto")
        dados = [];
    }

    var teste = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        email: email.value,
    }


    dados.push(teste)
    
    localStorage.setItem("dados1", JSON.stringify(dados))
}