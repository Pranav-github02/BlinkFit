import React from 'react';
import Card from './Card';

const Testimonials = () => {
  return (
    <div>
      <div className="reviews">
        <h1>Reviews</h1>
        <hr style={{ margin: "auto", width: "70px" }} />
        <div
          id="carouselExampleControls"
          className="carousel carousel-dark slide"
          data-bs-touch="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card-holder">
                <Card />
                <Card />
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-holder">
                <Card />
                <Card />
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-holder">
                <Card />
                <Card />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
            style={{ width: "5%" }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
            style={{ width: "5%" }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
