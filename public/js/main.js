const tempoInicial = $("#tempo-digitacao").text();
const campo = $(".campo-digitacao");

$(() => {
        atualizaTamanhoFrase();
        inicializaContadores();
        inicializaCronometro();
        $("#botao-reniciar").click(reniciaJogo);
    }
);

const atualizaTamanhoFrase = () => {
    const frase = $(".frase").text();
    const numPalavras = frase.split(" ").length;
    const tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
};

const inicializaContadores = () => {
    campo.on("input", () => {
        const conteudo = campo.val();
        const qtdPalavras = conteudo.split(/\S+/).length - 1;
        const qtdCaracteres = conteudo.length;
        $("#contador-palavras").text(qtdPalavras);
        $("#contador-caracteres").text(qtdCaracteres);
    });
};

const inicializaCronometro = () => {
    let tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", () => {
        $("#botao-reniciar").attr("disabled", true);
        const cronometroID = setInterval(() => {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante <= 0) {
                campo.attr("disabled", true);
                clearInterval(cronometroID)
                $("#botao-reniciar").attr("disabled", false);
            }
        }, 1000);
    });
};

const reniciaJogo = () => {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
}



