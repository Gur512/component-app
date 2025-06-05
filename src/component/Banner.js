import Button from "./Button";

function Banner(props) {
    return (
    <section className="banner">
      <div className="banner-overlay">
        <h2 className="banner-title">{props.heading}</h2>
        <p className="banner-subtitle">{props.subtitle}</p>
        <Button firstbtn={props.firstbtn} secondbtn={props.secondbtn}/>
      </div>
    </section>
    );
}

export default Banner;
