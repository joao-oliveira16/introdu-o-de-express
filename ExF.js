function exercicioF() {
    let dia = 1;

    console.log("Exercício F - Switch case");
    
   
    return `
        Exercício F - Switch case<br>
       
        Dia: ${dia}<br>
        Resultado: ${dia === 1 ? "Domingo" : dia === 2 ? "Segunda" : "Outro dia"}
    `;
    
}

export { exercicioF };