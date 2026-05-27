import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = (props) => {
  const {product} = props;
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce is an online platform that facilitate buying and selling of products or services over the internet </p>
        </div>
    </div>
  )
}
