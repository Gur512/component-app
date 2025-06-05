function Gallery(props) {
    return (
        <section className="gallery-section">
             <div className="gallery-container">
                <h2 className="gallery-title">{props.galleryTitle}</h2>
                <div className="gallery-grid">
                    {props.images.map((src, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={src} />
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;
