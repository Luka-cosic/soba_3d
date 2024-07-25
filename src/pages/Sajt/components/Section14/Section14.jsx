import "./css/sec14.css";

const Section13 = () => {
    return (
        <div class="section-12">
            <div class="sec12First">
                <div class="sec12Location">
                    <h4 class="sec12Header">Location</h4>
                    <div class="headerParagraph">
                        <p class="sec12Paragraph">2550 Innovation Drive</p>
                        <p class="sec12Paragraph">Auburn Hills, MI</p>
                        <p class="sec12Paragraph">48326</p>
                    </div>
                </div>
                <div class="sec12Hours">
                    <h4 class="sec12Header">Hours</h4>
                    <div class="hours1">
                        <p class="sec12Paragraph">Mon, Tue, Wed, Thur</p>
                        <p class="sec12Paragraph">11:00 am - 10:00 pm</p>
                    </div>
                    <div class="hours1">
                        <p class="sec12Paragraph">Fri, Sat</p>
                        <p class="sec12Paragraph">11:00 am - 12:00 am</p>
                    </div>
                    <div class="hours1">
                        <p class="sec12Paragraph">Sun</p>
                        <p class="sec12Paragraph">12:00 pm - 9:00 pm</p>
                    </div>
                </div>
                <div class="sec12FindUs">
                    <h4 class="sec12Header">FIND US ON...</h4>
                    <div class="sec12SocialMe">
                        <a href="#" class=" media-link-last">
                            <i class="fa-brands fa-twitter last-media"></i>
                        </a>
                        <a href="#" class=" media-link-last">
                            <i class="fa-brands fa-facebook-f last-media"></i>
                        </a>
                        <a href="#" class=" media-link-last">
                            <i class="fa-brands fa-instagram last-media"></i>
                        </a>
                    </div>
                    <h4 class="sec12Header">CONTACT</h4>
                    <p class="sec12Paragraph ourPhone">345-500</p>
                    <a href="#" class="ourMail">
                        <p>auburnhills@thehubstadium.com</p>
                    </a>
                </div>
            </div>
            <div class="sec12RedLine"></div>
            <div class="sec12Second">
                <div class="sec12LogoHolder">
                    <p class="logo-paragraph">Powered by:</p>
                    <img src="pictures/lastLogo.png" class="logoImg" alt="Logo" />
                </div>
                <a href="#" class="last-link">Website design, Social Media marketing and Email marketing provided by
                    SpotHopper.</a>
            </div>
        </div>
    )
}

export default Section13;