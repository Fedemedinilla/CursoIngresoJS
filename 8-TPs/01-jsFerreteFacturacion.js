/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio01;
	var precio02;
	var precio03;
	var resultado;

	precio01=txtIdPrecioUno.value;
	precio02=txtIdPrecioDos.value;
	precio03=txtIdPrecioTres.value;

	precio01=parseInt(precio01);
	precio02=parseInt(precio02);
	precio03=parseInt(precio03);

	resultado= precio01 + precio02 + precio03;
	alert("Su total a pagar es: " + resultado + " Que tenga un buen dia!");
}
function Promedio () 
{
	var precio01;
	var precio02;
	var precio03;
	var resultado;

	precio01=txtIdPrecioUno.value;
	precio02=txtIdPrecioDos.value;
	precio03=txtIdPrecioTres.value;

	precio01=parseInt(precio01);
	precio02=parseInt(precio02);
	precio03=parseInt(precio03);

	resultado= (precio01 + precio02 + precio03) / 3;

	alert("Su total a pagar es: " + resultado + " Que tenga un buen dia!");	
}
function PrecioFinal () 
{
	var precio01;
	var precio02;
	var precio03;
	var resultadoPre;
	var masIva;
	var resultadoPost;

	precio01=txtIdPrecioUno.value;
	precio02=txtIdPrecioDos.value;
	precio03=txtIdPrecioTres.value;

	precio01=parseInt(precio01);
	precio02=parseInt(precio02);
	precio03=parseInt(precio03);


	resultadoPre= precio01 + precio02 + precio03;
	masIva= (21 * resultadoPre) / 100;
	resultadoPost= resultadoPre + masIva;


	alert("Su total a pagar es: " + resultadoPost + ". Que tenga un buen dia!");	
}