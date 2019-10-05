import React from 'react'

// Components
import Buscador from './components/Buscador'
import ListadoImg from './components/ListadoImg'
import {
  BotonPaginacionAnterior,
  BotonPaginacionSiguiente,
} from './components/BotonPaginacion'

// Hooks
import { useApi } from './hooks/useApi'

function App() {
  const {
    img,
    paginaActual,
    totalPaginas,
    setBusqueda,
    setPaginaActual,
  } = useApi()

  const paginaAnterior = () => {
    let nuevaPaginaActual = paginaActual - 1
    setPaginaActual(nuevaPaginaActual)
  }

  const paginaSiguiente = () => {
    let nuevaPaginaActual = paginaActual + 1
    setPaginaActual(nuevaPaginaActual)
  }

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <Buscador
            setBusqueda={setBusqueda}
            paginaActual={paginaActual}
            totalPaginas={totalPaginas}
          />
          <ListadoImg img={img} />

          <div className="columns is-centered">
            <div
              className="column is-half is-pulled-center"
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <BotonPaginacionAnterior
                paginaAnterior={paginaAnterior}
                paginaActual={paginaActual}
              />

              <BotonPaginacionSiguiente
                paginaSiguiente={paginaSiguiente}
                paginaActual={paginaActual}
                totalPaginas={totalPaginas}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
