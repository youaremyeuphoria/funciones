//LISTA DE PRODUCTOS, OBJETO
const listaProductos = 
[{
    producto: 'Rubores',
    id: 1,
    colores: [
        'Rosa',
        'Dorado',
        'Naranja'
    ],
    marcas: [
       'Mac',
       'Revlon',
       'Maybelline',
       'Rimmel'
    ],
    precio: 1500,
    cantidadTotal: 50
},

{
    producto: 'Máscara de Pestañas',
    id: 2,
    colores: [
        'Negro',
        'Marrón',
        'Azul'
    ],
    marcas: [
       'Tejar',
       'Revlon',
       'Loreal',
       'Rimmel'
    ],
    precio: 2400,
    cantidadTotal: 151 
},

{
    producto: 'Sombras',
    id: 3,
    colores: [
        'Verde',
        'Marrón',
        'Violeta',
        'Rosa',
        'Azul'
    ],
    marcas: [
       'Pink 21',
       'Revlon',
       'Mac',
       'Rimmel'
    ],
    precio: 5000,
    cantidadTotal: 278
},

{
    producto: 'Iluminadores',
    id: 4,
    colores: [
        'Bronce',
        'Blanco',
        'Rosa'
    ],
    marcas: [
       'Maybelline',
       'Revlon',
       'Loreal',
       'Huda Beauty',
       'Rimmel'
    ],
    precio: 860,
    cantidadTotal: 36 
},

{
    producto: 'Labiales',
    id: 5,
    colores: [
        'Rojo',
        'Marrón',
        'Rosa'
    ],
    marcas: [
       'Mac',
       'Revlon',
       'Loreal',
       'Maybelline',
       'Rimmel'
    ],
    precio: 1760,
    cantidadTotal: 71 
}]

// BOOLEANO ITERACION
let iteracion = true;

do {
    const opciones = Number(prompt('Ingrese una opción del 1 al 5: \n1) Agregar producto\n2) Eliminar producto\n3) Modificar producto\n4) Mostrar todos los productos\n5) Salir'));

    switch(opciones){

        // AGREGO EL PRODUCTO
        case 1:
            agregarProductos();
            iteracion = false;
        break;

        // ELIMINAR UN PRODUCTO
        case 2:
            function eliminarProducto () {
                const id = ingresarId();
                const exist = existId(id);
                const index = exist && getIndex(id) || null;
                
                if (exist){
                    listaProductos.splice(index, 1); 
                    productos();
                }
            }
            productos();
            eliminarProducto();
            iteracion = false;
            break;

        // MODIFICAR UN PRODUCTO
        case 3:
            const id = ingresarId();
            const exist = existId(id);
            let datos;
            if (exist) {
                datos = pedirDatos(id);
                listaProductos[datos.id - 1] = datos;
                productos();
                iteracion = false;
            }else{ 
                alert('Ya existe ese producto');
                const opciones = Number(prompt('Ingrese una opción del 1 al 4: '));
            }
        break;

        // ME MUESTRA LOS PRODUCTOS QUE TENGO ☺
        case 4:
            productos();
            iteracion = false;
        break;
        
        // SALIR - FINALIZAR
        case 5:
            salir()
        break;

        default: 
            prompt('Error, ingrese una opción del 1 al 5\n1) Agregar producto\n2) Eliminar producto\n3) Modificar producto\n4) Mostrar todos los productos\n5) Salir)')

    }

}

while(iteracion);