import React, { useEffect, useState } from "react";
import axios from "axios";
import ContentMainCard from "./ContentMainCard";

const ContentMain = ({ category, minPrice, maxPrice, sortOrder, size }) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    let url = `http://localhost:5000/shop/${category}`;
    axios
      .get(url)
      .then((res) => {
        let shuffledItems;
        switch (sortOrder) {
          case "Sort By Price: Low To High":
            // Sort items by price in ascending order
            shuffledItems = res.data.data.sort((a, b) => a.price - b.price);
            break;
          case "Sort By Price: High To Low":
            // Sort items by price in descending order
            shuffledItems = res.data.data.sort((a, b) => b.price - a.price);
            break;
          default:
            // No sorting required
            shuffledItems = res.data.data.sort(() => Math.random() - 0.5);
            break;
        }

        const filtered = shuffledItems.filter(
          (item) => Number(item.price.replace(/,/g, "")) >= minPrice && Number(item.price.replace(/,/g, "")) <= maxPrice
        );
        let sizeFilter;
        if (size) {
          sizeFilter = filtered.filter(item => item.size === size);
        }
        size ? setItems(sizeFilter) : setItems(filtered)
      })
      .catch((err) => console.error(err));
  }, [category, minPrice, maxPrice, sortOrder, size]);

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
