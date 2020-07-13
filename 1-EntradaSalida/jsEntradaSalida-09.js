/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var diezPorciento;
	var resultado;

	sueldo=txtIdSueldo.value;
	sueldo=parseInt(sueldo);

	diezPorciento=(10 * sueldo) / 100;

	resultado= sueldo + diezPorciento;
	txtIdResultado.value=resultado;

	resultado=parseInt(resultado);

}
