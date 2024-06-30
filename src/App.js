import React from 'react'
import Router from './Router/Router'
import { store } from './Store/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router />
    </Provider>
  )
}

export default App
