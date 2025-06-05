function Nav(props) {
    return (
        <div className="nav-list">
            {props.navLinks.map(navLink => (
                <div key={navLink.index}>
                    <nav>
                        <ul>
                            <li><a href={navLink.url}>{navLink.name}</a></li>
                        </ul>
                    </nav>
                </div>
            ))}
        </div>
    );
}

export default Nav;
