//Esse código é de um desafio diário do aplicativo que eu uso, "Coddy".

let hasInk = true
let hasPaper = true;
let extraSupplies;

function checkOfficeSetup(hasInk, hasPaper, extraSupplies) {
/*Criamos uma função de cheque o setup do escritório, que no caso é uma impressora.
Temos as variáveis "tem tinta", "tem papel" e coisas extras.
Sendo 2 booleans e 1 int.
*/

    if (!hasInk) {
        return "Refill ink";
    }
//Verificamos se "!" a função executada é diferente do dado exercido na variável. 
//(Se a variável com "true" é igual o "true" dado quando executa a função).
    
    if (!hasPaper) {
        return "Load paper";
    }

    if (extraSupplies > 5) {
        return "Organize supplies";
    }

    return "All set!";
//Se todos passarem com a função correta, nós retornamos um "Tudo acertado".
}

const checagem = checkOfficeSetup(true, true, 4);
console.log(checagem);