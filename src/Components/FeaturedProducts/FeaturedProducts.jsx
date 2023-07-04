import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../Hooks/useFetch";

// Fetch data based on the provided prop type
const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  // `/products?populate=*&[filters][type][$eq]=${type}`

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.REACT_APP_API_URL}/products?populate=*&[filters][type][$eq]=${type}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  //           },
  //         }
  //       );

  //       setData(response.data.data)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1> {type} Products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
          dignissimos dolores amet autem ut nisi.
        </p>
      </div>
      <div className="bottom">
        {/* if you add{} insert return type, with () no return type */}
        {error
          ? "Something Went Wrong......."
          : loading
          ? "Loading... "
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
