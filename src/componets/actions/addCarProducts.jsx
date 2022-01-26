
export const addCarProducts = (id, nombre, image, cantidad) => ({
    type: 'agregar',
    payload: {
        id,
        nombre, 
        image,
        cantidad
    }
})