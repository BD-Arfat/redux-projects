import React from 'react';
import Tag from './Tag';
import { useGetTagsQuery } from '../../features/Api/ApiSlice';
import { ToastBar } from 'react-hot-toast';

const Tags = () => {

    const {data: tags, isError, isLoading, error} = useGetTagsQuery();

    let content =null;
    if(isLoading){
        content = <div>Loding....</div>
    };
    if(!isLoading && isError){
        content = <ToastBar error='There was an error'/>
    };
    if(!isLoading && !isError && tags.length === 0){
        content = <ToastBar error='There was not found'/>
    }
    if(!isLoading && !isError && tags.length > 0){
        content = tags.map(product=> <Tag key={
            product.id
        } product={product}/>)
    }

    return (
        <div className='md:flex md:justify-between md:items-center gap-5 grid grid-cols-3'>
            {content}
        </div>
    );
};

export default Tags;