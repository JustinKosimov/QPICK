import {Routes, Route } from "react-router-dom"


import './App.scss'
import Home from "./components/pages/home/home"
import InnerPage from "./components/pages/inner-page/inner-page"
import SectionUsloviya from "./components/section-usloviya/usloviya"
import UsloviyaPage from "./components/pages/usloviya-page/usloviya-page"
import SectionKontakti from "./components/section-kontakti/kontakti"
import KontaktiPage from "./components/pages/home/kontakti-page/kontakti-page"
import SectionOformlenya from "./components/section-oformlenya/oformlenya"
import SctionKarzina from "./components/section-karzina/karzina"



function App() {
  

  return (
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/inner-page" element={<InnerPage/>}/>
<Route path="/usloviya-page" element={<UsloviyaPage/>}/>
<Route path="/kontakti-page" element={<KontaktiPage/>}/>
<Route path="/karzina-page" element={<SctionKarzina/>}/>
{/* <Route path="/oformlenya-page" element={<SctionOformlenya/>}/> */}
    </Routes>

  )
}

export default App
