function sopas(e) {
    if (document.getElementById("img-light").classList.contains("oculto")){
        document.getElementById("img-light").classList.remove("oculto");
        document.getElementById("img-light").classList.add("mostrarimagen");
    }
    
}
function cerrarimagen(e){
    if (document.getElementById("img-light").classList.contains("mostrarimagen")){
        document.getElementById("img-light").classList.remove("mostrarimagen");
        document.getElementById("img-light").classList.add("oculto");
    }
}