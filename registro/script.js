// Definição registro de cliente

const cliente = {
    nome: "João Silva",
    idade: 30,
    email: "joãosilva@gmail.com"
}

// Acessando os campos do registro

console.log(cliente);
console.log(cliente.nome);
console.log(cliente.idade);
console.log(cliente.email);

// Modificando registro 

cliente.idade = 31;

// Adicionar novo campo

cliente.telefone = "92789-2754";

console.log(cliente);