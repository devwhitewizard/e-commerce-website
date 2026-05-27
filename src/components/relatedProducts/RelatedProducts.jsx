import React from 'react'
import './RelatedProducts.css'
import data_products from '../assets/data'
import Item from '../item/Item'

export const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {data_products.map((item, i) => (
                <Item key={i} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image} />
            ))}
        </div>
    </div>
  )
}
