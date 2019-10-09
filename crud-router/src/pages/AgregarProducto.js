import React, { Fragment } from 'react'

// Components
import { FormIngresar } from '../components/index'

export const AgregarProducto = () => {
  return (
    <Fragment>
      <h1 className="title has-text-centered"> Agregar productos </h1>
      <section class="hero is-light">
        <div class="hero-body">
          <FormIngresar />
        </div>
      </section>
    </Fragment>
  )
}
