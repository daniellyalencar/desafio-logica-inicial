let saldoRankeadas = saldo(27, 5)
console.log(saldoRankeadas);
let nivel = "";

function saldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

switch (true) {

    case saldoRankeadas < 10:
        nivel = "Ferro";
        break;
    case saldoRankeadas > 10 && saldoRankeadas <= 20:
        nivel = "Bronze";
        break;
    case saldoRankeadas > 20 && saldoRankeadas <= 50:
        nivel = "Prata";
        break;
    case saldoRankeadas > 50 && saldoRankeadas <= 80:
        nivel = "Ouro";
        break;
    case saldoRankeadas > 80 && saldoRankeadas <= 90:
        nivel = "Diamante";
        break;
    case saldoRankeadas > 90 && saldoRankeadas <= 100:
        nivel = "Lendário";
        break;
    case saldoRankeadas > 100:
        nivel = "Imortal";
}

console.log("O Herói tem de saldo de " +saldoRankeadas+ ", e está no nível " +nivel);