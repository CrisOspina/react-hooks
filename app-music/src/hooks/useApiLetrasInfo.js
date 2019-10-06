import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useApiLetras() {
  // States API LETRAS
  const [artista, setArtista] = useState('')
  const [letra, setLetra] = useState([])
  const [nombreCancion, setNombreCancion] = useState('')
  const [resultApiLetras, setResultApiLetras] = useState(false)
  const [loadLetra, setLoadLetra] = useState(false)

  // States API INFORMACIÓN ARTISTA
  const [info, setInfo] = useState({})
  const [loadInfo, setLoadInfo] = useState(false)

  const consultarAPILetra = async busqueda => {
    const { cancion, artista } = busqueda
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
    setLoadLetra(true)
    await axios(url)
      .then(data => {
        // actualizar info
        setLetra(data.data.lyrics)
        setNombreCancion(cancion)
        setArtista(artista)
        setResultApiLetras(false)
        setLoadLetra(false)
      })
      .catch(error => {
        console.log(error.message)
        setResultApiLetras(true)
        setLoadLetra(false)
      })
  }

  useEffect(() => {
    const consultarAPIInfo = async () => {
      if (artista) {
        const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`
        setLoadInfo(true)
        await axios(url)
          .then(data => {
            // Actualizar info
            setInfo(data.data.artists[0])
            setLoadInfo(false)
          })
          .catch(error => {
            console.log(error.message)
            setLoadInfo(false)
          })
      }
    }
    consultarAPIInfo()
  }, [artista])

  return {
    artista,
    letra,
    nombreCancion,
    resultApiLetras,
    loadLetra,
    consultarAPILetra,
    info,
    loadInfo,
  }
}
