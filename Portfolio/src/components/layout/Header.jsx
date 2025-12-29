const Header = () => {
    return (<>
        <header className="header">
            <div className="logo">
                <h2 className="title">Daniel Marchena M</h2>
                <p className="sub-title">Software Engineering</p>
            </div>
        </header>

        <nav className="navbar">
            <a href="#projects">Projects</a>
            <a href="#about-us">About us</a>
            <a href="#contact">Contact</a>
        </nav>

        <button className="dark-mode">Dark mode</button>
    </>)
};

export default Header;