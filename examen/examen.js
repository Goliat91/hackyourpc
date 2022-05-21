let array1 = [];
function ej1() {
    //Entrada
    var n = String(ej1a.value);

    // Descompición
    let numero0 = parseInt(n[0]);
    let numero1 = parseInt(n[1]);
    let numero2 = parseInt(n[2]);

    //Cuadrado
    let cuad0 = Math.pow(numero0, 2);
    let cuad1 = Math.pow(numero1, 2);
    let total = cuad0 + cuad1;

    // Flujo decisiones
    if (n > 100) {
        salida1.innerHTML = `
    Introduzca un número de 3 dígitos
    `;
    } else if (total > n) {
        salida1.innerHTML = `
    Numero:${n} <br>
    <h2>¡ El número es curioso !</h2> <br>
    Descomposición: <br>
    ${numero0}  ${numero1} <br>
    <br>
    Suma de sus cuadrados = ${cuad0} + ${cuad1} = ${total}<br>
    `;
    } else if (total < n) {

        salida1.innerHTML = `
    Numero: ${n} <br>
    <h3>El número no es curioso</h3> <br>
    Descomposición: <br>
    ${numero0}  ${numero1} <br>
    <br>
    Suma de sus cuadrados = ${cuad0} + ${cuad1} = ${total}<br>
    `;

    } else {
        salida1.innerHTML = `
    Introduzca un número de 2 dígitos`;
    }


}


function sum_cuag_dig(n) {
    salida1.innerHTML = `${n}`;
}




function mostrarArray() {
    array1.push(n);

    for (let i = 0; i < array1.length; i++) {
        document.getElementById('salida1').innerHTML = `
      let array1 = [${array1}];
      ${array1[0]}<br>
      ${array1[1]}<br>
      ${array1[2]}<br>
      ${array1[3]}<br>`;
    }
}