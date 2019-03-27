import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer, change, touch } from 'redux-form'

import HelloForm from './HelloForm'

const reducer = combineReducers({
  form: reduxFormReducer,
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const root = document.getElementById('root')

window.Store = store

window.ReduxFormActions = {
  change,
  touch,
}

if (root) {
  ReactDOM.render(
    <Provider store={window.Store}>
      <HelloForm />
    </Provider>,
    root
  )
}
