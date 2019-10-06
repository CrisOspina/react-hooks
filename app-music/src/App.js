import React, { Fragment } from 'react'

// Components
import Formulario from './components/Formulario'
import Cancion from './components/Cancion'
import LetraAndInfo from './components/LetraAndInfo'
import Informacion from './components/Informacion'
import Header from './components/Header'
import Error from './components/Error'
import { LoadingLetra, LoadingInformacion } from './components/Loading'

// Hook de las APIS 'letras e información de artistas'
import useApiLetrasInfo from './hooks/useApiLetrasInfo'

function App() {
  const {
    artista,
    letra,
    nombreCancion,
    resultApiLetras,
    loadLetra,
    consultarAPILetra,
    info,
    loadInfo,
  } = useApiLetrasInfo()

  const validationLoading = () => {
    return (
      <LetraAndInfo>
        <div className="column is-6">
          {loadInfo ? (
            <LoadingInformacion />
          ) : (
            <Informacion info={info} artista={artista} />
          )}
        </div>
        <div className="column is-6">
          {loadLetra ? (
            <LoadingLetra />
          ) : (
            <Cancion letra={letra} nombreCancion={nombreCancion} />
          )}
        </div>
      </LetraAndInfo>
    )
  }

  const validationBusqueda = () => {
    if (resultApiLetras) {
      return <Error mensaje="No se encontró nada 🤦‍♀️, verifica nuevamente " />
    }
  }

  return (
    <Fragment>
      <Header />
      <Formulario consultarAPILetra={consultarAPILetra} />
      {validationBusqueda()}
      {validationLoading()}
    </Fragment>
  )
}

export default App
