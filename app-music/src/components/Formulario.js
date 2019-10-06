import React, { useState } from 'react'
import SectionForm from './SectionForm'
import Error from './Error'

const Formulario = ({ consultarAPILetra }) => {
  const [error, setError] = useState()
  const [busqueda, setBusqueda] = useState({
    artista: '',
    cancion: '',
  })

  const actualizarState = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    })
  }

  // Submit al form
  const enviarInformacion = e => {
    e.preventDefault()

    if (busqueda.artista === '' || busqueda.cancion === '') {
      return setError(true)
    } else {
      consultarAPILetra(busqueda)
      setError(false)
    }
  }

  const inputArtista = () => (
    <div className="field">
      <label className="label">
        Artista / Banda {busqueda.artista === '' ? null : '✔'}
      </label>
      <div className="control">
        <input
          onChange={actualizarState}
          className="input"
          type="text"
          name="artista"
          placeholder="Ejemplo: Metallica"
        />
      </div>
      {busqueda.artista !== '' ? null : (
        <p className="help">Digita el nombre del artista o banda </p>
      )}
    </div>
  )

  const inputCancion = () => (
    <div className="field">
      <label className="label">
        Canción {busqueda.cancion === '' ? null : '✔'}
      </label>
      <div className="control">
        <input
          onChange={actualizarState}
          className="input"
          type="text"
          name="cancion"
          placeholder="Ejemplo: The Unforgiven"
        />
      </div>
      {busqueda.cancion !== '' ? null : (
        <p className="help">Digita la canción de la canción</p>
      )}
    </div>
  )

  const botonBuscar = () => (
    <div className="field">
      <label className="label">°</label>
      <div className="control">
        <input
          type="submit"
          className="button is-light is-normal is-fullwidth is-inverted is-outlined"
          value="Buscar"
        />
      </div>
    </div>
  )

  const mensajeError = () =>
    !error ? null : (
      <Error mensaje="¡Agrega un término de búsqueda!, HUMAN 🤦‍♀️" />
    )

  return (
    <SectionForm>
      <form onSubmit={enviarInformacion}>
        <div className="columns">
          <div className="column is-4">{inputArtista()}</div>
          <div className="column is-4">{inputCancion()}</div>
          <div className="column is-4">{botonBuscar()}</div>
        </div>
      </form>
      <br />
      {mensajeError()}
    </SectionForm>
  )
}

export default Formulario
