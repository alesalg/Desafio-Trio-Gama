//ARRAY DE OBJETOS (OBJETO = CURSO)
const cursos = [
    {id: "1", nome: "Desenvolvimento Web", img: `<img src="imagens/ilustra-web.png">`, descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."},
    {id: "2", nome: "Marketing Digital", img: `<img src="imagens/ilustra-marketing.png" >`, descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."},
    {id: "3", nome: "Consultório UX", img: `<img src="imagens/ilustra-ux.png">`, descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."}
]

//ABRE OS CURSOS QUE JA TEM NO PROJETO
function listarCursos() {
    let corpoTabela = "" 
    // Aqui começa a montagem do HTML onde passei o forEach para ir listando os cursos
    corpoTabela += "<tbody>";
    cursos.forEach((cursos) => {
        corpoTabela += 
        `<tr id="bloco"> 
            <td>${cursos.id}</td>
            <td>${cursos.nome}</td>
            <td>${cursos.img}</td>
            <td>${cursos.descricao}</td>
            <td>
                <button onclick="editarCurso(this)" id="btnEditar" class="btn btn-secondary m-1">editar</button>
                <button onclick="excluirCurso(this)" id="btnExcluir" class="btn btn-danger m-1">excluir</button>
            </td>`        
    });
    corpoTabela +="<tbody>"
    return corpoTabela;
}

//------------------------------------------------------

function abrirModal() {
    document.querySelector('.modal').classList.add('active');

}

function fecharModal() {
    document.querySelector('.modal').classList.remove('active');
}

//----------------------------------------------------------


//EXCLUIR CURSO DA TELA
function excluirCurso(a) {
    if(confirm("Você tem certeza que quer deletar este curso ?")) {
        //parent node = pegamos o elemento pai do botão capturado 
        //rowIndex, retorna o indice tr da tabela
        let i = a.parentNode.parentNode.rowIndex;
        let tabela = document.getElementById("minhatabela");
        tabela.deleteRow(i);
    }
}

//-----------------------------------------------------------

//ABRE MODAL QUANDO CLICA EM ADICIONAR NOVO CURSO
function adicionarCurso() {

    abrirModal()
    salvar.style.display = "initial"
    salvarEdicao.style.display = "none"
}

//----------------------------------------------------------

// Funcao para salvar o curso novo funcionando

//FUNCAO, QUANDO CLICA EM SALVAR NOVO CURSO
//PARAMETROS SAO OS INPUTS
function salvarCurso(id, nome, img, descricao) {
    //VARIAVEL CORPO TABELA VAZIA
    let corpoTabela = '';
    
    //
    cursos.splice(cursos.length, 0,
        {
            id: id,
            nome: nome,
            img: img,
            descricao
        });
    //VARIAVEL CORPOTABELA RECEBE O TBODY
    corpoTabela += "<tbody>";
    //LE CURSO POR CURSO
    cursos.forEach((cursos) => {
        //ADICIONA O CURSO NO CORPO TABELA
        corpoTabela +=
            `<tr id="bloco"> 
            <td>${cursos.id}</td>
            <td>${cursos.nome}</td>
            <td>${cursos.img}</td>
            <td>${cursos.descricao}</td>
            <td>
                <button onclick="editarCurso(this)" id="btnEditar" class="btn btn-secondary m-1">editar</button>
                <button onclick="excluirCurso(this)" id="btnExcluir" class="btn btn-danger m-1">excluir</button>
            </td>`
    });

    corpoTabela += "<tbody>"
    //RETORNA O CORPOTABELA 
    return corpoTabela;
}

//-----------------------------------------------------------

//SALVAR E ADICIONAR NOVO CURSO
function salvarNovoCurso() {
    let id = document.getElementById("id").value,
        nome = document.getElementById("nome").value,
        img = document.getElementById("img").value,
        descricao = document.getElementById("descricao").value;
        
        document.getElementById('corpo').innerHTML = salvarCurso(id, nome, img, descricao)    
        fecharModal();
        document.querySelector('#form').reset();   
}

//--------------------------------------------------------------

//FUNCAO PARA SALVAR CURSO EDITADO
function atualizarCurso() {

}


//---------------------------------------------------------------

//FUNCAO ABRE DADOS DO CURSO QUE FOI CLICADO

function editarCurso(opcao) { 
    abrirModal()

    salvar.style.display = "none"
    salvarEdicao.style.display = "initial"

    //rowIndex, retorna o indice tr(LINHA) da tabela
    let id = opcao.parentNode.parentNode.rowIndex
    console.log(id);
    
    //PERCORRER DE I=0 ATÉ I < 3
    for (let i=0; i < cursos.length; i++) {
        if(cursos[i]["id"] == id) {
            //MOSTRA AS INFORMACOES NOS INPUTS
            document.getElementById("id").value = cursos[i]["id"]
            document.getElementById("nome").value = cursos[i]["nome"]  
            document.getElementById("img").value = cursos[i]["img"]  
            document.getElementById("descricao").value = cursos[i]["descricao"]  
        }
    }
}

//---------------------------------------------------------

function cancelarEdicao() {
    console.log("cancelando..")
    limparDados()
    fecharModal()
}

function limparDados() {
    console.log("limpando...")
}

//----------------------------------------------------------

// Incorporando informações no DOM
document.getElementById("corpo").innerHTML = listarCursos();

let btnAdicionarCurso = document.getElementById("btnNovoCurso")
let btnEditarCurso = document.getElementById("btnEditar") 
let salvar = document.getElementById("salvar") 
let salvarEdicao = document.getElementById("salvar-edicao")
let btnCancelarEdicao = document.getElementById("cancelar")


//EVENTOS
btnAdicionarCurso.addEventListener("click", adicionarCurso)
btnEditarCurso.addEventListener("click", editarCurso)
salvar.addEventListener("click", salvarNovoCurso)
salvarEdicao.addEventListener("click", atualizarCurso)
btnCancelarEdicao.addEventListener("click", cancelarEdicao)



/*
function testando(objIndex) {
    console.log("entrei");
    
    //localizar index de um objeto especifico, findIndex.
    cursosIndex = cursos.findIndex((obj => obj.id == 1))
    
    //LOG DO OBJ NO CONSOLE
    console.log("antes de atualizar: ", cursosIndex);
    
    //ATUALIZANDO O NOME DO OBJETO
    cursos[index].nome = "Lalala"
    
    //LOG DO OBJ NO CONSOLE
    console.log("depois de atualizar: ", cursos[id].nome);
    
}*/



//FUNCAO SALVAR QUANDO EDITAR INFORMACOES DO CURSO!
/*function salvarEdicao(opcao) {
    console.log("salvando...");

        if (cursos[i]["id"] == document.getElementById("id")) {
            console.log(id);
        }


        let cursoId = cursos.find(cursoId => cursos.id === "id")

    for (let i=0; i < cursos.length; i++) {
        if(cursos[i]["id"] == id) {
            cursos[i]["id"] = document.getElementById("id").value
            console.log("aqui tem o id" + id);
        }
    }

    //cursos[numero]  ???

   fecharModal()

    //REPLACE
}
*/
