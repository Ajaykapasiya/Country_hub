import { createBrowserRouter } from "react-router-dom";
import "./App.css"
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";


const router = createBrowserRouter(
{
  path:"/",
  element:<Home/>
},

{
  path:"country",
  element:<Country/>
},

{
  path:"contact",
  element:<Contact/>
},

{
  path:"about",
  element:<About/>
},
)

const App = () =>{
  return <h1>Hello React Project</h1>
}

export default App;