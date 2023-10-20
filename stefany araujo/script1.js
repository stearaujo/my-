function calcularSoma() {
    const numero1= parseFloat(document.getElementById("numero1").value);
    const numero2= parseFloat(document.getElementById("numero2").value);

    const resultado = numero1 + numero2;


    document.getElementById("resultadoSoma").textContent = resultado;
}

function verificarMaiorMenor() {
    const numero1 = parseFloat(document.getElementById("numero1_relacional").value);
    const numero2 = parseFloat(document.getElementById("numero2_relacional").value);

    let resultado;

   
   
    if (numero1 > numero2) {
        resultado = "O primeiro número é maior";
 }
     else if (numero1 < numero2) {
        resultado = "O segundo número é maior";
     }

     else {
        resultado = "Os números são iguais";
     }
    }

     function verificarCheckboxes() {
        const checkbox1 = document.getElementById("check1").checked;
        const checkbox2 = document.getElementById("check2").checked;

        let resultado;
        if (checkbox1 && checkbox2) {
            resultado = "Ambos os checkboxes estão marcados";
        }
        else {
            resultado = "Pelo menos, um dos checkboxes não está marcado";
        }
         
        document.getElementById("resultadoLogico").textContent = resultado;


     }
    
