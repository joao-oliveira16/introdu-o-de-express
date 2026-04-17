function exercicioH(vezes) {

  let numeros = [10, 20, 30];
  let resultado = "";

  for (let i = 0; i < vezes; i++) {
    resultado += numeros.join(", ");

    if (i < vezes - 1) {
      resultado += " | ";
    }
  }

  return `
    Exercício H - Vetor<br>
    Números: ${resultado}
  `;
}

export { exercicioH };