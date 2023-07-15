import React from 'react';
import ProductsItem from './ProductsItem';
import { useGetProductsQuery } from '../../features/Api/ApiSlice';
import { ToastBar } from 'react-hot-toast';

const ProductsItems = () => {

    const {data: products, isError, isLoading, error} = useGetProductsQuery();

    let content =null;
    if(isLoading){
        content = <div>Loding....</div>
    };
    if(!isLoading && isError){
        content = <ToastBar error='There was an error'/>
    };
    if(!isLoading && !isError && products.length === 0){
        content = <ToastBar error='There was not found'/>
    }
    if(!isLoading && !isError && products.length > 0){
        content = products.map(product=> <ProductsItem key={
            product.id
        } product={product}/>)
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-10'>
            {content}
        </div>
    );
};

export default ProductsItems;