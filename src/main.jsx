import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StateExample2 from './lec2612/statemanupulation'
//import MyComponent from './lec2412/comp1'
//import Xyz from './lec2412/component1'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <StateExample2 />
    {/* <MyComponent />
    <Xyz /> */}
    
  </StrictMode>,
)
