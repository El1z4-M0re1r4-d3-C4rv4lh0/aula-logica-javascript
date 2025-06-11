// Superclasse

class Animais {
    // Atributo
        constructor(nome) {
            this.nome = nome;
        }

    // Método
        fazerSom() {
            console.log("O animal fez um som!");
        }

}

// Subclasses
class Cachorro extends Animais {
    //Herdando o método da superclasse e sobreescrevendo
    fazerSom() {
        console.log("O cachorro late");
    }
}

let rex = new Cachorro("Rex");
console.log(rex.nome);
rex.fazerSom();

