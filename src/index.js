// vetor de objetos de cursos que estavam listados no html
const cursos = [
    {id: "1", nome: "Desenvolvimento Web", img: `<img src="imagens/ilustra-web.png">`, descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."},
    {id: "2", nome: "Marketing Digital", img: `<img src="imagens/ilustra-marketing.png" >`, descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."},
    {id: "3", nome: "Consultório UX", img: `<img src="imagens/ilustra-ux.png">`, descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."}
]

// função para listar os cursos e jogar no html cursos que já estavam listados
function listarCursos() {
    let corpoTabela = "" 
    // Aqui começa a montagem do HTML onde passei o forEach para ir listando os cursos
    corpoTabela += "<tbody>";
    cursos.forEach((cursos) => {
        corpoTabela += `<tr id="bloco"> 
        <td>${cursos.id}</td>
        <td>${cursos.nome}</td>
        <td>${cursos.img}</td>
        <td>${cursos.descricao}</td>
        <td>
        <button class="btn btn-secondary m-1" id="btnEditar" >editar</button>
        <button onclick="excluirCurso(this)" id="btnExcluir" class="btn btn-danger m-1">excluir</button>
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

function adicionarCurso(index) {
    console.log("adicionando...");
    abrirModal()
    cursos.push(index)
    
}

function editarCurso(index) {  
    console.log("editando...");
    abrirModal()

}

function salvarEdicao() {
    console.log("salvando...");
    console.log(listarCursos());
    fecharModal()
}

function cancelarEdicao() {
    console.log("cancelando..")
    limparDados()
    fecharModal()
}

function limparDados() {
    console.log("limpando...")
}

// Incorporando informações no DOM
document.getElementById("corpo").innerHTML = listarCursos();

let btnAdicionarCurso = document.getElementById("btnNovoCurso")
let btnEditarCurso = document.getElementById("btnEditar")
//let btnExcluirCurso = document.getElementById("btnExcluir")
let btnSalvarEdicao = document.getElementById("salvar")
let btnCancelarEdicao = document.getElementById("cancelar")

//EVENTOS
btnAdicionarCurso.addEventListener("click", adicionarCurso)
btnEditarCurso.addEventListener("click", editarCurso)
//btnExcluirCurso.addEventListener("click", excluirCurso)
btnSalvarEdicao.addEventListener("click", salvarEdicao)
btnCancelarEdicao.addEventListener("click", cancelarEdicao)

