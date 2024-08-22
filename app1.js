function verificarNumero() {
    // Solicita al usuario que ingrese un número
    var numero = prompt("Ingrese un número entre 1 y 10:");

    // Convierte el valor ingresado a un número entero
    numero = parseInt(numero);

    // Obtiene el elemento para mostrar el resultado
    var resultado = document.getElementById('resultado');
    
    // Verifica si el número está en el rango de 1 a 10
    if (!isNaN(numero) && numero >= 1 && numero <= 10) {
        resultado.innerText = "Correcto";
    } else {
        resultado.innerText = "Incorrecto";
    }
}
