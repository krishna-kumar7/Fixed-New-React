import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import StateExample2 from './lec2612/statemanupulation'
//import MyComponent from './lec2412/comp1'
//import Xyz from './lec2412/component1'
//import PropExmp from './lec3112/propscomps3'
//import anonymus from './lec3112/anonymus'
import DefaultProps1 from './lec3112/defoultProp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <DefaultProps1 />
   <br/>
   <DefaultProps1 var1={true} />
   <br/>
   <DefaultProps1 var2={"yellow"} />
   <br/>
   <DefaultProps1 var3={"New Text"} />
   <br/>
   <DefaultProps1 var1={true} var2={"red"} />
   <br/>
   <DefaultProps1 var1={true} var2={"blue"} var3={"abc"}/>
   <br/>


    
  </StrictMode>,
)
