import React from 'react';
import './RelatedProducts.css';
import all_product from '../assets/all_product';
import Item from '../item/Item';

const RelatedProducts = ({ category }) => {
    
    const related = (all_product && category)
        ? all_product.filter(item => item.category === category).slice(0, 4)
        : (all_product ? all_product.slice(0, 4) : []);

    return (
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {related.map((item, i) => (
                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
