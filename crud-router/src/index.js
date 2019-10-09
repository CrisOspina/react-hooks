import React from 'react'
import ReactDOM from 'react-dom'

// Frontend
import 'bulma/css/bulma.css'

// Components
import App from './App'

// SW
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
