import React from "react";
import Card from "../Card/Card";
import "./List.scss";

const List = () => {

  
  const data = [
    {
      id: 1,
      img1: "/images/ama1.png",
      img2: "/images/beleau.png",
      isNew: true,
      title: "Ama Kip Kip Black",
      oldPrice: 22,
      newPrice: 12,
    },
    {
      id: 2,
      img1: "/images/ama2.png",
      img2: "/images/beleau.png",
      isNew: true,
      title: "Ama Kip Kip Blue",
      oldPrice: 22,
      newPrice: 12,
    },
    {
      id: 3,
      img1: "/images/more_kids.png",
      img2: "/images/beleau.png",
      isNew: false,
      title: "Shoes White",
      oldPrice: 22,
      newPrice: 12,
    },
  ];
  return (
    <div className="list">
      {/* {data?.map((item) => 
        (<Card item={item} key={item.id} />
      ))} */}

      {data.map((item) => {
        return <Card item={item} key={item.id} />;
      })}
    </div>
  );
};

export default List;
