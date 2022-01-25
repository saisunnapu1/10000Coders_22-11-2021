import banner1 from "../../assets/images/kalam-sir-1.jpg";
import banner2 from "../../assets/images/kalam-sir-2.jpg";
import banner3 from "../../assets/images/kalam-sir-3.jpg";

let Slider = () => {
  return (
    // <!-- Carousel -->
    <div id="demo" className="carousel slide mb-5" data-bs-ride="carousel">
      {/* <!-- Indicators/dots --> */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="2"
        ></button>
      </div>
      {/* <!-- The slideshow/carousel --> */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner1} alt="Los Angeles" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={banner2} alt="Chicago" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={banner3} alt="New York" className="d-block w-100" />
        </div>
      </div>
      {/* <!-- Left and right controls/icons --> */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Slider;
