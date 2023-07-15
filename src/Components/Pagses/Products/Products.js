import React from 'react';
import ProductsItems from '../../../Products/Products/ProductsItems';
import Tags from '../../Tags/Tags';
import Inputs from '../../Input/Inputs';

const Products = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-4xl mt-7'>Below are all our products</h1>
            <div className='md:flex md:justify-between md:items-center mt-14'>
                <div>
                    <Tags/>
                </div>
                <div>
                    <Inputs/>
                </div>
            </div>
            <div className='mt-20'>
                <ProductsItems/>
            </div>
        </div>
    );
};

export default Products;