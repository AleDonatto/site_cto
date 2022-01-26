
export const AddCarProducts = (id, nombre, image, cantidad) => ({
    type: 'agregar',
    payload: {
        id,
        nombre, 
        image,
        cantidad
    }
})