$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {
    $("#spinner").toggle();
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
        .fail(() => {
            $("#erro").toggle();
            setTimeout(() => {
                $("#erro").toggle();
            }, 2000);
        })
        .always(() => {
            $("#spinner").toggle();
        })
}

const trocaFraseAleatoria = (data) => {
    const frase = $(".frase");
    const numeroAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
};

function buscaFrase() {
    $("#spinner").toggle();
    const fraseId = $("#frase-id").val();
    console.log("Id da minha frase: " + fraseId);
    const dados = { id: fraseId };

    $.get("http://localhost:3000/frases", dados, trocaFrase)
        .fail(() => {
            $("#erro").toggle();
            setTimeout(() => {
                $("#erro").toggle();
            }, 2000);
        })
        .always(() => {
            $("#spinner").toggle();
        })
}

const trocaFrase = (data) => {
    const frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo)
};