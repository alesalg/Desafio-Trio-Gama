//ARRAY DE OBJETOS (OBJETO = CURSO)
const cursos = [
    {nome: "Desenvolvimento Web", img: "../imagens/ilustra-team.png", descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."},
    {nome: "Marketing Digital", img: "../imagens/ilustra-marketing.png", descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."},
    {nome: "Consultório UX", img: "../imagens/ilustra-ux.png", descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."}
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
                    <button onclick="editarCurso(this)"class="btn btn-secondary m-1"data-bs-toggle="modal" data-bs-target="#editarCurso">editar</button>
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

// EDITAR CURSO

function editarCurso(e) {
    //Percorre o elemento até encontrar o primeiro filho, assim localizamos o curso do botão
    let elemento = e.parentNode.parentNode.firstElementChild.innerHTML;
    //Localiza em qual posição do vetor está o objeto
    let posicaoElemento = cursos.findIndex((cursos) => cursos.nome === elemento);

    // Capturamos o botão do modal e incluimos no mesmo o valor do atributo objeto
    let nome = document.getElementById("edicaoNome");
    nome.value = cursos[posicaoElemento].nome;
    // let img = document.getElementById("edicaoImg");
    // img.files[0] = cursos[posicaoElemento].img;
    
    let descricao = document.getElementById("edicaoDesc");
    descricao.value = cursos[posicaoElemento].descricao;

    // Capturamos o botão do modal para chamar a funcao e editar os dados
    let botao = document.getElementById("editarInfoCurso");
    botao.addEventListener("click", (a) => {
        a.preventDefault();
        
        cursos[posicaoElemento].nome = nome.value;
        cursos[posicaoElemento].descricao = descricao.value;

        //Procurar a posicao do curso dentro da tabela e incluindo o valor digitado no modal
        let posicao = e.parentNode.parentNode.children;
        posicao[0].innerHTML = cursos[posicaoElemento].nome;
        posicao[2].innerHTML = cursos[posicaoElemento].descricao;
    })
}

//EXCLUIR CURSO DA TELA
function excluirCurso(e) {
    if(confirm("Você tem certeza que quer deletar este curso ?")) {
        //parent node = pegamos o elemento pai do botão capturado 
        //rowIndex, retorna o indice tr da tabela
        let i = e.parentNode.parentNode.rowIndex;
        let tabela = document.getElementById("minhatabela");
        tabela.deleteRow(i);
    }
}

//-----------------------------------------------------------

listarCursos();