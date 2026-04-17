function exercicioD(idade, carteira) {



    let resultado = idade >= 18 && carteira === true;
    
    return `
        Exercício D - Operadores Lógicos<br>
       
        Idade: ${idade}<br>
        Tem carteira: ${carteira}<br>
        Pode dirigir: ${resultado}
    `;
   
}

export { exercicioD };