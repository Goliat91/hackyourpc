// El array debe estár fuera de las funciones
var numeros = [];
var palabras =[];


function ejSplice(){
    let posicionSplice = ej2c.value; // Esto es la entrada splice
    let cantidadSplice = ej2d.value; // Esto es la entrada splice
    let sustitutoSplice = ej2e.value // Est es la entrada del splice
    numeros.splice(posicionSplice, cantidadSplice);
    document.getElementById('salida2').innerHTML = `numeros.splice(posicion, valor);`;
    for(let i=0;i<numeros.length;i++){
        document.getElementById('salida2b').innerHTML = `var numeros = [${numeros}];`;

    }
}



function ejLength(){
    document.getElementById('salida2').innerHTML = `$&nbsp{numeros.length}`;
    document.getElementById('salida2b').innerHTML = `var numeros = [${numeros}] lengt = ${numeros.length}`;

}

function ejReverse(){
    numeros.reverse(function(a, b){return a - b});
    document.getElementById('salida2').innerHTML = `numeros.reverse(function(a, b){return a - b});`;
    for(let i=0;i<numeros.length;i++){
        document.getElementById('salida2b').innerHTML = `var numeros = [${numeros}];`;

    }
}

function ejSort(){ //Ordenados de mayor a menor
    numeros.sort(function(a, b){return a - b});
    document.getElementById('salida2').innerHTML = `numeros.sort(function(a, b){return a - b});`;
    for(let i=0;i<numeros.length;i++){
        document.getElementById('salida2b').innerHTML = `var numeros = [${numeros}];`;
    }
}


function ejShift(){
    // SHIFT elimina el primero
    numeros.shift(numeros);// Elimina el último
    document.getElementById('salida2').innerHTML = `numeros.length ${numeros.length}`;
    for(let i=0;i<numeros.length;i++){
        document.getElementById('salida2b').innerHTML = `var numeros = [${numeros}]`
    }
}
function ejUnshift(){
        // UNSHIFT Añadir al principio
        let entradaCabeza = ej2b.value;
        numeros.unshift(entradaCabeza);
        document.getElementById('salida2').innerHTML = `numeros.unshift(entradaCabeza)`;
        for(let i=0;i<numeros.length;i++){
            document.getElementById('salida2b').innerHTML = `var numeros = [${numeros}]`
        }
}

function ejPush(){
    // PUSH añadir al final
    let entradaCola = ej2a.value; // Esto es la entrada getEbyid
    numeros.push(entradaCola);
    document.getElementById('salida2').innerHTML = `numeros.push(entradaCola);`;
    for(let i=0;i<numeros.length;i++){
        document.getElementById('salida2b').innerHTML = `var numeros = [${numeros}]`
    }
}

function ejPop(){
    // POP Eliminar el último
    numeros.pop(numeros);// Elimina el último
    document.getElementById('salida2').innerHTML = `numeros.pop(numeros)`;
    for(let i=0;i<numeros.length;i++){
        document.getElementById('salida2b').innerHTML = `var numeros = [${numeros}]`
    }
}