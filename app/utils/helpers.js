export const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha)

    const opciones = {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }

    return fechaNueva.toLocaleDateString('en-US', opciones)
}