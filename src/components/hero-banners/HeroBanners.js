import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import "./HeroBanners.css";

function HeroBanners() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-card-1">
            <h1>Everyday Fresh & Clean with Our Products</h1>
            <button>
              Shop Now <MdArrowRightAlt />
            </button>
          </div>
          <div className="banner-card-2">
            <h1>Make your Breakfast Healthy and Easy</h1>
            <button>
              Shop Now <MdArrowRightAlt />
            </button>
          </div>
          <div className="banner-card-3">
            <h1>The best Organic Products Online</h1>
            <button>
              Shop Now <MdArrowRightAlt />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanners;
