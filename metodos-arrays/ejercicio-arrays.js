let inventario = [];
inventario.push({nombre: "reloj",categoria:"Electronica",precio:2200});
inventario.push({nombre: "anillo inteligente",categoria:"ropa",precio:40000});
inventario.push({nombre: "silla",categoria:"hogar",precio:30000});
inventario.push({nombre: "notebook",categoria:"Electronica",precio:60000});

console.log("Los productos");
inventario.forEach(producto => console.log(`nombre: ${producto.nombre} categoria: ${producto.categoria} precio: ${producto.precio}`));

let productosElectronica = inventario.filter(producto => producto.nombre);
console.log("nombres de los productos de electronicos");
console.log(productosElectronica);
 
let nombresProductos = inventario.map(producto =>producto.nombre);
console.log("nombres de todos los productos");
console.log(nombresProductos);