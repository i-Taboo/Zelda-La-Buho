
    function muestramenu(e) {
    if (document.getElementById("menu").classList.contains("oculto")) {
        document.getElementById("menu").classList.remove("oculto");
        e.classList.add("rotado");
    }else{
        document.getElementById("menu").classList.add("oculto");
        e.classList.remove("rotado");
    }

    }

    function removermenu(e) {
        document.getElementById("menu").classList.add("oculto");
        document.getElementById("cmdMenu").classList.remove("rotado");

        }
    