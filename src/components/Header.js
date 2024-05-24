import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header class="header">
            <div id="headerName">
                <Link to="/">( DAHEE LEE )</Link>
            </div>
            <div class="headerNav">
                <Link to="/about">
                    <button class="keyboardButton">
                        About
                    </button>
                    </Link>
                <Link to="/contact">
                <button class="keyboardButton">
                        Contact
                    </button>
                </Link>
            </div>
        </header>
    )
}

export default Header