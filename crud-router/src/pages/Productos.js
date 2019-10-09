import React, { Fragment } from 'react'

// Components
import { ProductoLista } from '../components/index'

// Hooks
import { useGET } from '../hooks/useGET'

export const Productos = () => {
  const { productos } = useGET()
  return (
    <Fragment>
      <h1 className="title has-text-centered"> Productos </h1>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <ProductoLista key={producto.id} producto={producto} />
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}
