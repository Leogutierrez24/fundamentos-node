const fs = require('fs');

function read(url, callback)
{
    fs.readFile(url, (err, data) => {
        callback(data.toString());
    });
}

function write(url, content, callback)
{
    fs.writeFile(url, content, (err) => {
        if (err)
        {
            console.error("Ocurrió un error: " + err);
        } 
        else 
        {
            console.log("Escrito correctamente.");
        }
    });
}

function deleteFile(url, callback)
{
    fs.unlink(url, callback);
}

// read(__dirname + "/archivo.txt", console.log);
// write(__dirname + "/archivo.txt", "Soy un archivo nuevo", console.log);
// deleteFile();