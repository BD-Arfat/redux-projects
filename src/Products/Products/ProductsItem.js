import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDeleteProductMutation } from '../../features/Api/ApiSlice';
import '../../../src/App.css'

const ProductsItem = ({ product }) => {

    const { _id, model, name, price, image, Description } = product;

    const [deleteProduct, { isLoading }] = useDeleteProductMutation();

    const handelDelete = (data) => {
        deleteProduct(_id);
    };

    return (
        <div>
            <div className="card md:w-full w-96 h-full bg-base-100 items-cards">
                <figure><img src={image} className=' h-48 w-60' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Name : {name}</h2>
                    <div className='flex justify-between mt-3'>
                        <p><span className='font-bold'>Model</span> : {model}</p>
                        <p><span className='font-bold'>Price</span> : {price}</p>
                    </div>
                    {/* <p className='mt-4'> <span className='font-bold'>Description</span> : {Description}</p> */}
                    <div className="card-actions justify-end mt-3">
                        <Link to={`/editVideo/${_id}`} className="btn edit-items mr-1 text-black font-bold">Edit</Link>
                        <button disabled={isLoading} onClick={handelDelete} className=" delete-items btn  mr-12 text-black font-bold"> Delete</button>
                        <button className="btn items-cards  text-black font-bold">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsItem;