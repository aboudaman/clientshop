import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Products.scss";
import List from "../../Components/List/List";

const Products = () => {
  // Get the link in the URL http://ad.com/products/1.
  //   This will give an obhect with information about the id = 1.  It is part of react-router-dom
  // Convert the id into an integer
  const catID = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="left">
        <h2>Product Categories</h2>
        <div className="categories">
          <label className="checkbox">
            <input type="checkbox" id="1" value={1} />
            Hat
          </label>
          <label className="checkbox">
            <input type="checkbox" id="2" value={2} />
            TShirt
          </label>
        </div>
        <div className="filter">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="sortBY">
          <h2>Sort By</h2>
          <div class="control">
            <label class="radio">
              <input
                type="radio"
                id="asc"
                name="price"
                onChange={(e) => setSort("asc")}
              />
              Price (lowest first)
            </label>
            <label class="radio">
              <input
                type="radio"
                id="desc"
                name="price"
                onChange={(e) => setSort("desc")}
              />
              Price (Highest Frist)
            </label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg" src="/images/leather_male.jfif" alt="" />
        <List catID={catID} sort={sort} maxPrice={maxPrice} />
      </div>
    </div>
  );
};

export default Products;
