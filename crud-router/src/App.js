import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Components
import { Header, Container } from './components/index'

// Pages
import {
  Productos,
  AgregarProducto,
  EditarProducto,
  Producto,
} from './pages/index'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/productos/nuevo" component={AgregarProducto} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/productos/:id" component={Producto} />
          <Route
            exact
            path="/productos/editar/:id"
            component={EditarProducto}
          />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}
