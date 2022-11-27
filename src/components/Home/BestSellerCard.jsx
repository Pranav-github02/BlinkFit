import React from 'react'
import { useState } from 'react'
import "./Best_Selling.css"
const BestSellerCard = ({ id, title, image, desc, price }) => {
  const [qty, setQty] = useState(1)
  const Increment = (e) => {
    e.preventDefault();
    if (qty < 8) setQty(qty => qty + 1)
  }
  const Decrement = (e) => {
    e.preventDefault();
    if (qty > 0) setQty(qty => qty - 1)
  }
  return (
    <>
      <div className='bestseller'>
        <div className='product'>
          <div>
            <img src={image.image1} style={{ width: "350px", height: "450px" }} alt="" />
            <div className='wishlist' data-title='Wishlist'>
              <button>
                {/* Add to Wishlist */}
                <i class="fa-solid fa-heart"></i>
              </button>
            </div>
            <div className='product-button'>
              <div className='add_cart'></div>
              <div className='quick-view'>
                <a type="button" href='#Modal' data-bs-toggle="modal" data-bs-target="#Modal"><i className="fa-solid fa-magnifying-glass"></i></a>
              </div>
            </div>
          </div>
          <div className='product-content'>
            <div className='rating'>
              <span className='star'>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span className='count'>(1 review)</span>
            </div>
            <p className='title'>{title}</p><br></br>
            <p className='price'><span>&#8377;</span>{price}</p>
          </div>
        </div>
      </div>

      <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="BestSeller">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className='product-detail'>
              <div className='row'>
                <div className='img'>
                  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={image.image1} className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={image.image2} className="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className='product-info'>
                  <div className='content'>
                    <div className='rating'>
                      <span className='star'>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                      <span className='count'>(1 review)</span>
                    </div>
                    <h1 className='title'>{title}</h1><br></br>
                    <div className='price-single'>
                      <p className='price'><span>&#8377;</span>{price}</p>
                    </div>
                    <div className='desc'>
                      <p>{desc}</p>
                    </div>
                    <form>
                      <div className='qty-btn'>
                        <button type='button' className='minus' onClick={(e) => Decrement(e)}></button>
                        <input type="number" name="qty" id="qty" value={qty} readOnly />
                        <button type='button' className='plus' onClick={(e) => Increment(e)}></button>
                        <button type='submit' className='add-cart btn btn-dark'>Add to Cart</button>
                        <button type='button' className='wishlist'><i class="fa-regular fa-heart"></i></button>
                      </div>
                      <button type='submit' className='buy_now btn btn-primary'>Buy Now</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
// }

export default BestSellerCard