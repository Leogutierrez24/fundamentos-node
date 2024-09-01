const fs = require('fs');

// then-catch

function readTC()
{
    fs.promises.readFile("file/Url", "utf-8")
    .then(data => { console.log(data) })
    .catch(err => { console.log("Error: " + err) });
}

readTC();

// async await

async function readAA()
{
    try
    {
        const data = await fs.promises.readFile("file/url", "utf-8");
        console.log(data);
    } 
    catch (err)
    {
        console.log("Error: " + err);
    }
}

readAA();