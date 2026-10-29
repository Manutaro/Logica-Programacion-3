function calcularFactorial() {
    let numero;
    let esValido = false;

    while (!esValido) {
        let entrada = prompt("Ingresa un número entero positivo para calcular su factorial:");

        // Checa si el usuario canceló el prompt
        if (entrada === null) {
            alert("Operación cancelada.");
            return;

        }// if

        // Convertir la entrada a número
        numero = Number(entrada);

        // Validar si es un número, si no está vacío, si es finito y si es un entero >= 0
        if (entrada.trim() !== "" && !isNaN(numero) && Number.isInteger(numero) && numero >= 0) {
            esValido = true;
        } else {
            alert("> Error: Debes ingresar un número entero válido (positivo o cero). Inténtalo nuevamente.");

        }//else

    }// while !esValido

    // Calcula el factorial
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;

    }// for


    // Consola
    console.log(`El factorial de ${numero} es: ${factorial}`);
    alert(`El factorial de ${numero} es: ${factorial}`);
    
    // DOM
    document.getElementById("resultado").innerHTML = `El factorial de <strong>${numero}</strong> es: <strong>${factorial}</strong>`;
    
}// calcularFactorial

// Ejecutar la función
calcularFactorial();