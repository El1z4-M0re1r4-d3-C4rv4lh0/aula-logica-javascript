class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) { // Esta encapsulado / se tentar um console com pessoa.novoNome vai dar indefinido pois "set" esta encapsulado.
        this._nome = novoNome
    }
}

let pessoa = new Pessoa("Maria", 22);
console.log(pessoa.nome);
pessoa.nome = "Maria Carolina";
console.log(pessoa.nome);
