import './Header.css';

function Header() {
    return (
        <>
            <header>
                <button className="hamburger-btn" id="hamburger-btn">
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
                <nav >
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="report-incident.html">Report Incident</a></li>
                        <li><a href="equipment-list.html">Equipment List</a></li>
                    </ul>
                </nav>
            </header>
        </>);
}

// This line makes the component available to be imported in other files.
export default Header;