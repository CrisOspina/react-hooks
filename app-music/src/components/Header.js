import React from 'react'

const Header = () => {
  return (
    <header className="hero is-dark">
      <div className="hero-body">
        <div className="container ">
          <legend className="text-center">
            <h1 className="title has-text-centered has-text-weight-normal has-text-dark">
              Buscador de letras de canciones{' '}
              <span role="img" aria-label="emoji">
                🤘
              </span>
            </h1>
          </legend>
        </div>
      </div>
    </header>
  )
}

export default Header
