import "./css/sec12.css";
import { start } from "./JS/index.js";
import { useEffect } from "react";

const Section12 = () => {

    useEffect(() => {
        start()
    },[]);
    
    return (
        <div class="section-10">
            <h1 class="section-10-header">REVIEWS</h1>
            <div class="section-10-move">
                <div class="move-card-wrapper">
                    <div class="move-card">
                        <h3 class="move-header">REVIEW BY GOOGLE</h3>
                        <div class="stars">
                            <div class="person">
                                <p class="star-person">Lamar Parker:</p>
                            </div>
                            <div class="star-wrapper">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div class="section-10-text-holder">
                            <i class="fa-solid fa-quote-left quote"></i>
                            <p class="sec-10-describe">Google Translate is a multilingual neural machine translation
                                service developed by
                                Google to translate text, documents and websites from one language into another. It
                                offers a website interface, a mobile app for Android and iOS, and an API that helps
                                developers build browser extensions and software applications.</p>
                            <i class="fa-solid fa-quote-right quote"></i>
                        </div>
                    </div>

                    <div class="move-card">
                        <h3 class="move-header">DRUGA</h3>
                        <div class="stars">
                            <div class="person">
                                <p class="star-person">Lamar Parker:</p>
                            </div>
                            <div class="star-wrapper">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div class="section-10-text-holder">
                            <i class="fa-solid fa-quote-left quote"></i>
                            <p class="sec-10-describe">Google Translate is a multilingual neural machine translation
                                service developed by
                                Google to translate text, documents and websites from one language into another. It
                                offers a website interface, a mobile app for Android and iOS, and an API that helps
                                developers build browser extensions and software applications.</p>
                            <i class="fa-solid fa-quote-right quote"></i>
                        </div>
                    </div>

                    <div class="move-card">
                        <h3 class="move-header">TRECA</h3>
                        <div class="stars">
                            <div class="person">
                                <p class="star-person">Lamar Parker:</p>
                            </div>
                            <div class="star-wrapper">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div class="section-10-text-holder">
                            <i class="fa-solid fa-quote-left quote"></i>
                            <p class="sec-10-describe">Google Translate is a multilingual neural machine translation
                                service developed by
                                Google to translate text, documents and websites from one language into another. It
                                offers a website interface, a mobile app for Android and iOS, and an API that helps
                                developers build browser extensions and software applications.</p>
                            <i class="fa-solid fa-quote-right quote"></i>
                        </div>
                    </div>

                    <div class="move-card">
                        <h3 class="move-header">CETVRTA</h3>
                        <div class="stars">
                            <div class="person">
                                <p class="star-person">Lamar Parker:</p>
                            </div>
                            <div class="star-wrapper">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div class="section-10-text-holder">
                            <i class="fa-solid fa-quote-left quote"></i>
                            <p class="sec-10-describe">Google Translate is a multilingual neural machine translation
                                service developed by
                                Google to translate text, documents and websites from one language into another. It
                                offers a website interface, a mobile app for Android and iOS, and an API that helps
                                developers build browser extensions and software applications.</p>
                            <i class="fa-solid fa-quote-right quote"></i>
                        </div>
                    </div>

                    <div class="move-card">
                        <h3 class="move-header">PETA</h3>
                        <div class="stars">
                            <div class="person">
                                <p class="star-person">Lamar Parker:</p>
                            </div>
                            <div class="star-wrapper">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div class="section-10-text-holder">
                            <i class="fa-solid fa-quote-left quote"></i>
                            <p class="sec-10-describe">Google Translate is a multilingual neural machine translation
                                service developed by
                                Google to translate text, documents and websites from one language into another. It
                                offers a website interface, a mobile app for Android and iOS, and an API that helps
                                developers build browser extensions and software applications.</p>
                            <i class="fa-solid fa-quote-right quote"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="circle-wrapper">
                <div class="circlee circle-1"></div>
                <div class="circlee circle-2"></div>
                <div class="circlee circle-3"></div>
                <div class="circlee circle-4"></div>
                <div class="circlee circle-5"></div>
            </div>
        </div>
    )
}

export default Section12;