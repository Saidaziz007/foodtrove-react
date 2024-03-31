import React from "react";
import "./Home.css";
import { IoIosSend } from "react-icons/io";
import heroImg from "../../assets/images/hero-img.svg";
import { HERO_ITEMS } from "../../static";
import HeroBanners from "../../components/hero-banners/HeroBanners";
import Products from "../../components/products/Products";

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div className="container">
          <div className="hero-all">
            <div className="hero-left">
              <div className="hero-title">
                <span>100%</span>
                <h1>Organic Vegetables</h1>
              </div>
              <h2>The best way to stuff your wallet.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                reiciendis beatae consequuntur.
              </p>
              <div className="hero-input">
                <input type="text" placeholder="Your emaill address" />
                <IoIosSend />
                <button>Subscribe</button>
              </div>
            </div>
            <div className="hero-right">
              <ul className="hero-list">
                {HERO_ITEMS?.map((el) => (
                  <li
                    key={el.id}
                    style={{ color: el.color }}
                    className="hero-item"
                  >
                    {el.icon}
                    {el.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="" />
        </div>
      </div>
      <HeroBanners />
      <Products />
    </section>
  );
}

export default Home;
