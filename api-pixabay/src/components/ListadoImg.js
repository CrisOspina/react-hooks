import React, { Fragment } from 'react'
import Img from './Img'

const ListadoImg = ({ img }) => {
  return (
    <Fragment>
      <div className="columns is-multiline">
        {img.map(imagen => (
          <Img imagen={imagen} key={imagen.id} />
        ))}
      </div>
      <br />
      <br />
    </Fragment>
  )
}

export default ListadoImg
