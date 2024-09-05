document.addEventListener('DOMContentLoaded', () => {
    const inputTarefa = document.getElementById('novaTarefa');
    const btnAdicionar = document.getElementById('adicionar');
    const listaTarefas = document.getElementById('listaTarefas');

    btnAdicionar.addEventListener('click', () => {
        const tarefa = inputTarefa.value.trim();
        if (tarefa) {
            const li = document.createElement('li');
            li.textContent = tarefa;
            listaTarefas.appendChild(li);
            inputTarefa.value = '';
        }
    });
});
