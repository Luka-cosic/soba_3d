import "./css/sec13.css";

const Section13 = () => {
    return (
        <div class="section-11">
            <div class="section-11-first">
                <div class="section-11-text">
                    <h1 class="section-11-header">NEWSLETTER</h1>
                    <h2 class="section-11-subtitle">STAY TUNED FOR UPDATES</h2>
                    <p class="section-11-paragraph">Sign up for our newsletter & get exclusive offers and invites!
                    </p>
                    <div class="input-wrapper">
                        <div class="input">
                            <input type="text" class="email-input" placeholder="Your Email..." />
                                <div class="line-wrapper">
                                    <div class="input-line"></div>
                                </div>
                        </div>
                        <button class="submit-btn">Submit</button>
                    </div>
                </div>
            </div>
            <div class="section-11-second">
                <div class="sec-11-img-wrapper">
                    <img src="pictures/mapa1.png" class="sec-11-img" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section13;