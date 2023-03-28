//CONDICIONAL CASCATEADA
/* var idade = parseInt(prompt("Digite sua idade: "));
var nome = prompt("Digite o seu nome: ");

console.log(nome);

if (idade < 18) {
    console.log("Menor de idade. " + idade);
} else {
    console.log("Maior de idade. " + idade);
} */


// LISTA DE EXERCICIOS 3 (ESTRUTURAS DE REPETICAO)

/* //Atividade 1 - Caminhão
var p = 0;
var total = 0;

for (var i = 1; i < 26; i++) {
    p = parseInt(prompt("Digite o peso: "));
    total = total + p;
    console.log("p" + i + " = " + p + "; soma = " + total);
} */

/*// Atividade 2 - Total produtos
var item = 0;
var total = 0;

for (var i = 1; i < 46; i++) {
    var q = parseFloat(prompt("Digite a quantidade do item: "));
    var pr = parseFloat(prompt("Digite o valor do item: "));
    console.log("Item " + i + ". Quantidade: " + q + "; Valor unidatario: " + pr);
    item = q * pr;
    total = total + item;
    console.log("Item " + i + " R$ " + item);
}

console.log("O total da compra é: R$ " + total); */

/* //Atividade 3 - Horas Trabalhadas
var nh = 0; //horas diarias
var totalH = 0; //variavel para armazenar a soma de todas as horas trabalhadas

for (var i = 1; i < 30; i++) {
    var nh = parseInt(prompt("Digite a quantidade de horas do dia " + i + ": "));
    console.log("Dia " + i + ": " + nh + " horas trabalhadas.");
    totalH = totalH + nh;
}

console.log("Total de horas trabalhadas por 30 dias: " + totalH); */

//Atividade 6 - H = 1 + 2 + 3 + 4 ... N
// var n = 0;
// var h = 0;

// var n = parseInt(prompt("Digite o valor limite: "));

// for (var i = 1; i <= n; i++) {
//     console.log("H = " + h + " + " + i);
//     h = h + i;  
// }
// console.log("H = " + h);

//Arrays

//Atividade 1 - Lista digitada pelo usuario
// var tamanhoLista = parseInt(prompt("Digite o tamanho da lista: "));
// var lista = [];

// for (var j = 0; j < tamanhoLista; j++) {
//     var i = parseInt(prompt("Digite o valor " + j + ": "));
//     lista[j] = i;
// }

// console.log(lista);

// //Atividade 2 - Array com números aleatórios
// var tamanhoLista = parseInt(prompt("Digite o tamanho da lista: "));
// var lista = [];

// function getRandomInclusive (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max-min + 1)) + min;
// }

// for (var j = 0; j < tamanhoLista; j++) {
//     lista[j] = getRandomInclusive(0,10);
// }

// console.log(lista);

//Atividade 3 - 