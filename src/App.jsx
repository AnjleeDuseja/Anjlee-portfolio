import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import { Outlet } from "react-router"


function App() {
 

  return (
   <div>
   <Header/>
   <Outlet/>
   <Footer/>
   </div>
  )
}

export default App
