// vetor de objetos de cursos que estavam listados no html
const cursos = [
    {nome: "Desenvolvimento Web", img: `<img src="../imagens/ilustra-web.png">`, descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."},
    {nome: "Marketing Digital", img: `<img src="../imagens/ilustra-marketing.png" >`, descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."},
    {nome: "Consultorio UX", img: `<img src="../imagens/ilustra-ux.png">`, descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."}
]

// função para listar os cursos e jogar no html cursos que já estavam listados
function listarCursos() {
    let corpoTabela = "" 
    // Aqui começa a montagem do HTML onde passei o forEach para ir listando os cursos
    corpoTabela += "<tbody>";
    cursos.forEach((cursos) => {
        corpoTabela += `<tr id="bloco"><td> ${cursos.nome}</td>
        <td>${cursos.img}</td>
        <td>${cursos.descricao}</td>
        <td>
        <button class="btn btn-secondary m-1">editar</button>
        <button onclick="excluirCurso(this)" class="btn btn-danger m-1">excluir</button>
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

// Incorporando informações no DOM
document.getElementById("corpo").innerHTML = listarCursos();