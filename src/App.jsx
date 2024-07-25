import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Soba from "./pages/Soba/Soba";
import "./index.css";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Soba className={"app"} />} />
      </Routes>
    </>
  )
}

export default App
