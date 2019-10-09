import { useState, useEffect } from 'react'
import axios from 'axios'

export const useGET = () => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://localhost:4000/restaurant`

      const resultado = await axios.get(url)
      setProductos(resultado.data)
    }
    consultarAPI()
  }, [])

  return { productos }
}
