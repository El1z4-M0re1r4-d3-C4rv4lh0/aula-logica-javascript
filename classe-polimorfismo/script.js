// Superclasse 

class Ave {
    // Método
    voar () {
        console.log("A ave voa");
    }
}

//
class Pinguim extends Ave {
    // Polimorfismo
    voar () {
        console.log("Pinguins não podem voar");
    }
}

// instânciando
let ave = new Ave();
let pinguim = new Pinguim();
ave.voar();
pinguim.voar();

