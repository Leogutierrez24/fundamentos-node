function soyAsincrona(miCallback) {
    setTimeout(function () {
        console.log("Estoy siendo asíncrona.");
        miCallback();
    }, 1000);
}

function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log("Hola " + nombre);
        miCallback();
    }, 2000);
}

function adios(nombre, miCallback) {
    setTimeout(function () {
        console.log("Adios");
        miCallback();
    });
}

console.log("Iniciando proceso...");

/*soyAsincrona(function()
    {
        console.log("Terminando proceso...");    
    }
);*/

hola("Leonel", function () {
    adios("Carlos", function () {
        console.log("terminando proceso...");
    });
}
);