import React from 'react'
import { NavLink } from "react-router-dom"
const ContentMainCard = ({ title, desc, price, image, qty, size }) => {
    return (
        <>
            <li className='col-xl-4 col-lg-4 col-md-6 col-6'>
                <div className='inner'>
                    <div className='products-thumb'>
                        <div className='products-thumb-hover'>
                            <NavLink>
                                <img src={image.image1} className='image1' alt='' />
                                <img src={image.image2} className='image2' width="600" height="900" alt='' />
                            </NavLink>
                        </div>
                        <div className='products-button'>

                        </div>
                    </div>
                    <div className='products-content'>
                        <div className='content'>
                            <h3 className='product-title'>{title}</h3>
                            <span className='product-price'>&#8377;{price}</span>
                        </div>
                    </div>
                </div>
            </li>
        </>

    )
}

export default ContentMainCard