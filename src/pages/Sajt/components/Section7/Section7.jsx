import "./css/sec7.css";
import { useEffect } from "react";
import { start } from "./JS/index.js";

const Section7 = () => {


    useEffect(()=>{
        start()
    },[]);
    return (
        <div class="section-5">
            <div class="section-5-picture-wrapper picture-1">
                <div class="picture-heading">
                    <h3 class="picture-name">CRAFT COCTAILS</h3>
                    <button class="picture-button">OUR MENU</button>
                </div>
                <img src="pictures/full-1.jpg" class="section-5-picture" />
            </div>
            <div class="section-5-picture-wrapper picture-2">
                <div class="picture-heading">
                    <h3 class="picture-name">NEW AMERICAN CUISINE</h3>
                    <button class="picture-button">OUR MENU</button>
                </div>
                <img src="pictures/full-2.jpg" class="section-5-picture" />
            </div>
            <div class="section-5-picture-wrapper picture-3">
                <div class="picture-heading">
                    <h3 class="picture-name">THE HUB STADIUM</h3>
                </div>
                <img src="pictures/full-3.jpg" class="section-5-picture" />
            </div>
            <div class="pagination">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            <div class="play-pouse-picture volume">
                <i class="fa-solid fa-pause"></i>
                <i class="fa-solid fa-play"></i>
            </div>
        </div>
    )
}

export default Section7;