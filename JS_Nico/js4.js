function cambiarEnlace(){
    let enlace=document.getElementById('nacional');
    enlace.innerHTML="El Pais";
    enlace.href="http://www.elpaís.es";
    enlace.target="_blank";
    alert(enlace.href);


/*-------------------------------------*/
var lista = [];
function adding() {
    let elemento = id_elemento.value;
    lista.push(elemento);
}

function showing() {
    let parr = document.createElement('p');
    parr.setAttribute('id', "magicdavi");
    document.body.appendChild(parr);
    magicdavi.innerHTML = lista;

    
}