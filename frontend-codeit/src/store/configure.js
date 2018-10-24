import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import modules from './modules'

const configure = () => {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const middleware = [ReduxThunk]
  const store = createStore(
    modules,
    compose(
      applyMiddleware(...middleware),
      devTools
    )
  )
  return store
}

export default configure