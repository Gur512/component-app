import Nav from "./Nav";

function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <h1 className="header-title">{props.title}</h1>
                <Nav navLinks={props.navLinks}/>
            </div>
        </header>
    );
}

export default Header;
