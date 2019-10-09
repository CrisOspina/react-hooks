import React from 'react'
import { Link } from 'react-router-dom'

export const ProductoLista = ({ producto }) => {
  const eliminarProducto = id => {
    console.log('Eliminar', id)
  }

  return (
    <tr data-categoria={producto.categoria}>
      <td>{producto.nombrePlatillo}</td>
      <td>{producto.precioPlatillo}</td>
      <td>
        <Link to={`/productos/editar/${producto.id}`}>Editar</Link>
      </td>
      <td>
        <button
          className="button"
          onClick={() => eliminarProducto(producto.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}
