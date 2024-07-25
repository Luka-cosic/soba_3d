import "./css/sec6.css";
import {start} from "./JS/index.js";
import { useEffect } from "react";
const Section6 = () => {

    useEffect(() => {
        start()
    },[]);
    return (
        <div class="section-4">
            <div class="section-4-picture-wrapper">
                <img src="pictures/full.jpg" class="section-4-picture" />
            </div>
            <div class="section-4-text-wrapper">
                <h1 class="section-4-header">OUR MENU</h1>
                <h4 class="section-4-subtitle">Great Quality, Great Service, Fun & Great Hospitality!</h4>
                <button class="section-4-button">OUR MENU</button>
            </div>
        </div>
    )
}

export default Section6;