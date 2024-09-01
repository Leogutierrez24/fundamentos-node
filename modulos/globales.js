let i = 0;
let intervalo = setInterval(function () {
    console.log("Hola");
    if (i === 3)
    {
        clearInterval(intervalo);
    }
    i++;
});

// setImmediate();

console.table([1, 2, 4, 6]);