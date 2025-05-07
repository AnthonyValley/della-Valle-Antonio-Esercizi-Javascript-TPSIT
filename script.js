// ESERCIZIO 1 – Controllo numerico
console.log("--- ESERCIZIO 1 ---");
function controllaNumero(num) {
    console.log("Numero inserito:", num);

    if (num % 2 === 0) {
        console.log("Numero pari");
    } else {
        console.log("Numero dispari");
    }

    if (num > 100) {
        alert("Grande!");
    }
}

controllaNumero(101);



// ESERCIZIO 2 – Conto alla rovescia
console.log("--- ESERCIZIO 2 ---");
let i = 10;
while (i >= 0) {
    console.log(i);
    if (i === 0) {
        alert("BOOM!");
    }
    i--;
}


// ESERCIZIO 3 – Operazioni su una lista
console.log("--- ESERCIZIO 3 ---");
let numeri = [3, 6, 1, 9];
console.log("Lista originale:", numeri);

numeri.push(5);
console.log("Dopo push 5:", numeri);

numeri.sort((a, b) => a - b);
console.log("Lista ordinata:", numeri);

console.log("Primo elemento:", numeri[0]);
console.log("Ultimo elemento:", numeri[numeri.length - 1]);


// ESERCIZIO 4 – Calcolatrice base
console.log("--- ESERCIZIO 4 ---");
function calcola(n1, n2, operazione) {
    switch (operazione) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            if (n2 === 0) {
                return "Errore: Divisione per zero!";
            }
            return n1 / n2;
        default:
            return "Errore: Operazione non valida!";
    }
}

console.log("Esempi Calcolatrice:");
console.log("2 + 3 =", calcola(2, 3, "+"));
console.log("10 - 4 =", calcola(10, 4, "-"));
console.log("5 * 6 =", calcola(5, 6, "*"));
console.log("10 / 2 =", calcola(10, 2, "/"));
console.log("7 / 0 =", calcola(7, 0, "/"));
console.log("4 % 2 =", calcola(4, 2, "%")); 


// ESERCIZIO 5 – Interazione con il DOM
console.log("--- ESERCIZIO 5 (Interazione con il DOM) ---");


function saluta() {
    const inputElement = document.getElementById('inputNome');
    const divSaluto = document.getElementById('saluto');
    const nome = inputElement.value;

    if (nome.trim() !== "") { 
        divSaluto.textContent = `Ciao, ${nome}!`;
    } else {
        divSaluto.textContent = "Per favore, inserisci il tuo nome.";
     
    }
  
}