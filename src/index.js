// vetor de objetos de cursos que estavam listados no html
const cursos = [
    {nome: "Desenvolvimento Web", img: `<img src="imagens/ilustra-web.png">`, descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."},
    {nome: "Marketing Digital", img: `<img src="imagens/ilustra-marketing.png" >`, descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."},
    {nome: "Consultorio UX", img: `<img src="imagens/ilustra-ux.png">`, descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."}
]

// função para listar os cursos e jogar no html cursos que já estavam listados
function listarCursos() {
    let corpoTabela = "" 
    // Aqui começa a montagem do HTML onde passei o forEach para ir listando os cursos
    corpoTabela += "<tbody>";
    cursos.forEach((cursos) => {
        corpoTabela += `<tr id="bloco"> 
        <td>${cursos.nome}</td>
        <td>${cursos.img}</td>
        <td>${cursos.descricao}</td>
        <td>
        <button class="btn btn-secondary m-1" id="btnEditar" >editar</button>
        <button onclick="excluirCurso(this)" id="btnoExcluir" class="btn btn-danger m-1">excluir</button>
        </td>`        
    });
    corpoTabela +="<tbody>"
    return corpoTabela;
}

function abrirModal() {
    document.querySelector('.modal').classList.add('active');
}

function fecharModal() {
    document.querySelector('.modal').classList.remove('active');
}

//função excluir curso da tela;
function excluirCurso(a) {
    if(confirm("Você tem certeza que quer deletar este curso ?")) {
        //parent node = pegamos o elemento pai do botão capturado 
        //rowIndex, retorna o indice tr da tabela
        let i = a.parentNode.parentNode.rowIndex;
        let tabela = document.getElementById("minhatabela");
        tabela.deleteRow(i);
        }
}


// OK - FUNÇÃO CLICAR NA OPCAO EDITAR CURSO
function clicarEmEditar() {  
    console.log("editando...");
    abrirModal()
}



// Incorporando informações no DOM
document.getElementById("corpo").innerHTML = listarCursos();

let btnAdicionarNovoCurso = document.getElementById("btnNovoCurso")
let btnSalvarEdicao = document.getElementById("salvar")
let btnCancelarEdicao = document.getElementById("cancelar")

let btnEditarCurso = document.getElementById("btnEditar")
//let excluirCurso = document.getElementById("btnExcluir")


//EVENTOS
btnAdicionarNovoCurso.addEventListener("click", adicionarNovoCurso)
btnSalvarEdicao.addEventListener("click", salvarEdicao)

btnCancelarEdicao.addEventListener("click", cancelarEdicao)
btnEditarCurso.addEventListener("click", editarCurso)
