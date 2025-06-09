// if se condição for verdadeira (condicional)

const numerico = 10;

if (numerico > 8) {
    console.log("O número informado é maior que 8");
}

// else se condição for falsa
// estrutura aninhada e complexa

const nomealuno = "Bruno";

if (nomealuno === "Juliano") {
    console.log("Olá " + nomealuno);
}

else if (nomealuno === "Maria") {
    console.log("Olá Maria");
}
else {
    console.log("O nome não é Juliano e nem Maria");
}

// Encademanto de condição

let idade = 16;
let temRG = false;

if (idade >= 18 && temRG) { // Com o && só vai dar verdadeiro se tudo for verdadeiro. Independete se mudar a idade, vai dar falso devido ao RG
    console.log("Você pode votar"); // TRUE
}
else {
    console.log("Você não pode votar"); // FALSE
}

// switch

let novaidade = 15;

switch (novaidade) {
    case 18:
    console.log("O usuario tem 18");
    break;
    case 17:
    console.log("O usuario tem 17"); 
    break;
    default:
    console.log("Idade Inválida");
}
