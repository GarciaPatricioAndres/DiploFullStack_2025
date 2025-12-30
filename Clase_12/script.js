let precio = prompt('Ingrese el precio');

if (precio && !isNaN(precio) && Number(precio) > 0){
	Precio = Number(Precio);
    let iva = precio * 0.21;
	alert('El precio del iva es ' + iva + '% y el precio final es $' + iva + ' + $' + precio + ' = $' + (precio+iva));
}
else{
    alert('Numero no valido');
}