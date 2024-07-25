import "./css/sec9.css";
import { start } from "./JS/index.js";
import { useEffect  } from "react";



const Section9 = () => {

    useEffect(() => {
        start()
    },[])
    return (
        <div class="section-7">
            <h1 class="section-7-header">VIRTUAL TOUR</h1>
            <div class="section-7-video-wrapper">
                <div class="video-adress">2550 Innovation Dr, Auburn Hills, MI 48326</div>
                <video class="video-2">
                    <source src="video/Cafe Kafica.mp4" />
                </video>
                <div class="button-video">
                    <i class="fa-solid fa-play video-play"></i>
                </div>
            </div>
        </div>
    )
}

export default Section9;