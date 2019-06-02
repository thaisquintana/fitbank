import React from 'react'
import Routes from './routes/routes'

import store from './store'
import { Provider } from 'react-redux'

import '../src/assets/styles/main.scss'
import Header from './components/header/header'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="grid-container">
      <Provider store={store}>
        <Header />
        <Routes />
        <Footer />
      </Provider>
    </div>
  )
}

export default App
