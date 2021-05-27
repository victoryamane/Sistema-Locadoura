const tempoInicial = $("#tempo-digitacao").text();
const campo = $(".campo-digitacao");

$(() => {
        atualizaTamanhoFrase();
        inicializaContadores();
        inicializaCronometro();
        inicializaMarcadores();
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
                campo.toggleClass("campo-desativado");
            }
        }, 1000);
    });
};

const inicializaMarcadores = () => {
    const frase = $(".frase").text();
    campo.on("input", () => {
        const digitado = campo.val();
        const comparavel = frase.substr(0, digitado.length);

        if (digitado === comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
};

const reniciaJogo = () => {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
}



