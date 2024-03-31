import React, { useEffect, useState } from "react";
import { PRODUCT_ITEMS } from "../../static";
import "./Products.css";
import rasm from "../../assets/images/banner-1.png";
import rating from "../../assets/images/rating.svg";
import { IoCartOutline } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://fakestoreapi.com/products/";

function Products() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(5);
  useEffect(() => {
    axios
      .get(`${API_URL}?limit=${count}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [count]);
  if (!data) {
    return <div>Loading...</div>;
  }
  let products = data?.map((el) => (
    <div key={el.id} className="product-card">
      <div className="card-img">
        <Link to={`/product/${el.id}`}>
          <img src={el.image} alt="" />
        </Link>
      </div>
      <div className="card-info">
        <p>{el.category}</p>
        <h1>{el.title}</h1>
        <div className="card-rating">
          <img src={rating} alt="" />
          <p>({el.rating.rate})</p>
        </div>
        <p>
          By <span>NestFood</span>
        </p>
        <div className="card-bottom">
          <div className="card-price">
            <h2>{el.price}</h2>
            <h3>$32.8</h3>
          </div>
          <button>
            <IoCartOutline /> Add
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <section className="product">
      <div className="container">
        <div className="product-top">
          <h1>Popular Products</h1>
          <ul className="product-list">
            {PRODUCT_ITEMS?.map((el) => (
              <li
                key={el.id}
                style={{ color: el.color }}
                className="product-item"
              >
                {el.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="product-bottom">
          <div className="product-wrapper">{products}</div>
          <div className="product-btn">
            <button
              disabled={count === 20}
              onClick={() => setCount((p) => p + 5)}
              className="btn-see"
            >
              Increase product
            </button>
            <button
              disabled={count <= 5}
              onClick={() => setCount((p) => p - 5)}
              className="btn-see"
            >
              Decrease product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
