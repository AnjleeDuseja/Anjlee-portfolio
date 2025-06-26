import { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import { Outlet } from "react-router"
import Loader from "./Components/Loader";


function App() {
 
    const [loading, setLoading] = useState(true);
useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // adjust as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {loading? <Loader/> :
   <div>
   <Header/>
   <Outlet/>
   <Footer/>
   </div>
   }
   </>
  )
}

export default App
