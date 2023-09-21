import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Center, ChakraProvider, CircularProgress } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Web3Provider } from './components/Web3Provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Web3Provider>
        <ChakraProvider>
          <Suspense fallback={<Center ><CircularProgress isIndeterminate color='green.300' /></Center>}>
            <App />
          </Suspense>
        </ChakraProvider>

      </Web3Provider>


    </BrowserRouter>

  </React.StrictMode>,
)
