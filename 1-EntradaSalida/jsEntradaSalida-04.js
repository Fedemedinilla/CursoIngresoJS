/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
var nombre=prompt("Ingrese su nombre:","Ej: Carlos")

function mostrar()
{
	txtIdNombre.value=nombre;
	alert(txtIdNombre.value);
}

