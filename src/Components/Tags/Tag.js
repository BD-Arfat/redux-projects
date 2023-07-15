import React from 'react';

const Tag = ({product}) => {
    return (
        <div>
            <button className="btn btn-sm btn-neutral px-8 text-white">{product.tag}</button>
        </div>
    );
};

export default Tag;