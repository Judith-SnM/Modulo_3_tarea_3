const numero = +prompt("ingrese un numero entre 1 y 20")

const factorial = (numero) => {
    if (numero <= 1) return 1
    return numero * factorial(numero - 1)
}
if (numero <= 20 && numero >= 1) {
    console.log("el numero es valido esta en el rango");
    for (let i = 1; i <= numero; i++) {
        console.log(`${i} X ${numero}= ${i * numero}`)
    }
    for (let i = 1; i <= numero; i++) {
        console.log(`Factorial de ${i} es: ${factorial(i)}`)
    }

} else {
    console.log("Numero fuera del rango");
}


