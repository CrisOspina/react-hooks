import { useState, useEffect } from 'react'

export function useApi() {
  const [busqueda, setBusqueda] = useState('')
  const [img, setImg] = useState([])

  const [paginaActual, setPaginaActual] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(1)

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === '') return

      const imgPorPagina = 30
      const key = process.env.REACT_APP_KEY

      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imgPorPagina}&page=${paginaActual}`

      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      setImg(resultado.hits)

      // calcular el total de paginas
      const calularTotalPaginas = Math.ceil(resultado.totalHits / imgPorPagina)
      setTotalPaginas(calularTotalPaginas)

      // Mover la pantalla hacia la parte superior
      const hero = document.querySelector('.hero')
      hero.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    consultarApi()
  }, [busqueda, paginaActual])

  return {
    img,
    paginaActual,
    totalPaginas,
    setBusqueda,
    setPaginaActual,
  }
}
