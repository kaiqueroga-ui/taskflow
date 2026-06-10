const listaAtividades = document.getElementById("atividades");

function registrarAtividade(mensagem) {
    const item = document.createElement("li");

    const horario = new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
    });

    item.textContent = `[${horario}] ${mensagem}`;

    listaAtividades.prepend(item);

    while (listaAtividades.children.length > 10) {
        listaAtividades.removeChild(listaAtividades.lastChild);
    }
}