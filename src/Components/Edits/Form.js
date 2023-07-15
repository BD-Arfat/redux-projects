import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Form = () => {


    const navigate = useNavigate();

    const product = useLoaderData()

    const {
        _id,
        name: initialName,
        model: initialModel,
        image: initialImage,
        price: initialPrice,
        Description: initialDescription,
        tag: initialTag,

    } = product;

    const [name, setName] = useState(initialName);
    const [model, setModel] = useState(initialModel);
    const [image, setImage] = useState(initialImage);
    const [price, setPrice] = useState(initialPrice);
    const [Description, setDescription] = useState(initialDescription);
    const [tag, setTag] = useState(initialTag);



    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            model,
            image,
            price,
            Description,
            tag
        };

        fetch(`https://redux-server-bd-arfat-bd-arfat-s-team.vercel.app/products/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('You have updated successfully');
                console.log(data)
            }
        })

    }

    return (
        <form method='PATCH' onSubmit={handleSubmit} className="card mx-auto mb-10 mt-10 flex-shrink-0 w-full md:w-9/12 shadow-2xl bg-base-100">
            <div className="card-body">
                {/* 1 */}
                <div className='md:flex md:justify-between md:items-center'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" className="input input-bordered input-primary md:w-96" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Model</span>
                        </label>
                        <input type="number" value={model} onChange={(e) => setModel(e.target.value)} placeholder="model" className="input input-bordered input-primary md:w-96" />
                    </div>
                </div>
                {/* 2 */}
                <div className='md:flex md:justify-between md:items-center'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="image" className="input input-bordered input-primary md:w-96" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="price" className="input input-bordered input-primary md:w-96" />
                    </div>
                </div>
                {/* 3 */}
                <div className='md:flex md:justify-between md:items-center'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <input type="text" value={Description} onChange={(e) => setDescription(e.target.value)} placeholder="description" className="input input-bordered input-primary md:w-96" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tag</span>
                        </label>
                        <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} placeholder="tag" className="input input-bordered input-primary md:w-96" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-neutral font-bold text-white">Save</button>
                </div>
            </div>
        </form>
    );
};

export default Form;