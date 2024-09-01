//inizializa la base de datos 
//incluir la biblioteca 

const sqlite3 = require('sqlite3').verbose();
let db= new sqlite3.Database('./mydb.squlite',(err) =>
{
    if(err)
    console.log(err.message);
    console.log('Se creo una base de datos')
});

let query = "CREATE TABLE IF NOT EXISTS fruta \
            (id INTEGER PRIMARY KEY AUTOINCREMENT,\
            name TEXT,\
            sci_name TEXT,\
            random_fact TEXT);"

db.run(query, (err)=>
                {
                    if(err)
                    {
                        console.log(err.message);
                    }
                    else{
                        console.log('tabla creada')
                    }  
                    
                }
)

query = "INSERT INTO fruta (name, sci_name, random_fact) VALUES \
        ('manzana','malus domestica','Existe mas de 7500 variedades'),\
        ('pera','pyrus comunits','Tardan semanas en madurar y ser comestibles'),\
        ('naranja','citrus sinensis','su nombre viene del sanscrito naranja');";


db.run(query, (err)=>
{
    if(err)
        console.log(err.message);
    console.log('Registro existoso')
}
)    

db.close();

