import { start } from "./JS/index.js";
import { useEffect  } from "react";
import "./css/sec4.css";

const Section4 = ()=>{

    useEffect(()=>{
        start()
    },[]);
    return(
        <div class="section-2">
                <div class="picture-wrapper-1 picture-wrapper">
                    <img src="pictures/ax.jpg" class="section-2-picture sec-2-pic-1" />
                </div>
                <div class="about-us section-2-text">
                    <div class="text-holder">
                        <h1 class="about-us-header about-us-header-1">ABOUT US</h1>
                        <div class="about-us-paragraph-1">
                            <h2 class="about-us-subtitle about-us-subtitle-1">THE HOME OF AXE THROWING AND FOOTBALL
                                BOWLING</h2>
                            <p class="about-us-paragraph paragraph-1">The HUB Stadium Features: 6 Ice Curling Lanes, 17
                                axe throwing
                                stalls,
                                5
                                Big Axe Throwing Stalls, Four Private Event Rooms, Four Full Bars, Equipped with Bottoms
                                Up
                                Draft
                                Beer System, Craft Cocktails, New American Cuisine, and an upstairs Lounge.</p>
                        </div>
                        <button class="about-us-button">READ MORE</button>
                    </div>
                </div>
                <div class="events section-2-text">
                    <div class="events-holder">
                        <h1 class="events-header">EVENTS</h1>
                        <div class="events-text-holder">
                            <h2 class="events-subtitle">BOOK YOUR NEXT EVENT WITH US!</h2>
                            <p class="events-paragraph">Need the space for your event? Search no more we have a perfect
                                place
                                for
                                you!</p>
                        </div>
                        <button class="events-button">EVENTS</button>
                    </div>
                </div>
                <div class="picture-wrapper-2 picture-wrapper">
                    <img src="pictures/curling.jpg" class="section-2-picture event-picture" />
                </div>
            </div>
    )
}

export default Section4;