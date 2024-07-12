/*GANANCIA ARTÍCULOS
Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se
desea hacer un procesamiento que determine la ganancia total que tendría la empresa al
venderlos todos, y también el código del artículo con mayor precio de venta.
El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10,
precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 ($25, $35), 111 ($50, $70),
333 ($40, $50), 444 ($80, $100) y 222 ($5, $10)
Ganancia Total: 85$
Código del artículo con mayor precio de venta: 444*/
import CL_articulos from "./CL_articulos.js";
import CL_tienda from "./CL_tienda.js";
let articulos=new CL_articulos();
let artc1=new CL_articulos(888, 10, 15);
let artc2=new CL_articulos(777, 20, 25);
let artc3=new CL_articulos(999, 15, 25);
let artc4=new CL_articulos(666, 25, 35);
let artc5=new CL_articulos(111, 50, 70);
let artc6=new CL_articulos(333, 40, 50);
let artc7=new CL_articulos(444, 80, 100);
let artc8=new CL_articulos(222, 5, 10);

let tienda = new CL_tienda();
tienda.procesar(artc1);
tienda.procesar(artc2);
tienda.procesar(artc3);
tienda.procesar(artc4);
tienda.procesar(artc5);
tienda.procesar(artc6);
tienda.procesar(artc7);
tienda.procesar(artc8);

let salida=document.getElementById("salida");
salida.innerHTML=`
Ganancia Total: ${tienda.totalganancia()}$
<br>Código del artículo con mayor precio de venta: ${tienda.devlovermayor()}

`