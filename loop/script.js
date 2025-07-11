// for

for (i = 0; i <= 5; i++) {
    console.log(i);
}


let x = 5;
for (x; x > 2; x--) {
    console.log(x);
}


// while

let z = 1;
while (z <= 10) { 
    console.log(z);
    z = z + 1;
}

let y = 10 
while (y >= 5) {
    console.log(y);
    y--;
}

// Do while

let m = 15;

do {
    console.log(`${m}`);
    m = m + 2;   
} while (m <= 21);

// foreach (laço de array)

const frutas = ["maça", "banana", "laranja"];

function mostrarFruta(fruta, indice) {
    console.log(`Índice ${indice}: ${fruta}`);
}

frutas.forEach(mostrarFruta);

// titulo 
console.log("Iterando com forEach");

// arrow function 
frutas.forEach((fruta, indice) => {
    console.log(`Índice ${indice}: ${fruta}`);
});

// loop infinito

/* 
let a = 0;
while (a < 5) {
    console.log(a);
}
*/

