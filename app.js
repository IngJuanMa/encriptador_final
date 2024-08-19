function desencriptar() {
    
    var texto = document.getElementById("input_texto").value.toLowerCase();
    var muneco = document.getElementById("detective");
    

    var textoDesCifrado = texto
        .replace(/enter/img,"e") 
        .replace(/imes/img, "i")
        .replace(/ai/img, "a")
        .replace(/ober/img, "o")
        .replace(/ufat/img, "u");
    
    if (document.getElementById("input_texto").value.length != 0){
        document.getElementById("texto_encriptado").textContent = textoDesCifrado;
        document.getElementById("texto_titulo").textContent = "Su Texto fue desencriptado con éxito:";
        muneco.src = "./assets/detective_tres.png";
        document.getElementById("boton_copiar2").style.display = "inline";
        

    } else {
        alert ("ingresa un texto"); 
    }
    
    return textoDesCifrado;
    
} 

function encriptar() {
    
    var texto = document.getElementById("input_texto").value.toLowerCase();
    var muneco = document.getElementById("detective");
    //alert(texto);

    var textoCifrado = texto
        .replace(/e/img,"enter")
        .replace(/i/img, "imes")
        .replace(/a/img, "ai")
        .replace(/o/img, "ober")
        .replace(/u/img, "ufat");
        
    
    if (document.getElementById("input_texto").value.length != 0){
        document.getElementById("texto_encriptado").textContent = textoCifrado;
        document.getElementById("texto_titulo").textContent = "Su Texto fue encriptado con éxito:";
        muneco.src = "./assets/detective_dos.png";
        document.getElementById("boton_copiar").style.display = "inline";
    //alert(textoCifrado);

    } else {
        alert ("ingresa un texto"); 
    }
    
   return textoCifrado;

} 

function copiar(){
    var contenido = document.getElementById("texto_encriptado").value;
    //alert(contenido);

    if (contenido !== undefined && contenido !== null && contenido !== "") {
    //Copiar el contenido al portapapeles utilizando la API moderna
    navigator.clipboard.writeText(contenido)
        .then(() => {
         alert("Contenido copiado al portapapeles!");
        })
        .catch(err => {
            console.error("Error al copiar:", err);
        });  
   }else{
        alert("No hay contenido para copiar.");
    }
}


