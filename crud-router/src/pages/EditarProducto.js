import React, { Fragment, useState, useEffect } from 'react'

import { RowForm, Error } from '../components/index'

// Hooks
import { useGET } from '../hooks/useGET'

export const EditarProducto = ({ match }) => {
  const [error] = useState(false)
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState()
  const [categoria, setCategoria] = useState()

  // const nombre = useRef(nom)

  const idProducto = parseInt(match.params.id)

  const { productos } = useGET()

  useEffect(() => {
    productos.map(producto => {
      if (idProducto === producto.id) {
        setNombre(producto.nombrePlatillo)
        setPrecio(producto.precioPlatillo)
        setCategoria(producto.categoria)
      }
      return { nombre, precio, categoria }
    })
  })

  const editarRegistro = () => {}

  return (
    <Fragment>
      {error ? <Error mensaje={'Todos los campos son obligatorios'} /> : null}
      <h1 className="title has-text-centered"> Editar producto </h1>
      <RowForm>
        <form onSubmit={editarRegistro}>
          <div class="field">
            <label class="label">Nombre platillo {'✔'}</label>
            <div class="control">
              <input class="input" type="text" defaultValue={nombre} />
            </div>
          </div>

          <div class="field">
            <label class="label">Precio {'✔'}</label>
            <div class="control">
              <input
                class="input"
                type="number"
                placeholder="$20000"
                defaultValue={precio}
              />
            </div>
          </div>
          <div>
            <label class="label has-text-centered">Categoria {'✔'}</label>
            <label class="control has-text-centered">
              <label class="radio">
                <input
                  type="radio"
                  name="foobar"
                  value="postres"
                  defaultChecked={categoria === 'postres' ? categoria : null}
                />
                Postres
              </label>
              <label class="radio">
                <input
                  type="radio"
                  name="foobar"
                  value="bebida"
                  defaultChecked={categoria === 'bebida' ? categoria : null}
                />
                Bebida
              </label>
              <label class="radio">
                <input
                  type="radio"
                  name="foobar"
                  value="cortes"
                  defaultChecked={categoria === 'cortes' ? categoria : null}
                />
                Cortes veggie
              </label>
              <label class="radio">
                <input
                  type="radio"
                  name="foobar"
                  value="ensalada"
                  defaultChecked={categoria === 'ensalada' ? categoria : null}
                />
                Ensalada
              </label>
            </label>
          </div>
          <div className="field">
            <div className="control">
              <input
                type="submit"
                className="button is-light is-normal is-fullwidth is-inverted is-outlined"
                value="Editar"
              />
            </div>
          </div>
        </form>
      </RowForm>
    </Fragment>
  )
}
