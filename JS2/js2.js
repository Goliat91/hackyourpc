
// El array debe estár fuera de las funciones

var palabras =[];








/*-----------------Ejercicio4---------------------------*/
var numerosEj3 = [];
function ejSort(){ //Ordenados de mayor a menor
    numeros.sort(function(a, b){return a - b});
    document.getElementById('salida2').innerHTML = `numeros.sort(function(a, b){return a - b});`;
    for(let i=0;i<numeros.length;i++){
        document.getElementById('salida2b').innerHTML = `var numeros = [${numeros}];`;
    }
}

function ej3(){
    // PUSH añadir al final
    let entrada1 = ej3a.value; // Esto es la entrada getEbyid
    let entrada2 = ej3b.value; // Esto es la entrada getEbyid
    let entrada3 = ej3c.value; // Esto es la entrada getEbyid
    numerosEj3.push(entrada1, entrada2, entrada3);
    for(let i=0;i<numerosEj3.length;i++){
        document.getElementById('salida3').innerHTML = `var numeros = [${numerosEj3.sort(function(a, b){return a - b})}]`
    }
}



function ej4() {
    let valor = parseInt(document.getElementById('ej4a').value);
    const elementoSalida = document.getElementById("salida4")
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

function ej5() {
    for (let i = 100; i < 200; i++) {
        if (i % 2 != 0) {

            salida5.innerHTML = `F12 para ver console.log()`;
            console.log(i);
        }
    }
}


function ej6() {
    for (var i = 1; i < 101; i++) {
        if (i % 3 == 0) {

            salida6.innerHTML = `
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































function ej1(){

    let numero = parseInt(document.getElementById('ej1a').value);

    if (numero >1  && numero<10){
    document.getElementById('salida1').innerHTML =`El número ${numero} se encuentra entre 1 y 10` ;

    }else{
        document.getElementById('salida1').innerHTML =`El número ${numero} está fuera del rango 1 y 10` ;
    }
}





