
function ej0(numero) {

    let numero = parseInt(document.getElementById('ej0a').value);
    
    for (let i=2; i<numero -1; i++) {
        if (numero % i == 0) 
            return true; 
            console.log(numero);
    }
    return false;

}
















function ej1() {
    let numero = parseInt(document.getElementById('ej1a').value);

    if (numero < 10) {
        document.getElementById('salida1').innerHTML = `El número <b>${numero}</b>
        se encuentra entre 1 y 10`;
    } else {
        document.getElementById('salida1').innerHTML = `El número <b>${numero}</b>
        no se encuentra entre 1 y 10`;
    }

}

function ej2() {
    let numero = parseInt(document.getElementById('ej2a').value);

    if (numero < 0) {
        document.getElementById('salida2').innerHTML = `El número <b>${numero}</b>
        es negativo`;
    } else {
        document.getElementById('salida2').innerHTML = `El número <b>${numero}</b>
        es positivo`;
    }

}
function ej3() {

    let a = parseInt(document.getElementById('ej3a').value);
    let b = parseInt(document.getElementById('ej3b').value);
    let c = parseInt(document.getElementById('ej3c').value);
    let miarray = [a, b, c];
    let Array = new Array[3];
    document.getElementById("salida3").innerHTML = orden.sort();

}



function ej5() {
    let valor = parseInt(document.getElementById('ej5a').value);

    switch (valor) {
        case 0:
            document.getElementById("salida5").innerHTML = `Muy deficiente`;
            break;
        case 1:
            document.getElementById("salida5").innerHTML = `Muy deficiente`;
            break;
        case 2:
            document.getElementById("salida5").innerHTML = `Muy deficiente`;
            break;
        case 3:
            document.getElementById("salida5").innerHTML = `Insuficiente`;
            break;
        case 4:
            document.getElementById("salida5").innerHTML = `Insuficiente`;
            break;
        case 5:
            document.getElementById("salida5").innerHTML = `Suficiente`;
            break;
        case 6:
            document.getElementById("salida5").innerHTML = `Bien`;
            break;
        case 7:
            document.getElementById("salida5").innerHTML = `Notable`;
            break;
        case 8:
            document.getElementById("salida5").innerHTML = `Notable`;
            break;
        case 9:
            document.getElementById("salida5").innerHTML = `Sobresaliente`;
            break;
        case 10:
            document.getElementById("salida5").innerHTML = `Sobresaliente`;
            break;

        default:
            document.getElementById("salida5").innerHTML = `Introduzca una calificación entre 0 y 10`;
    }
}


function ej6() {
    for (var i = 100; i < 200; i++) {
        if (i % 2 != 0) {

            salida6.innerHTML = `F12 para ver console.log()`;
            console.log(i);
        }
    }
} 
function ej7() {
    for (var i = 1; i < 101; i++) {
        if (i % 3 == 0) {

            salida7.innerHTML = `
            Se ha realizado un <b>bucle for del 1 al 100</b>. <br>
            Se ha dividido cada número entre 3 dando resultado true cuando 
            el resto de cada división sea 0. <br><br>
            <b>if(i % 3 == 0)</b><br><br>
            <b>La expresión % o módulo muestra el resto de la división entre 2 números.</b> <br>
            F12 para ver console.log()`;
            console.log(i);
        }

    }
} 


function ej8() {
    let resultado = 0;
    for (var i = 1; i < 101; i++) {
        if (i % 5 == 0) {
            result = [i];
            salida8.innerHTML = `
            Se ha realizado un <b>bucle for del 1 al 100</b>. <br>
            Dando true que la función de modulo <br> <b>if(i % 5 == 0)</b> tiene como resto 0. <br><br>
            <b>La expresión % o módulo muestra el resto de la división entre 2 números.</b> <br><br>
            F12 para ver console.log() <br>
            ${result}`;
            console.log(i);
        }

    }
} 














function ej7bak(){

    let resto;
    let numero1 = parseInt(document.getElementById('ej7a').value);
    let numero2 = parseInt(document.getElementById('ej7b').value);
    
    resto = numero1%numero2;
    
    if (resto==0){
        salida7.innerHTML = `Es multiplo de ${numero2}`;

    } else{
        salida7.innerHTML = `NO es múltiplo de ${numero2}`;
    }
}




 
 









/*
function ej3mal() {
    let a = parseInt(document.getElementById('ej3a').value);
    let b = parseInt(document.getElementById('ej3b').value);
    let c = parseInt(document.getElementById('ej3c').value);

    let miArray = new Array(a, b, c);
    let result = miArray.reverse();
    document.getElementById('salida3').innerHTML = `El número mayor es ${miArray[2]}`;
}

function wqtc() {
    let numero1 = parseInt(document.getElementById('ej3a').value);
    let numero2 = parseInt(document.getElementById('ej3b').value);
    let numero3 = parseInt(document.getElementById('ej3c').value);

    if (numero1 > numero2 || numero1 > numero3) {
        document.getElementById('salida3').innerHTML = `El número <b>${numero1}</b>
    es mayor que <b>${numero2}</b> y que <b>${numero3}</b>`;
    } else if (numero2 > numero1 || numero2 > numero3) {
        document.getElementById('salida3').innerHTML = `El número <b>${numero2}</b>
    es mayor que <b>${numero1}</b> y que <b>${numero3}</b>`;
    } else if (numero3 > numero1 || numero3 > numero2) {
        document.getElementById('salida3').innerHTML = `El número <b>${numero3}</b>
    es mayor que <b>${numero1}</b> y que <b>${numero2}</b>`;
    } else if (numero1 == numero2 || numero2 == numero1 || numero3 == numero1) {
        document.getElementById('salida3').innerHTML = `¡Todos los números son iguales!`
    }
}
*/