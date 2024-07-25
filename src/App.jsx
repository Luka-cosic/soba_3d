import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Soba from "./pages/Soba/Soba";
import "./index.css";
import Kreiraj from "./pages/Kreiraj/Kreiraj";

function App() {


  return (
    <>
      <Routes>
        
        <Route path="/" element={<Soba className={"soba"} />} />
        <Route path="/kreiraj" element={<Kreiraj />} />
        

      </Routes>
    </>
  )
}

export default App
