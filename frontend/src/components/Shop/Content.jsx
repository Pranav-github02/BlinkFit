import React, { useState, useEffect, useRef } from "react";
import ContentMain from "./ContentMain";
import axios from "axios";

const Content = () => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    "Sort By Popularity",
    "Sort By Price: Low To High",
    "Sort By Price: High To Low",
  ];
  const dropdownRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [categoryCount, setCategoryCount] = useState([
    { name: "allItems", count: 0 },
    { name: "clothing", count: 0 },
    { name: "footwear", count: 0 },
    { name: "equipment", count: 0 },
    { name: "accessories", count: 0 },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("allItems");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // console.log(categoryCount[0]);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const fetchCategoryCounts = async () => {
      try {
        const responsePromises = [
          axios.get("http://localhost:5000/shop/getcount/clothing"),
          axios.get("http://localhost:5000/shop/getcount/footwear"),
          axios.get("http://localhost:5000/shop/getcount/equipment"),
          axios.get("http://localhost:5000/shop/getcount/accessories"),
        ];

        const responses = await Promise.all(responsePromises);

        const updatedCategoryCount = categoryCount.map((category, index) => {
          if (index === 0) {
            const sum = responses.reduce(
              (accumulator, response) => accumulator + response.data.quantity,
              0
            );
            return {
              ...category,
              count: sum,
            };
          }
          return {
            ...category,
            count: responses[index - 1].data.quantity,
          };
        });

        setCategoryCount(updatedCategoryCount);
      } catch (error) {
        console.error("Error fetching category counts:", error);
      }
    };

    fetchCategoryCounts();

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const renderOptions = options.map((option, index) => (
    <div
      className="dropdown-option"
      key={index}
      onClick={() => handleOptionClick(option)}
    >
      {option}
    </div>
  ));

  const dropdownHeader = selectedOption ? selectedOption : "Sort By Relevance";

  const dropdownContent = isOpen && (
    <div className="dropdown-content">{renderOptions}</div>
  );

  const contentMain = <ContentMain category={selectedCategory} />;
  return (
    <div>
      <main>
        <div className="container">
          <div className="content-main row">
            <div className="filter_sidebar col-xl-3 col-lg-3 col-md-12 col-12">
              <div className="filter-button-toggle">Close</div>
              <div className="main">
                <form className="filter-product">
                  <div className="category">
                    <h3>Categories</h3>
                    <div className="categories">
                      {categoryCount.map((category, index) => (
                        <div
                          className="category-item"
                          key={index}
                          onClick={() => setSelectedCategory(category.name)}
                        >
                          <label className="catg-name">{category.name}</label>
                          <span className="count">{category.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="filter-price">
                    <h3>Price</h3>
                    <div className="filter-price-content"></div>
                  </div>
                  <div className="filter-size">
                    <h3>Size</h3>
                    <div className="size-filter">
                      <ul className="sizes">
                        <li>
                          <span>XL</span>
                        </li>
                        <li>
                          <span>L</span>
                        </li>
                        <li>
                          <span>M</span>
                        </li>
                        <li>
                          <span>S</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-12">
              <div className="products-top">
                <div className="sorting-dropdown">
                  <div className="custom-dropdown" ref={dropdownRef}>
                    <div className="dropdown-header" onClick={toggleDropdown}>
                      {dropdownHeader}
                      <i className="fa-solid fa-sort-down"></i>
                    </div>
                    {dropdownContent}
                  </div>
                </div>
                {/* <ul className='display-type'>
                                    <li></li>
                                </ul> */}
              </div>
              {contentMain}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Content;
