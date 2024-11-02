let vitorias = 50;
let derrotas = 25;
saldoVitorias(vitorias, derrotas);

function saldoVitorias(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    if (saldoVitorias < 10) {
        console.log("O Herói tem saldo de " + saldoVitorias + " vitórias e está no nível Ferro.");
    } else if (saldoVitorias <= 20) {
        console.log("O Herói tem saldo de " + saldoVitorias + " vitórias e está no nível Bronze.");
    } else if (saldoVitorias <= 50) {
        console.log("O Herói tem saldo de " + saldoVitorias + " vitórias e está no nível Prata.");
    } else if (saldoVitorias <= 80) {
        console.log("O Herói tem saldo de " + saldoVitorias + " vitórias e está no nível Ouro.");
    } else if (saldoVitorias <= 90) {
        console.log("O Herói tem saldo de " + saldoVitorias + " vitórias e está no nível Diamante.");
    } else if (saldoVitorias <= 100) {
        console.log("O Herói tem saldo de " + saldoVitorias + " vitórias e está no nível Lendário.");
    } else if (saldoVitorias > 100) {
        console.log("O Herói tem saldo de " + saldoVitorias + " vitórias e está no nível Imortal.");
    }

    
}



