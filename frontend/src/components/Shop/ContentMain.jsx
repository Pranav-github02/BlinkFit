import React, { useEffect, useState } from "react";
import axios from "axios";
import ContentMainCard from "./ContentMainCard";

const ContentMain = ({ category, minPrice, maxPrice }) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    let url = `http://localhost:5000/shop/${category}`;
    axios
      .get(url)
      .then((res) => {
        const shuffledItems = res.data.data.sort(() => Math.random() - 0.5);
        const filtered = shuffledItems.filter(
          (item) => item.price >= minPrice && item.price <= maxPrice
        );
        setItems(filtered);
      })
      .catch((err) => console.error(err));
  }, [category, minPrice, maxPrice]);

  console.log(minPrice, maxPrice);

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
