function Footer(props) {
    return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">{props.brand}</p>
        <div className="footer-links">
          {props.links.map(link => (
            <a key={link.index} href={link.url}>{link.name}</a>
          ))}
        </div>
      </div>
    </footer>
    );
}

export default Footer;
