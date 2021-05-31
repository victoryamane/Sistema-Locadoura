$("#botao-frase").click(fraseAleatoria);

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