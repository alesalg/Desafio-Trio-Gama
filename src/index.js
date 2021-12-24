//ARRAY DE OBJETOS (OBJETO = CURSO)
const cursos = [
    {id: "1", nome: "Desenvolvimento Web", img: "../imagens/ilustra-team.png", descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."},
    {id: "2", nome: "Marketing Digital", img: "../imagens/ilustra-marketing.png", descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."},
    {id: "3", nome: "Consultório UX", img: "../imagens/ilustra-ux.png", descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."}
]

// CLASSE PARA MONTAR OS CURSOS 
class Cursos {
    montarCursos() {
        let corpoTabela = "" 
        // Aqui começa a montagem do HTML onde passei o forEach para ir listando os cursos
        corpoTabela += "<tbody>";
        cursos.forEach((cursos) => {
            corpoTabela += 
            `<tr id="bloco"> 
                <td>${cursos.nome}</td>
                <td><img src="${cursos.img}"</td>
                <td>${cursos.descricao}</td>
                <td>
                    <button onclick="editarCurso(this)" id="btnEditar" class="btn btn-secondary m-1">editar</button>
                    <button onclick="excluirCurso(this)" id="btnExcluir" class="btn btn-danger m-1">excluir</button>
                </td>`        
        });
        corpoTabela +="<tbody>"
        return corpoTabela;
    }
}

// FUNCTION PARA IMPORTAR PARA HTML DOM 
function listarCursos() {
    const cursos = new Cursos();
    document.getElementById("corpo").innerHTML = cursos.montarCursos();
}

const addCurso = document.forms.add_curso;

// ADD CURSO NOVO
addCurso.addEventListener("submit", (e) => {
    e.preventDefault();

    const titulo = addCurso.titulo.value;
    const desc = addCurso.desc.value;
    const img = addCurso.img.files[0];
    console.log(img);

    let reader = new FileReader();

    reader.onload = function (e) {
        cursos.push({
            nome: titulo,
            descricao: desc,
            img: e.target.result,
        });

        listarCursos();
    };

    reader.readAsDataURL(img);
})

//-----------------------------------------------------------

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

listarCursos();