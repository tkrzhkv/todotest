import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import store, { persistor } from "./states/store"
import App from "./App"
import theme from "@theme/index"
import { PersistGate } from "redux-persist/integration/react"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
)
