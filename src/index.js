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
            <button class="btn btn-secondary m-1" id="botaoEditar" >editar</button>
            <button onclick="excluirCurso(this)" id="botaoExcluir" class="btn btn-danger m-1">excluir</button>
        </td>`        
    });
    corpoTabela +="<tbody>"
    return corpoTabela;
}

//função excluir curso -- ainda preciso arrumar a posição da exclusão
function excluirCurso() {
    if(confirm("Você tem certeza que quer deletar este curso ?")) {
        var elem = document.getElementById('bloco')
        elem.parentNode.removeChild(elem)
        console.log(elem)
    }
}


//FUNÇÃO CLICAR NA OPCAO EDITAR CURSO
function clicarEmEditar() {
    document.getElementById("botaoEditar")
    .classList.add("active")
    
}

//FUNCAO ABRIR JANELA DE EDIÇÃO

//FUNCAO ATUALIZAR DADOS DO CLIENTE 

//FUNCAO VERIFICAR SE O FORMULARIO TA PREENCHIDO (REQUIRED)

//FUNCAO SALVAR EDICAO

//FUNCAO LIMPAR OS CAMPOS DO FORMULARIO

//LISTARCURSOS ATUALIZADO



// Incorporando informações no DOM
document.getElementById("corpo").innerHTML = listarCursos();

document.getElementById("janelaAberta")
    .addEventListener("click", abrirJanelaEdicao)
