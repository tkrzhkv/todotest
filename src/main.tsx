import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import store, { persistor } from './states/store'
import theme from '@theme/index'
import { PersistGate } from 'redux-persist/integration/react'
import App from './app'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Provider store={store}>
        <PersistGate loading={undefined} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
)
