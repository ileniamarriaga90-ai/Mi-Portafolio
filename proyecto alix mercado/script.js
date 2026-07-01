window.addEventListener("load", function () {

    console.log("Slider cargado");

    const fotos = [
        "imagenes/ga1.jpeg",
        "imagenes/ga2.jpeg",
        "imagenes/ga3.jpeg",
        "imagenes/ga4.jpeg",
        "imagenes/ga5.jpeg",
        "imagenes/ga6.jpeg",
        "imagenes/ga7.jpeg",
        "imagenes/ga8.jpeg",
        "imagenes/ga9.jpeg",
        "imagenes/ga10.jpeg",
        "imagenes/ga11.jpeg",
        "imagenes/ga12.jpeg",
        "imagenes/ga13.jpeg"
    ];

    let indice = 0;

    const imagen = document.getElementById("slider-img");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const actual = document.getElementById("actual");
    const total = document.getElementById("total");

    if (!imagen || !prev || !next) {
        console.error("Faltan elementos del slider");
        return;
    }

    total.textContent = fotos.length;

    function mostrarImagen() {
        imagen.src = fotos[indice];
        actual.textContent = indice + 1;
    }

    next.addEventListener("click", function () {
        indice = (indice + 1) % fotos.length;
        mostrarImagen();
    });

    prev.addEventListener("click", function () {
        indice = (indice - 1 + fotos.length) % fotos.length;
        mostrarImagen();
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") next.click();
        if (e.key === "ArrowLeft") prev.click();
    });

    mostrarImagen();

});
/*banner*/
const texto = "Hacemos tus eventos inolvidables";
let i = 0;

function escribir(){

    if(i < texto.length){
        document.getElementById("texto-animado").textContent += texto.charAt(i);
        i++;
        setTimeout(escribir, 80);
    }

}

window.addEventListener("load", escribir);