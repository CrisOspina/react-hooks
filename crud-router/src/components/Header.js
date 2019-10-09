import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => (
  <nav
    className="navbar is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link to="/" className="navbar-item">
          〰 CRUD & React-Router 〰
        </Link>
        <Link to="/productos" className="navbar-item">
          Productos
        </Link>
        <Link to="/productos/nuevo" className="navbar-item">
          Nuevo producto
        </Link>
      </div>
    </div>
  </nav>
)
