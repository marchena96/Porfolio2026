import './Header.css'
import DarkModeSwitch from '../DarkModeSwitch';

const Header = () => {
    return (<>
        <header className="header">
            <div className="logo">
                <h2 className="title">Daniel Marchena M</h2>
                <p className="subtitle">Software Engineering</p>
            </div>

            <nav className="navbar">
                <a href="#projects">Projects</a>
                <a href="#about-us">About us</a>
                <a href="#contact">Contact</a>
            </nav>

            <DarkModeSwitch />
        </header>
    </>)
};

export default Header;