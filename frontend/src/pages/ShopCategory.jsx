import React, { useContext } from 'react';
import './css/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/assets/dropdown_icon.png';
import Item from '../components/item/Item';


const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
    const categoryProducts = all_product.filter(item => item.category === props.category);
    
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-{categoryProducts.length}</span> out of {categoryProducts.length} products
                </p>
                <div className='shopcategory-sort'>
                    sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image}/>
                    }
                    return null;
                } ) }
            </div>

        </div>
    )
}

export default ShopCategory;