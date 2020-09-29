//variables de entrada
let nombreCliente = "carlos";
let telefonoCliente = "34532";
let idCliente = "1017265716";
let direccionCliente = "kr 98 # 70 d 90 int 9702";

let productoSeleccionado = "torta de chocolate";
let tiendaSeleccionada = "tortas Deli S.A"
let cantidad = 1;
let precioProducto = 30000;

const COSTOENVIO = 8500;
let tieneDescuento = true;
const DESCUENTO = 0.1;
let totalCompra;

//calcular el total
if(tieneDescuento){
    totalCompra = ((cantidad*precioProducto)*(1-DESCUENTO))+COSTOENVIO;
}else{
    totalCompra = (cantidad * precioProducto)+COSTOENVIO;
}


console.log(`Señor ${nombreCliente} su total a pagar es ${totalCompra}`);