import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

// This component is using FlexBox Grid System

const Categories = () => {
  return (
    <div className="categories">
      {/* Create 3 columns */}
      <div className="col">
        <div className="row">
          <img src="/images/more_kids.png" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="/images/brown_leather.jfif" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="/images/cool_leather.jfif" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="/images/group_leather.jfif" alt="" />
              <button>
                <Link className="link" to="/products/1">
                  Sale
                </Link>
              </button>
            </div>
            <div className="row">
              <img src="/images/leather_female.jfif" alt="" />
              <button>
                <Link className="link" to="/products/1">
                  Sale
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="/images/leather_male.jfif" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
