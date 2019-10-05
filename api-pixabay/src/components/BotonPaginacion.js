import React, { Fragment } from 'react'

// Icons
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

export const BotonPaginacionAnterior = ({ paginaActual, paginaAnterior }) => {
  return (
    <Fragment>
      {paginaActual === 1 ? null : (
        <button
          onClick={paginaAnterior}
          type="button"
          className="button is-dark is-rounded"
        >
          <MdArrowBack />
        </button>
      )}
    </Fragment>
  )
}

export const BotonPaginacionSiguiente = ({
  paginaActual,
  totalPaginas,
  paginaSiguiente,
}) => {
  return (
    <Fragment>
      {paginaActual === totalPaginas ? null : (
        <button
          onClick={paginaSiguiente}
          type="button"
          className="button is-dark is-rounded"
        >
          <MdArrowForward />
        </button>
      )}
    </Fragment>
  )
}
