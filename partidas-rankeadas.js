let vitorias = gerarNumeroAleatorio(0, 110);
let derrotas = gerarNumeroAleatorio(0, 110);
let nivel = null

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function calcSaldoVitoria(vitorias, derrotas) {
  let saldoVitoria = vitorias - derrotas;
   return saldoVitoria;
}

let saldo = Math.abs(calcSaldoVitoria(vitorias, derrotas));


switch (true) {
  case (saldo < 10): nivel = "ferro";
  break
  case (saldo >= 11 && saldo <= 20): nivel = "bronze";
  break
  case (saldo >= 21 && saldo <= 50): nivel = "prata";
  break
  case (saldo >= 51 && saldo <= 80): nivel = "ouro";
  break
  case (saldo >= 81 && saldo <= 90): nivel = "diamante";
  break
  case (saldo >= 91 && saldo <= 100): nivel = "lendário";
  break
  case (saldo >= 101): nivel = "imortal";
  break
}

console.log("O Herói tem de saldo de " + saldo + " saldo  está no nível de " + nivel)