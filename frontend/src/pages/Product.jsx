import React from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/breadcrums/Breadcrums';
import { ProductDisplay } from '../components/productDisplay/ProductDisplay';
import { DescriptionBox } from '../components/descriptionBox/decriptionBox';
import RelatedProducts from '../components/relatedProducts/RelatedProducts';

const Product = () => {
    const {all_product} = React.useContext(ShopContext);
    const {productId} = useParams();    
    const product = all_product.find((e) => e.id === parseInt(productId));
    return (
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox />
            <RelatedProducts category={product?.category}/>
        </div>
    )
}

export default Product;