const numero = +prompt("ingrese un numero entre 1 y 20")

if (numero <= 20 || numero >=1) {
    alert("el numero es valido esta en el rango");
} else {
    alert("Numero fuera del rango");
}

const factorial = (numero) => {
    if (numero <= 1) return 1
    return numero * factorial(numero -1)
}
