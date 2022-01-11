const nome = "Deivid Wust";
let nome2 = "";
let pessoaDefault = {
    nome: "Deivid Wust",
    Idade: "19",
    Trabalho: "Programador",
};

let nomes = ["Deivid", "Maria", "João"];
let pessoas = [
    { nome: "Deivid", idade: 19, trabalho: "Programador" },
    { nome: "Maria", idade: 25, trabalho: "UX Designer" },
];

function alterarNome() {
    nome2 = "Maria Silva";
    console.log("valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("---------IMPRIMIR PESSOAS---------")
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nime);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    });
}

imprimirPessoas();

console.log("Pessoas:");

adicionarPessoa({
    nome: "Pedro Silva",
    idade: 28,
    trabalho: "Porteiro",
});

console.log("Pessoas:");

//imprimirPessoa(pessoaDefault)

//imprimirPessoa({nome: "Maria Silva", Idade: "25", Trabalho: "UX Designer"})

//alterarNome("João Silva Pereira");
//alterarNome("Maria Silva");

//alterarNome();
