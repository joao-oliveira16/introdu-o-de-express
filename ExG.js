function exercicioG(limite) {

  let numeros = "";

  for (let i = 1; i <= limite; i++) {
    numeros += i;

    if (i < limite) {
      numeros += ", ";
    }
  }

  return `
    Exercício G - Estrutura de repetição<br>
    Números de 1 até ${limite}: ${numeros}
  `;
}

export { exercicioG };