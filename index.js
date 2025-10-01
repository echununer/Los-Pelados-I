import {
  seleccionarCantidadGustos,
  ingresarCliente,
  seleccionarProducto,
  seleccionarSabores,
} from "./dataEntry.js";

// Cargar sabores y productos
// COMPLETEN USTEDES
import fs from"fs"
let sabores;
sabores= JSON.parse(fs.readFileSync("data/sabores.json", "utf-8"))

let productos;
productos= JSON.parse(fs.readFileSync("data/productos.json", "utf-8"))

// Ingresar cliente
let cliente = ingresarCliente();
// Elegir producto
let producto = seleccionarProducto(productos);
// Elegir cantidad de gustos
let gustos = seleccionarCantidadGustos(producto.maxGustos);
// Elegir sabores
let saboresElegidos = seleccionarSabores(sabores, gustos);

// Guardar pedido
// COMPLETEN USTEDES

let pedido= JSON.parse(fs.readFileSync("data/pedidos.json", "utf-8"));

let Nuevocliente = {
  cliente,
  producto,
  saboresElegidos
}

pedido.push(Nuevocliente)

let pedidosJSON = JSON.stringify(pedido, null, 2);
fs.writeFileSync("data/pedidos.json", pedidosJSON);
