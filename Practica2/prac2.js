const logregBox = document.querySelector('.logreg-box')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')

registerLink.addEventListener('click',() => {
    logregBox.classList.add('active')
})

loginLink.addEventListener('click',() => {
    logregBox.classList.remove('active')
})

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

function submitData()
{
    
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    token = "code37";
    container = document.getElementById("login-container");

    if(validateForm(username,password))
    {
        //ocultar el container y poner un relojito 
        container.style.display = 'none';
        var img = document.createElement("h1");
        var img2 = document.createElement("img");
        img.innerHTML = "⌛";
        img2.src = "clock.jpg";
        document.body.appendChild(img);
        document.body.appendChild(img2);
        //preparar la form en formato form-data
        var formdata = new FormData();
        formdata.append("user",username);
        formdata.append("pass",password);//hay que hashear el pass
        formdata.append("token",token);

        //hacer una peticion http y procesarla como promises
        fetch("http://monsterballgo.com/api/login.php", {
            method:'POST',
            body: formdata
        }).then ( response =>response.json()).
            then(data => {
                //codigo en caso de exito 
                //quitar el indicador 
                img.style.display = 'none';
                img2.style.display = 'none';
                alert("retorno la promesa")
            }).
            catch(error => {
                console.error("Error"+error);
        });

    }

}

function submitRegister(){

    user_name=document.getElementById("user_name").value;
    password = document.getElementById("password").value;
    id = document.getElementById("id").value;
    email = document.getElementById("email").value;
    first_name = document.getElementById("first_name").value;
    last_name  = document.getElementById("last_name").value;
    file= document.getElementById("fileInput").value;
    token = "code37";
    container2 = document.getElementById("register-container");


    if (validateRegistrationForm(username, password)) {
        // Ocultar el container y poner un indicador de carga
        container.style.display = 'none';
        let img = document.createElement("h1");
        let img2 = document.createElement("img");
        img.innerHTML = "⌛"; // Indicador de carga como texto
        img2.src = "loading.gif"; // Asumiendo que tienes esta imagen para mostrar como indicador de carga
        document.body.appendChild(img);
        document.body.appendChild(img2);

        // Hashear la contraseña antes de enviar
        hashPassword(password).then(hashedPassword => {
            // Preparar los datos en formato FormData para el registro
            let formdata = new FormData();
            formdata.append("user", user_name);
            formdata.append("pass", hashedPassword); // Usar la contraseña hasheada
            formdata.append("id", id);
            formdata.append("email", email);
            formdata.append("firtname", first_name);
            formdata.append("lastname", last_name);
            formdata.append("file",file);
            formdata.append("token",token);

            // Hacer una petición HTTP para el registro y procesarla como promesas
            fetch("http://monsterballgo.com/api/register.php", {
                method: 'POST',
                body: formdata
            })
            .then(response => response.json())
            .then(data => {
                // Código en caso de éxito
                // Quitar el indicador de carga
                img.style.display = 'none';
                img2.style.display = 'none';
                // Mostrar alguna notificación o actualizar la UI según los datos de respuesta
                alert("Registro exitoso");
            })
            .catch(error => {
                console.error("Error: " + error);
                // Manejar adecuadamente el error, quizás mostrando un mensaje al usuario
            });
        });
    }
}

// Asumiendo que tienes una función `validateRegistrationForm` para validar los datos del formulario de registro
function validateRegistrationForm(username, password) {
    // Aquí deberías implementar las validaciones específicas para tu formulario de registro
    // Por ejemplo, verificar que el username y password no estén vacíos, que el password cumpla con ciertas reglas, etc.
    return true; // Solo para efectos de este ejemplo
}

document.getElementById('fileInput').addEventListener('change', function(event) {
    var fileName = event.target.files[0].name;
    document.getElementById('fileInputLabel').textContent = fileName;
});


document.getElementById('fileInput').addEventListener('change', function(event) {
    var output = document.getElementById('preview');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
        URL.revokeObjectURL(output.src) // Libera el objeto URL después de cargar la imagen
    }
});




