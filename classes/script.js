// Declarando uma classe 

class Pessoa{
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

// Declarando um método
saudar() {
    return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
}

}

//Instânciando 
const pessoa1 = new Pessoa("Ana", 35);
const pessoa2 = new Pessoa("João", 28)
console.log(pessoa1.saudar());
console.log(pessoa2.saudar());

// Nova Classe

class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

// Método
exibirInfo() {
    return `Carro: ${this.marca} ${this.modelo}`;
}
}

// Instância
const meuCarro = new Carro("Fusca -", "1974");
console.log(meuCarro.exibirInfo());




