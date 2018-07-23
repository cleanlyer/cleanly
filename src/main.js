import React , { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import AppContainer from './components'
import reducer from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import immutableTransform from 'redux-persist-transform-immutable'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage
}

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

function configureStore(initialState){
    const enhancer = composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )

    return createStore(persistReducer(persistConfig, reducer), initialState, enhancer)
}

const store = configureStore({})

const persistor = persistStore(store)

class App extends Component {
    render(){ 
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppContainer />
                </PersistGate>
            </Provider>
        )
    }
}

export default App