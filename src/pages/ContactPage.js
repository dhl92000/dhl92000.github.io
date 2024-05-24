import './ContactPage.css'

const ContactPage = () => {
    return (
        <div class="contactCard">
            <h1>Contact</h1>

            <div class="contactCardLayout">

                <div class="contactText">
                    Feel free <br />
                    to connect <br />
                    with me &#8594;
                </div>

                <div class="contactItemsdiv">
                    <div class="contactItems">
                        <p>
                            <i class="devicon-linkedin-plain"></i>
                        </p>

                        <p>
                            <a href="linkedin.com/in/daheelee/">
                                LinkedIn
                            </a>
                        </p>
                    </div>

                    <div class="contactItems">
                        <p>
                            <i class="devicon-github-original"></i>
                        </p>

                        <p><a href="https://github.com/dhl92000">Github</a></p>
                    </div>
                    <div class="contactItems">
                        <p>
                            <i class="fa-regular fa-envelope"></i>
                        </p>

                        <p>dahlee97@gmail.com</p>
                    </div>
                </div>

            </div>




        </div>
    )
}

export default ContactPage