import React, { Fragment } from 'react'

const Cancion = ({ letra, nombreCancion }) => {
  if (letra.length === 0) return null

  return (
    <Fragment>
      <h2 className="subtitle has-text-centered">
        Letra {nombreCancion.toUpperCase()}
      </h2>
      <p className="letra has-text-centered">{letra}</p>
    </Fragment>
  )
}

export default Cancion
