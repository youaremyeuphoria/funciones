function productos() {
    console.log(listaProductos);
}

function pedirDatos (id = listaProductos.length +1) {
    const nombreProducto = prompt('Ingrese nombre del producto nuevo: ');
    const precioProducto = prompt('Ingrese el precio del producto nuevo: ');
    return {id, nombreProducto, precioProducto}
}

function agregarProductos () {
    const nuevosDatos = pedirDatos();  
    listaProductos.push(nuevosDatos);
    productos();
            
}

function ingresarId () {
    const id = Number(prompt('Ingrese el numero de ID'));
    return id;
}

function existId (id) {
    let exist = listaProductos.some (listaProductos => listaProductos.id === id);
    return exist;
}

function salir (){
    window.close()
}

const getIndex = (id) => listaProductos.indexOf(
    listaProductos.find(
        listaProductos => listaProductos.id === id));
