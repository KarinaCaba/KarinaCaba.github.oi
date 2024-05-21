const express = require('express');
//conectar a la base de datos 
const sqlite3 = require('sqlite3').verbose();
let db= new sqlite3.Database('./mydb.squlite',(err) =>
{
    if(err)
    console.log(err.message);
    console.log('Conectando a la base')
});

const app = express();
const port = 8000;
//para poder recibir body como x-url form-enconded
app.use(express.urlencoded({extended:true}))

//ofrecer contenido a la carperta public
app.use(express.static('public'))



//endpoint para manejar el form de agregar la fruta 
app.post('/submit', async (req, res) => {
    try {
        
        // Obtener los valores del cuerpo de la solicitud
        const { name, sci_name, random_fact } = req.body;
       
 
        // Consulta SQL con placeholders
        const query = "INSERT INTO fruta (name, sci_name, random_fact) VALUES (?, ?, ?)";


        // Ejecutar la consulta con los valores proporcionados por el usuario
        db.run(query, [name, sci_name, random_fact], function(err) {
            if (err) {
                console.error("Error al insertar los datos:", err);
                res.status(500).json({ message: 'Error al insertar los datos' });
                return;
            }
            
            console.log("Datos insertados correctamente");
            
            
            res.json({ message: 'Fruta agregada' });
        });
    } catch (error) {
        console.error("Error al insertar los datos:", error);
        res.status(500).json({ message: 'Error al insertar los datos' });
    }
});



//endpoint para el dato rendom de una sola fruta random


app.get('/',(req,res) =>
{
    let query = "SELECT * FROM fruta ORDER BY RANDOM() LIMIT 1"
    db.all(query,(err,rows)=>
    {
        if(err)
        {
            console.log(err.message);
            res.json({error:err.message});
        }
        else
        {
            res.json(rows);
            //combierte rows en json
            //json es nativo de java 
        }
    }
    )
})

//resourcer catch all
app.use((req,res,next) =>
    {
        res.status(404).sendFile(__dirname+'/public/notfound.html')
    }
)

app.listen (port, ()=>

{
    console.log("iniciando servidor  ")
})