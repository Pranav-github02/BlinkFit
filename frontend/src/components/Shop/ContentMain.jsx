import React, { useEffect, useState } from "react";
import axios from "axios";
import ContentMainCard from "./ContentMainCard";

const ContentMain = ({ category }) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    let url = `http://localhost:5000/shop/${category}`;
    axios
      .get(url)
      .then((res) => {
        const shuffledItems = res.data.data.sort(() => Math.random() - 0.5);
        setItems(shuffledItems);
      })
      .catch((err) => console.error(err));
  }, [category]);

  let products = <p>Loading.....</p>;
  if (items != null) {
    products = (
      <>
        {items.map((obj) => (
          <ContentMainCard
            key={obj.id}
            title={obj.title}
            desc={obj.desc}
            price={obj.price}
            image={obj.image}
            qty={obj.qty}
            size={obj.size}
          />
        ))}
      </>
    );
  }

  return (
    <div className="products-list">
      <ul className="products row">{products}</ul>
    </div>
  );
};

export default ContentMain;
