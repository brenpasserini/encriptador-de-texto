const textoArea1 = document.querySelector(".textArea1");
const textoArea2 = document.querySelector(".textArea2");

function btnencriptar(){
    const textoEncriptado = encriptar(textoArea1.value);
    textoArea2.value = textoEncriptado;
    document.getElementById("dissapear").style.display= "none";
    document.querySelector(".textArea2").style.display= "block";
    document.getElementById("btn_copybtn").style.display= "block";
}

function encriptar(StringEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringEncriptar = StringEncriptar.toLowerCase();
    for (let i=0; i< matrizCodigo.length; i++){
        if (StringEncriptar.includes(matrizCodigo[i][0])){
            StringEncriptar = StringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
        textoArea1.value = "";
        textoArea1.focus();
    }
    return StringEncriptar;
}
var button = document.querySelector("button");
button.onclick = btnencriptar;

function btndesencriptar(){
    const textoDesencriptado = desencriptar(textoArea1.value);
    textoArea2.value = textoDesencriptado;
}

function desencriptar(StringDesencriptar){
    let matrizDesencriptar = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    StringDesencriptar = StringDesencriptar.toLowerCase();
    for (let i=0; i< matrizDesencriptar.length; i++){
        if (StringDesencriptar.includes(matrizDesencriptar[i][0])){
            StringDesencriptar = StringDesencriptar.replaceAll(matrizDesencriptar[i][0],matrizDesencriptar[i][1])
        }
        textoArea1.value = "";
        textoArea1.focus();
    }
    return StringDesencriptar;
}

function btnCopyText(){
    const textoCopiado = document.querySelector(".textArea2");
    textoCopiado.select();
    document.execCommand('copy');
}

/*Falta function para mayúsculas y minúsculas PROXIMAMENTE*/