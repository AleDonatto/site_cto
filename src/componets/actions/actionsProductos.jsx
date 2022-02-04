
export function addProducto(id, nombre, image, cantidad, precio) {
    const array=[]
    const datosExistentes = localStorage.getItem('listaProductos')

    if(datosExistentes === null){
        array.push({id, nombre, image, cantidad, precio})
        localStorage.setItem('listaProductos', JSON.stringify(array))
    }else{
        const auxarray =  datosExistentes
        const parse = JSON.parse(auxarray)
        
        array.push(...parse, {id, nombre, image, cantidad, precio})
        
        localStorage.clear()
        localStorage.setItem('listaProductos', JSON.stringify(array))
    }
}

export function consProductos(){
    const local = localStorage.getItem('listaProductos')
    const array = local === null ? [] : JSON.parse(local) 

    return array
}

export function deleteProducto(index){
    const local = localStorage.getItem('listaProductos')
    const datos = JSON.parse(local)
    const array = []

    array.push(...datos) 
    array.splice(index, 1)

    localStorage.clear()
    localStorage.setItem('listaProductos', JSON.stringify(array))
} 

export function enviarListaProductos(nombre, telefono){
    const local = localStorage.getItem('listaProductos')

    const datos = {
        name: nombre,
        numeroTel: telefono ,
        productos:  JSON.parse(local)
    }

    //const api = await fetch(`http://admin.ctodelpacifico.com/api/getProducto/`, datos)

    return 'Se envio tu compra, en breve se pondran en contacto al numero que proporcionaste'
    //.then( response => response.json())
    /*.then(resultData => {
        setproducto(resultData.producto)
        setmoreProductos(resultData.moreProductos)
    })*/
}

export function clearStorage(){
    localStorage.clear()
}
