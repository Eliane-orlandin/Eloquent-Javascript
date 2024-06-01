// Resolução do exercício Tabuleiro de Xadrez - Livro Eloquente JS

var a = true;
for (i = 0; i < 9; i++) {
  if (a) {
    console.log("# # # # ");
  } else {
    console.log(" # # # #");
  }
  a = !a;
}
