import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import Parent from './Component/Parent'
import Child from './Component/Child'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  // <StrictMode>
  <>
   {/* <App /> */}
   <Parent/>
   <Child/>
  
  </>
  // </StrictMode>,
)
