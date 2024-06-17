import React from 'react'
import Router from './Router/Router'
import { store } from './Store/store'
import { Provider } from 'react-redux'


const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
