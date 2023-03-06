var nombre=prompt("Ingrese su nombre:")

function saludo(elnombre){
    if (elnombre==""){
        alert("No se ingreso un nombre")
        var nombre=prompt("Ingrese su nombre:")
        saludo(nombre)
    }
    else{
        console.log(elnombre)
        alert("Bienvenido a nuestro sitio "+ elnombre)
    }
}

saludo(nombre)