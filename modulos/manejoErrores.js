function segundaFuncion()
{
    seRompe();
}

function seRompe()
{
    return 3 + z;
}

function seRompeAsincrona()
{
    setTimeout(function() {
        try
        {
            return 3 + z;
        } catch (err)
        {
            console.error("Algo salió mal...");
        }
    });
}

// función síncrona

try 
{
    segundaFuncion();
} catch (err)
{
    console.error("Algo salió mal...");
}