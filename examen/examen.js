
function ej1() {
    let entrada1 = ej1a.value;
    salida1.innerHTML = sum_cuad_dig(entrada1);
    if (entrada1 < 0) {
        salida1.innerHTML = `Introduzca un número positivo`
    }else if (sum_cuad_dig(entrada1) > entrada1){
        salida1.innerHTML += ` ¡Es un número desbordado!`
    } else {
        salida1.innerHTML += ` No es un número desbordado.`
    }
}

function sum_cuad_dig(n) {
    let cadena = String(n);
    // let array1 = [];
    let total = 0;
    for (let i = 0; i < cadena.length; i++) {
        let entero = parseInt(cadena[i]);
        let cuadrado = Math.pow(entero, 2);
        // array1.push(cuadrado);
        total += cuadrado;
    }
    return total;
}


function ej2(){
    const envio = 5;
    let peras = parseInt(ej2a.value);
    let manzanas = parseInt(ej2b.value);
    let fresas = parseInt(ej2c.value);
    let sandias = parseInt(ej2d.value);
    let totalKg = + peras + manzanas + fresas + sandias;
    
    let precioPeras = peras * 3;
    let precioManzanas = manzanas * 2.5;
    let precioFresas = fresas * 4;
    let precioSandias = sandias * 1;
    let totalPrecio = envio + precioPeras + precioManzanas + precioFresas + precioSandias;

    let perasDescuento = precioPeras * 0.9;
    let manzanasDescuento = precioManzanas * 0.9;
    let fresasDescuento = precioFresas * 0.9;
    let sandiasDescuento = precioSandias * 0.9;
    let totalDescuento = envio + perasDescuento + manzanasDescuento + fresasDescuento + sandiasDescuento;
    

if (totalKg > 10) {

    salida2.innerHTML = `
    <h3>¡10% de descuento aplicado!</h3>
    Total de kilos: ${totalKg} <br> <br>
    Precio de envío: ${envio} <br>
    Precio Peras ${perasDescuento} €<br>
    Precio Manzanas ${manzanasDescuento} €<br>
    Precio Fresas ${fresasDescuento} €<br>
    Precio Sandias ${sandiasDescuento} €<br>
    <br>
    Precio Total ${totalDescuento} €
    `;
} else{
    salida2.innerHTML = `
    Total de kilos: ${totalKg} <br> <br>
    Precio de envío: ${envio} <br>
    Precio Peras ${precioPeras} €<br>
    Precio Manzanas ${precioManzanas} €<br>
    Precio Fresas ${precioFresas} €<br>
    Precio Sandias ${precioSandias} €<br>
    <br>
    Precio Total ${totalPrecio} €
    `;
    }
}



















/*
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
*/
/*
Ojo 
y = String(22);
y.split('');     // Utiliza como delimitador el contenido de las comillas
console.log(y);
*/ 
