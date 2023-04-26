

function abrirModal(foto, nome) {
    modalFotoConteudo.innerHTML = `<img width="100%" src="${foto}">`;
    modalTitulo.innerHTML = nome;
}

function atualizarTabela(lista) {
    document.getElementById('tabela-dados').innerHTML = '';

    lista.map((cada) => {
        document.getElementById('tabela-dados').innerHTML += `
            <tr>
                <td>${cada.id}</td>
                <td>${cada.nome}</td>
                <td>${cada.descricao}</td>
                <td>${cada.quantidade}</td>
                <td>
                    <a onclick="abrirModal('${cada.foto}', '${cada.nome}')" href="#" data-bs-toggle="modal" data-bs-target="#modalFoto">
                        <img src="${cada.foto}" width="50px">
                    </a>
                </td>
                <td>
                    <button class="btn btn-outline-warning btn-sm">Editar</button>
                    <button onclick="excluirBebida(${cada.id})" class="btn btn-outline-danger btn-sm">Excluir</button>
                </td>
            </tr>
        `;
    });
}

function buscarBebidas() {
    //vamo buscar na API os dados das bebidas
    fetch('http://localhost:8000/bebidas')
        .then(res => res.json())
        .then(dados => atualizarTabela(dados));
}

async function excluirBebida(id) {
    alert('Bebida excluida');

    //vai fazer a requisicao, e vai esperar que ela termine
    await fetch('http://localhost:8000/bebidas/'+id, {
        method: 'DELETE'
    });

    buscarBebidas();
}

//assim que atualizar a pagina essa funcao vai ser executada
buscarBebidas();