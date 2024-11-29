let heroi = ["Gleidson", gerarNumeroAleatorio(0, 11000)];

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (heroi[1] <= 1000) {
  console.log(
    heroi[0] +
      " está com " +
      heroi[1] +
      " de experiência o que lhe conscendo o nivel ferro"
  );
} else if (heroi[1] >= 1001 && heroi[1] <= 2000) {
  console.log(
    heroi[0] +
      " está com " +
      heroi[1] +
      " de experiência o que lhe conscendo o nivel bronze"
  );
} else if (heroi[1] >= 2001 && heroi[1] <= 5000) {
  console.log(
    heroi[0] +
      " está com " +
      heroi[1] +
      " de experiência o que lhe conscendo o nivel prata"
  );
} else if (heroi[1] >= 5001 && heroi[1] <= 7000) {
  console.log(
    heroi[0] +
      " está com " +
      heroi[1] +
      " de experiência o que lhe conscendo o nivel ouro"
  );
} else if (heroi[1] >= 7001 && heroi[1] <= 8000) {
  console.log(
    heroi[0] +
      "está com " +
      heroi[1] +
      " de experiência o que lhe conscendo o nivel platina"
  );
} else if (heroi[1] >= 8001 && heroi[1] <= 9000) {
  console.log(
    heroi[0] +
      " está com " +
      heroi[1] +
      " de experiência o que lhe conscendo o nivel ascendente"
  );
} else if (heroi[1] >= 9001 && heroi[1] <= 10000) {
  console.log(
    heroi[0] +
      "está com " +
      heroi[1] +
      " de experiência o que lhe conscendo o nivel imortal"
  );
} else if (heroi[1] > 10000) {
  console.log(
    heroi[0] +
      " está com " +
      heroi[1] +
      " de experiência o que lhe conscendo o nivel radiante"
  );
}
