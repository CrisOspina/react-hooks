import axios from 'axios'

export const usePOST = (nombrePlatillo, precioPlatillo, categoria) => {
  const insertarRegistro = async e => {
    // e.preventDefault()
    try {
      const url = `http://localhost:4000/restaurant`
      const resultado = await axios.post(url, {
        nombrePlatillo,
        precioPlatillo,
        categoria,
      })
      console.log(resultado)
    } catch (error) {
      console.log(error.message)
    }
  }

  return { onSubmit: insertarRegistro }
}
