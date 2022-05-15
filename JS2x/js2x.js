
function ej0() {

    let numero0 = parseInt(document.getElementById('ej0a').value);

    for (let i = 2; i < numero0 - 1; i++) {
        if (numero0 % i == 0)
            return true;
        console.log(numero0);
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
let numerosEj4 = []
function ej4() {
    // PUSH añadir al final
    let entrada1 = ej4a.value; // Esto es la entrada getEbyid
    let entrada2 = ej4b.value; // Esto es la entrada getEbyid
    let entrada3 = ej4c.value; // Esto es la entrada getEbyid
    numerosEj4.push(entrada1, entrada2, entrada3);
    for (let i = 0; i < numerosEj4.length; i++) {
        document.getElementById('salida4').innerHTML = `var numeros = [${numerosEj4.sort(function (a, b) { return a - b })}]`
    }
}



function ej5() {
    let valor = parseInt(document.getElementById('ej5a').value);
    const elementoSalida = document.getElementById("salida5")
    switch (valor) {
        case 0:
        case 1:
        case 2:
            elementoSalida.innerHTML = `Muy deficiente`;
        case 3:
            elementoSalida.innerHTML = `Insuficiente`;
            break;
        case 4:
            elementoSalida.innerHTML = `Insuficiente`;
            break;
        case 5:
            elementoSalida.innerHTML = `Suficiente`;
            break;
        case 6:
            elementoSalida.innerHTML = `Bien`;
            break;
        case 7:
            elementoSalida.innerHTML = `Notable`;
            break;
        case 8:
            elementoSalida.innerHTML = `Notable`;
            break;
        case 9:
            elementoSalida.innerHTML = `Sobresaliente`;
            break;
        case 10:
            elementoSalida.innerHTML = `Sobresaliente`;
            break;

        default:
            elementoSalida.innerHTML = `Introduzca una calificación entre 0 y 10`;
    }
}

let array6 = [];
function ej6() {
    for (let i = 100; i < 200; i++) {
        if (i % 2 != 0) {
            array6.push(i);
            salida6.innerHTML = `F12 para ver console.log(${array6})`;
            console.log(i);
        }
    }
}
function ej7() {
    for (let i = 1; i < 101; i++) {
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
    for (let i = 1; i < 101; i++) {
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

let array9 = []
function ej9() {
    for (let i = 1; i < 1000; i++) {
        if (i % 2 == 0) {
            result = [i];
            array9.push(i);
            console.log(i);
            salida9.innerHTML = `${array9.reduce((a, b) => a + b, 0)}<br>
            F12 para ver console.log() `
        }
    }
}



let array10 = []
function ej10() {
    let entrada10a = parseInt(ej10a.value);
    let entrada10b = ej10b.value;
    for (let i = entrada10a + 1; i < entrada10b; i++) {
        result = [i];
        array10.push(i);
        let total = array10.reduce((a, b) => a + b, 0);
        document.getElementById('salida10').innerHTML = `var numeros = [${array10}]
    <br> Total = ${total}`;
    }
}


function ej11() {
    let entrada11 = parseInt(ej11a.value);
    if (entrada11 % 2 == 0) {
        document.getElementById('salida11').innerHTML = `El número es par`;
    } else {
        document.getElementById('salida11').innerHTML = `El número es impar`;
    }
}

function ej12() {
    let base12 = ej12a.value;
    let exponente12 = ej12b.value;
    let r = 1;
    for (let i = 0; i < exponente12; i++) {
        r = r * base12;
    }
    document.getElementById('salida12').innerHTML = `La potencia calculada es ${r}`;
}


let array13 = [];
function ej13() {
    let entrada13 = parseInt(prompt());
    array13.push(entrada13);
    if (entrada13 == 0) {
        let total13 = array13.reduce((a, b) => a + b, 0);
        document.getElementById('salida13').innerHTML = `let array13 = [${array13}] <br> Total ${total13}`;
    } else {
        document.getElementById('salida13').innerHTML = `let array13 = [${array13}]`;
    }

}


let array14 = [];
function ej14() {
    let entrada14 = parseInt(prompt());
    array14.push(entrada14);
    if (entrada14 == 0) {
        array14.pop(array14);
        let total14 = array14.reduce((a, b) => a + b, 0);
        let media14 = total14 / array14.length;
        document.getElementById('salida14').innerHTML = `let array14 = [${array14}] <br> Media ${media14}`;
    } else {
        document.getElementById('salida14').innerHTML = `let array14 = [${array14}]`;
    }

}

let array15 = [];
function ej15() {
    let entrada15 = parseInt(ej15a.value);
    array15.push(entrada15);
    if (entrada15 == 0) {
        array15.pop(array15);
        let max15 = array15.sort(function (a, b) { return b - a })[0];
        let min15 = array15.sort(function (a, b) { return a - b })[0];
        document.getElementById('salida15').innerHTML = `let array15 = [${array15}] <br> Minimo ${min15} <br> Maximo ${max15}`;
    } else {
        document.getElementById('salida15').innerHTML = `let array15 = [${array15}]`;
    }
}

function ej16(){
    let entrada16a = ej16a.value;
    let entrada16b = ej16b.value;
    while (entrada16b < entrada16a){
        entrada16b + entrada16b;
        document.getElementById('salida16').innerHTML = `234ww`;

    }
}

/*for(let i=0;i<entrada16a; i+entrada16b){
        if (i == )
        console.log(i);
    }*/