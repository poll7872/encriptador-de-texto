let btnEncriptar = document.getElementById('btn_encriptar');
btnEncriptar.onclick = mostrarEncriptado;

let btnDesencriptado = document.getElementById('btn_desencriptar');
btnDesencriptado.onclick = mostrarDesencriptado;


//ENCRIPTAR TEXTO
function encriptar(str) {
    str = str.replace(/e/igm,"enter");
    str = str.replace(/i/igm, "imes");
    str = str.replace(/a/igm, "ai");
    str = str.replace(/o/igm, "ober");
    str = str.replace(/u/igm, "ufat");
    return str;
}

function mostrarEncriptado(){
    let textoEnciptar = document.getElementById('texto_encriptar').value.toLowerCase();
    let resultado = encriptar(textoEnciptar);
    document.getElementById("desaparacer").style.display = "none";
    document.getElementById("texto_desencriptado").innerHTML = resultado;
}

//DESENCRIPTAR TEXTO
function desencriptar(str) {
    str = str.replace(/enter/igm, "e");
    str = str.replace(/imes/igm, "i");
    str = str.replace(/ai/igm, "a");
    str = str.replace(/ober/igm, "o");
    str = str.replace(/ufat/igm, "u");
    return str;
}

function mostrarDesencriptado(){
    let textoDesncriptar = document.getElementById('texto_encriptar').value.toLowerCase();
    let resultadoDos = desencriptar(textoDesncriptar);
    document.getElementById("desaparacer").style.display = "none";
    document.getElementById("texto_desencriptado").innerHTML = resultadoDos;
}

//FUNCIÓN BOTON COPY
function copy() {
    let copyText = document.getElementById('texto_desencriptado');
    copyText.select();
    document.execCommand("copy");
}
  
document.querySelector("#copy").addEventListener("click", copy);






