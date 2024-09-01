function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 1500);
    });
}

function adios() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Adios.");
            resolve();
        }, 1500);
    });
}

console.log("Iniciando el proceso...");

hola("Leonel")
    .then(() => adios())
    .then(() => {
        console.log("Terminado el proceso.");
    })
    .catch(err => console.log(err));