function exercicioD() {


    let idade = 18;
    let carteira = true;

    let resultado = idade >= 18 && carteira === true;
    
    return `
        Exercício D - Operadores Lógicos<br>
       
        Idade: ${idade}<br>
        Tem carteira: ${carteira}<br>
        Pode dirigir: ${resultado}
    `;
   
}

export { exercicioD };