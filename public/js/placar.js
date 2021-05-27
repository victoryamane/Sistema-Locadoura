const inserePlacar = () => {
    const corpoTabela = $(".placar").find("tbody");
    const usuario = "Victor"
    const numPalavras = $("#contador-palavras").text();

    const linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);
}

const novaLinha = (usuario, palavras) => {
    const linha = $("<tr>");
    const colunaUsuario = $("<td>").text(usuario);
    const colunaPalavras = $("<td>").text(palavras);
    const colunaRemover = $("<td>");

    const link = $("<a>").addClass("botao-remover").attr("href", "#");
    const icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha() {
    event.preventDefault();
    $(this).parent().parent().remove();
}
