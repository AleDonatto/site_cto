
export function addProducto(id, image, nombre, cantidad) {
    const array=[]
    array.push({id, nombre, image, cantidad})

    localStorage.setItem('listaProductos', JSON.stringify(array))
}

export function consProductos(){
    localStorage.getItem('listaProductos')
}

const consCantidadArray = () => {

}