function Button(props) {
    return (
        <div className="button-group">
            <button className="first-btn">{props.firstbtn}</button>
            <button className="Second-btn">{props.secondbtn}</button>
        </div>
    );
}

export default Button;
