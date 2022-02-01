
export function addProducto(id, nombre, image, cantidad) {
    const array=[]
    const datosExistentes = localStorage.getItem('listaProductos')

    if(datosExistentes === null){
        array.push({id, nombre, image, cantidad})
        localStorage.setItem('listaProductos', JSON.stringify(array))
    }else{
        const auxarray =  datosExistentes
        const parse = JSON.parse(auxarray)
        //console.log(parse)
        array.push(...parse, {id, nombre, image, cantidad})
        //console.log('otro array')
        //console.log(array)
        localStorage.clear()
        localStorage.setItem('listaProductos', JSON.stringify(array))
    }
}

export function consProductos(){
    const array = localStorage.getItem('listaProductos')
    return JSON.parse(array)
}

export function deleteProducto(){
    
} 
