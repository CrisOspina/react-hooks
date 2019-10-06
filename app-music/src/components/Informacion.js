import React, { Fragment, useState } from 'react'

// Iconos
import { FiFacebook, FiTwitter, FiVolume2 } from 'react-icons/fi'

const Informacion = ({ info, artista }) => {
  const [lenguaje, setLenguaje] = useState(false)

  const changeIdioma = () => (lenguaje ? setLenguaje(false) : setLenguaje(true))

  const {
    strArtistThumb,
    strArtist,
    strGenre,
    intBornYear,
    strBiographyES,
    strFacebook,
    strTwitter,
    strLastFMChart,
    strBiographyEN,
  } = info

  if (Object.keys(info).length === 0) return null

  const redesSociales = () => (
    <div className="title is-4">
      {strArtist}
      <div className="has-text-right">
        <a
          href={`https://${strFacebook}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFacebook />
        </a>
        {'  '}
        <a
          href={`https://${strTwitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter />
        </a>
        {'  '}
        <a href={strLastFMChart} target="_blank" rel="noopener noreferrer">
          <FiVolume2 />
        </a>
      </div>
    </div>
  )

  const logoArtista = () => (
    <figure className="image is-4by3">
      <img src={strArtistThumb} alt="Logo artista" />
    </figure>
  )

  const botonCambiarLenguajeBio = () => (
    <Fragment>
      <div className="container has-text-centered">
        <button onClick={changeIdioma} className="button is-rounded">
          Español/Ingles
        </button>
        <br />
        <br />
      </div>
      {!lenguaje ? (
        <div className="content">{strBiographyES}</div>
      ) : (
        <div className="content">{strBiographyEN}</div>
      )}
    </Fragment>
  )

  const tituloArtista = () => (
    <h2 className="subtitle has-text-centered">
      Información {artista.toUpperCase()}
    </h2>
  )

  return (
    <Fragment>
      {tituloArtista()}
      <div className="card">
        <div className="card-image">{logoArtista()}</div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              {redesSociales()}
              <p className="subtitle is-6">{strGenre}</p>
              <p className="subtitle is-6">{intBornYear}</p>
            </div>
          </div>
          {botonCambiarLenguajeBio()}
        </div>
      </div>
    </Fragment>
  )
}

export default Informacion
