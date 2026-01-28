const readline = require("readline");
/* 
"require" é para importar um módulo.
"readline" é o módulo que lê o output do terminal.
*/

const pergunta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/*
"createinterface" serve para criar uma ligação entre o teclado e o terminal.
"std in" é o telado.
e "
atd out" o terminal.
*/

pergunta.question("Qual o seu nome?: ", (nome) =>  {
    console.log("Oi,", nome);
    pergunta.close();
});

/* "****.question" manda pro terminal.  
"=>" define o que o "(nome)" é.
"close()" fecha o terminal.
*/