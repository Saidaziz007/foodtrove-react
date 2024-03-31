import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import rating from "../../assets/images/rating.svg";
import "./Single.css";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import slider from "../../assets/images/slider.svg";

const API_URL = "https://fakestoreapi.com/products/";

function Single() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL + id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="signle">
      <div className="container">
        <div className="single-all">
          <div className="single-left">
            <h1>Product Category</h1>
            <hr />
            <div className="card-cat-all">
              <div className="card-cat">
                <div className="card-cat-1">
                  <input type="checkbox" />
                  <p>Juice & Drinks</p>
                </div>
                <p>[20]</p>
              </div>
              <div className="card-cat">
                <div className="card-cat-1">
                  <input type="checkbox" />
                  <p>Dairy & Milk</p>
                </div>
                <p>[54]</p>
              </div>
              <div className="card-cat">
                <div className="card-cat-1">
                  <input type="checkbox" />
                  <p>Snack & Spice</p>
                </div>
                <p>[64]</p>
              </div>
            </div>
            <h2>Filter By Price</h2>
            <hr />
            <img src={slider} alt="" />
            <div className="card-cat-price">
              <h3>Price :</h3>
              <p>$20 - $250</p>
            </div>
            <button>Filter</button>
            <h2>Product Category</h2>
            <hr />
            <div className="card-color">
              <div className="card-color-all">
                <div className="card-color-1">
                  <input type="checkbox" />
                  <p>blue</p>
                </div>
                <div className="card-color-blue"></div>
              </div>
              <div className="card-color-all">
                <div className="card-color-1">
                  <input type="checkbox" />
                  <p>yellow</p>
                </div>
                <div className="card-color-yellow"></div>
              </div>
              <div className="card-color-all">
                <div className="card-color-1">
                  <input type="checkbox" />
                  <p>red</p>
                </div>
                <div className="card-color-red"></div>
              </div>
              <div className="card-color-all">
                <div className="card-color-1">
                  <input type="checkbox" />
                  <p>green</p>
                </div>
                <div className="card-color-green"></div>
              </div>
            </div>
            <h2>Weight</h2>
            <hr />
            <div className="card-weight-all">
              <div className="card-weight-1">
                <input type="checkbox" />
                <p>2kg Pack</p>
              </div>
              <div className="card-weight-1">
                <input type="checkbox" />
                <p>20kg Pack</p>
              </div>
              <div className="card-weight-1">
                <input type="checkbox" />
                <p>30kg pack</p>
              </div>
            </div>
            <h2>Products Tages</h2>
            <hr />
            <div className="card-tag">
              <div className="card-tag-all">
                <p>Vegetables</p>
                <p>Juice</p>
                <p>Food</p>
                <p>Dry Fruits</p>
                <p>Vegetables</p>
                <p>Juice</p>
              </div>
            </div>
          </div>
          <div className="single-right">
            <div className="single-right-left">
              <img src={product.image} alt={product.title} />
              <div className="single-right-left-1">
                <img src={product.image} alt={product.title} />
                <img src={product.image} alt={product.title} />
                <img src={product.image} alt={product.title} />
                <img src={product.image} alt={product.title} />
                <img src={product.image} alt={product.title} />
              </div>
            </div>
            <div className="single-right-right">
              <h1>{product.title}</h1>
              <p className="p-1">{product.description}</p>
              <hr />
              <div className="single-rating">
                <img src={rating} alt="" />
                <p>({product.rating.rate})</p>
              </div>
              <div className="single-right-right-info">
                <h1>
                  Brand : <span>ESTA BETTERU CO</span>
                </h1>
                <h1>
                  Flavour : <span>Super Saver Pack</span>
                </h1>
                <h1>
                  Diet Type : <span>{product.category}</span>
                </h1>
                <h1>
                  Weight : <span>200 Grams</span>
                </h1>
                <h1>
                  Speciality : <span>Gluten Free, Sugar Free</span>
                </h1>
                <h1>
                  Info : <span>Egg Free, Allergen-Free</span>
                </h1>
                <h1>
                  Items : <span>1</span>
                </h1>
              </div>
              <div className="card-price-1">
                <h2>${product.price}</h2>
                <h4>$123.25</h4>
              </div>
              <div className="card-weight">
                <h3>Size / Weight</h3>
                <ul className="card-list">
                  <li className="card-item-1">50kg</li>
                  <li className="card-item">70kg</li>
                  <li className="card-item">100kg</li>
                  <li className="card-item">200kg</li>
                </ul>
              </div>
              <div class="card-buy">
                <h4>1</h4>
                <div className="card-buy-1">
                  <p>+</p>
                  <p>-</p>
                </div>
                <button>Add to Cart</button>
                <FaRegHeart />
                <FaRegEye />
              </div>
            </div>
            <div className="single-right-bottom">
              <div className="single-bottom-top">
                <ul className="single-list">
                  <li className="single-item-1">Description</li>
                  <li className="single-item">Information</li>
                  <li className="single-item">Review</li>
                </ul>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                in vero sapiente odio, error dolore vero temporibus consequatur,
                nobis veniam odit dignissimos consectetur quae in perferendis
                doloribusdebitis corporis, eaque dicta, repellat amet, illum
                adipisci vel perferendis dolor! Quis vel consequuntur repellat
                distinctio rem. Corrupti ratione alias odio, error dolore
                temporibus consequatur, nobis veniam odit laborum dignissimos
                consectetur quae vero in perferendis provident quis.
              </p>
              <h2>Packaging & Delivery</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                in vero perferendis dolor! Quis vel consequuntur repellat
                distinctio rem. Corrupti ratione alias odio, error dolore
                temporibus consequatur, nobis veniam odit laborum dignissimos
                consectetur quae vero in perferendis provident quis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Single;
