async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 1500);
    });
}

async function adios() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Adios.");
            resolve();
        }, 1500);
    });
}

async function main()
{
    let nombre = await hola("Leonel");
    await adios();
}

main();