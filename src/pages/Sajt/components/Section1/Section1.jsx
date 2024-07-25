
import { start } from "./JS/index.js";
import { useEffect } from "react";
import style from "./css/sec1.module.css";
import FirstLine from "./FirstLine/FirstLine";
import Navbar from "./Navbar/Navbar";
import SecondLine from "./SecondLine/SecondLine";

const Section1 = ()=>{

    useEffect(()=>{
        start()
    },[]);
    return(
        <div className={`${style.top_fixed} top-fixed`} >
            <FirstLine />
            <SecondLine />
            <Navbar />
        </div>
    )
}

export default Section1;