import React, { Fragment, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import Swal from 'sweetalert2'

// Components
import { RowForm, Error } from './index'

// Hooks
import { useFormInput } from '../hooks/useFormInput'
// import { usePOST } from '../hooks/usePOST'

const FormIngresar = ({ history }) => {
  const [error, setError] = useState(false)
  const nombrePlatillo = useFormInput('')
  const precioPlatillo = useFormInput('')
  const categoria = useFormInput('')

  const Nombre = () => {
    return (
      <div class="field">
        <label class="label">
          Nombre platillo {nombrePlatillo.value === '' ? '👁' : '✔'}
        </label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Veggie"
            {...nombrePlatillo}
          />
        </div>
      </div>
    )
  }

  const Precio = () => {
    return (
      <div class="field">
        <label class="label">
          Precio {precioPlatillo.value === '' ? '👁' : '✔'}
        </label>
        <div class="control">
          <input
            class="input"
            type="number"
            placeholder="$20000"
            {...precioPlatillo}
          />
        </div>
      </div>
    )
  }

  const Categoria = () => {
    return (
      <Fragment>
        <label class="label has-text-centered">
          Categoria {categoria.value === '' ? '👁' : '✔'}
        </label>
        <div class="control has-text-centered">
          <label class="radio">
            <input type="radio" name="foobar" {...categoria} value="postres" />
            Postres
          </label>
          <label class="radio">
            <input type="radio" name="foobar" {...categoria} value="bebida" />
            Bebida
          </label>
          <label class="radio">
            <input type="radio" name="foobar" {...categoria} value="cortes" />
            Cortes veggie
          </label>
          <label class="radio">
            <input type="radio" name="foobar" {...categoria} value="ensalada" />
            Ensalada
          </label>
        </div>
      </Fragment>
    )
  }

  const botonRegistrar = () => {
    return (
      <div className="field">
        <div className="control">
          <input
            type="submit"
            className="button is-light is-normal is-fullwidth is-inverted is-outlined"
            value="Ingresar"
          />
        </div>
      </div>
    )
  }

  const insertarRegistro = async e => {
    e.preventDefault()
    if (
      nombrePlatillo.value === '' ||
      precioPlatillo.value === '' ||
      categoria.value === ''
    ) {
      return setError(true)
    }
    setError(false)

    try {
      const url = `http://localhost:4000/restaurant`
      const resultado = await axios.post(url, {
        nombrePlatillo: nombrePlatillo.value,
        precioPlatillo: precioPlatillo.value,
        categoria: categoria.value,
      })
      if (resultado.status === 201) {
        Swal.fire({
          type: 'success',
          title: 'Producto creado',
          text: 'Se inserto correctamente',
        })
      }
    } catch (error) {
      console.log(error.message)
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Hubo un error, verifica',
      })
    }

    // Redirigir al usuario
    history.push('/productos')
  }

  return (
    <Fragment>
      {error ? <Error mensaje={'Todos los campos son obligatorios'} /> : null}
      <form onSubmit={insertarRegistro}>
        {/* nombre */}
        <RowForm>{Nombre()}</RowForm>

        {/* precio */}
        <RowForm>{Precio()}</RowForm>

        {/* categoria */}
        <RowForm>{Categoria()}</RowForm>

        {/* boton registro */}
        <RowForm>{botonRegistrar()}</RowForm>
      </form>
    </Fragment>
  )
}

export default withRouter(FormIngresar)
