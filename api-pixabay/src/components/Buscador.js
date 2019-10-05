import React, { useState, Fragment } from 'react'
import Error from './Error'

export default function Buscador({ setBusqueda, paginaActual, totalPaginas }) {
  const [terminoBusqueda, setTerminoBusqueda] = useState('')
  const [error, setError] = useState(false)

  const buscarImagen = e => {
    e.preventDefault()

    // Validar
    if (terminoBusqueda === '') return setError(true)

    // Enviar el termino hacia el componente principal
    setError(false)

    setBusqueda(terminoBusqueda)
  }

  return (
    <Fragment>
      <form onSubmit={buscarImagen}>
        <h1 className="title has-text-centered has-text-weight-normal has-text-danger is-pulled-center">
          Free photos - Pixebay
        </h1>
        <div className="columns">
          <div className="column column is-offset-3 is-3">
            <div className="tags has-addons is-pulled-right">
              <span className="tag">Página</span>
              <span className="tag is-success">{paginaActual}</span>
            </div>
          </div>
          <div className="column is-3">
            <div className="tags has-addons">
              <span className="tag">Total</span>
              <span className="tag is-warning">{totalPaginas}</span>
            </div>
          </div>
          <br />
        </div>

        {/* fila 2 */}
        <div className="columns">
          {/* columna 1 */}
          <div className="column is-offset-3 is-3">
            <div className="field">
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Busca una imagen, ejemplo: café..."
                  onChange={e => setTerminoBusqueda(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="column is-3">
            <div className="field">
              <div className="control">
                <input
                  type="submit"
                  className="button is-light is-normal is-fullwidth is-inverted is-outlined"
                  value="Buscar"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Si el usuario no digita nada, avisar */}
        {error ? (
          <Error mensaje="¡Agrega un término de búsqueda!, HUMAN 🤦‍♀️" />
        ) : null}
      </form>
      <br />
      <br />
    </Fragment>
  )
}
