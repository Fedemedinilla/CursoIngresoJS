/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var veinticincoPorciento;
	var resultado;

	sueldo=txtIdImporte.value;
	sueldo=parseInt(sueldo);

	veinticincoPorciento=(25 * sueldo) / 100;

	resultado= sueldo - veinticincoPorciento;
	txtIdResultado.value=resultado;

	resultado=parseInt(resultado);
}
