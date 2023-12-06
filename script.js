let descricao = document.getElementById('descricao');
let responsavel = document.getElementById('responsavel');
let table = document.getElementById('lista-de-tarefas');
let cont = 0;   
let marcador = false;

function add(event){
    event.preventDefault();

    let descricaoInput = descricao.value;  
    let responsavelInput = responsavel.value;

    if(descricaoInput !== "" && descricaoInput !== null && descricaoInput !== undefined && responsavelInput !== "" && responsavelInput !== null && responsavelInput !== undefined){
        cont++

    let add = `
    <tr id="${cont}"> 
    <td id="tarefa-${cont}" onclick="trocarT(${cont})" class="tarefas"><span title="Precione para trocar a descrição da tarefa!">${descricaoInput}</span></td>
    <td id="status-${cont}">Pendente</td> 
    <td onclick="trocarN(${cont})" id="nome-${cont}" class="responsaveis"><span title="Precione para trocar o responsavel!">${responsavelInput}</span></td>
    <td>
    <button onclick="concluido(${cont})" class="concluir">Concluir</button>
    <button onclick="cancelar(${cont})" class="cancelar">Cancelar</button>
    <button onclick="remover(${cont})" class="remover">Remover</button>
    </td>
    </tr>`;

    table.innerHTML += add;
    marcador = false; 
        
    descricao.value = '';
    descricao.focus();
    responsavel.value = '';
    }
}

function concluido(id){
    let status = document.getElementById("status-" + id);
    if(marcador == false){
        status.replaceChildren("Concluído");
    }
}

function trocarT(id){
    let tarefa = document.getElementById("tarefa-" + id);
    let novoT = prompt("Alterar tarefa: ");
    if(novoT !== "" && novoT !== null && novoT !== undefined){
        tarefa.replaceChildren(novoT);
    }
}

function trocarN(id){
    let nome = document.getElementById("nome-" + id);
    let novoN = prompt("Informe o novo responsavel: ");
    if(novoN !== "" && novoN !== null && novoN !== undefined){
        nome.replaceChildren(novoN);
    }
}

function cancelar(id){
    let status = document.getElementById("status-" + id);
    let tarefa = document.getElementById("tarefa-" + id);
    tarefa.style.textDecoration = "line-through";
    status.replaceChildren("Cancelado");
    marcador = true;
}

function remover(id){
    let remover = document.getElementById(id);
    remover.remove();
}