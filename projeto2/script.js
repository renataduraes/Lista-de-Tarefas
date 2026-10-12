
const formulario = document.getElementById("formTarefa");
const campoTarefa = document.getElementById("novaTarefa");
const lista = document.getElementById("listaTarefas");
const contador = document.getElementById("contador");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const texto = campoTarefa.value.trim();

    if (texto === "") {
        return;
    }

    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    const descricao = document.createElement("span");
    const botaoExcluir = document.createElement("button");

    checkbox.type = "checkbox";
    descricao.textContent = texto;
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.type = "button";

    checkbox.addEventListener("change", function() {
        item.classList.toggle("concluida", checkbox.checked);
        atualizarContador();
    });

    botaoExcluir.addEventListener("click", function() {
        item.remove();
        atualizarContador();
    });

    item.append(checkbox, descricao, botaoExcluir);
    lista.appendChild(item);

    campoTarefa.value = "";
    campoTarefa.focus();

    atualizarContador();
});

function atualizarContador() {
    const itens = lista.querySelectorAll("li");
    const concluidas = lista.querySelectorAll(
        "li.concluida"
    ).length;

    contador.textContent =
        `${concluidas} de ${itens.length} tarefas concluídas`;
}
