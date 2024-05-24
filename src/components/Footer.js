import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div class="footerLeft">
                <p>Designed by Dahee</p>
            </div>
            <div class="footerRight">
                <a href="https://github.com/dhl92000">
                    <p>Github</p>
                </a>
                <a href="https://www.linkedin.com/in/daheelee/">
                    <p>LinkedIn</p>
                </a>
                <Link to="/contact">
                        <p>Contact</p>
                </Link>
            </div>
        </footer>
    )
}

export default Footer