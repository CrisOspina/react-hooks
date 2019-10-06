import React from 'react'

export const LoadingLetra = () => {
  return (
    <div className="columns">
      <div className="column has-text-centered">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export const LoadingInformacion = () => {
  return (
    <div className="columns">
      <div className="column has-text-centered">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
