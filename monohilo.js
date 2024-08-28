console.log("Hola Mundo!");

let i = 0;
setInterval(function() {
    console.log(i);
    i++;
    if (i === 5)
    {
        var a = 3 + z;
    }
}, 1000);

/* 

Una de las desventajas que posee Node al ser monohilo es que al detectarse un error todo el hilo de ejecución
es cancelado. Esto quiere decir que es muy importante la comprobanción de errores antes de la ejecución. 

*/

console.log("Segunda instrucción");