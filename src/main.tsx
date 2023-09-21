import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Center, ChakraProvider, CircularProgress } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>

      <ChakraProvider>
        <Suspense fallback={<Center ><CircularProgress isIndeterminate color='green.300' /></Center>}>
          <App />
        </Suspense>
      </ChakraProvider>


    </BrowserRouter>

  </React.StrictMode>,
)
