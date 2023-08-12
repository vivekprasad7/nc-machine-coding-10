

import React, { useState, useEffect } from 'react';
import "./Details.css";
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';

export const Details = () => {
    const {inventoryData} = useAppContext();
  const [singleProduct, setSingleProduct] = useState({});
  const { pID } = useParams();

  useEffect(() => {
    
    const foundProduct = inventoryData.find((product) => +product.id === +pID);

    if (foundProduct) {
      setSingleProduct(foundProduct);
    }
  }, [pID]);

  return (
    <div className='details'>
      <h2>Product Details</h2>
      <div className='product-info'>
        <img src={singleProduct?.imageUrl} alt={singleProduct.name} />
        <div className='details-content'>
          <h3>{singleProduct?.name}</h3>
          <p>{singleProduct?.description}</p>
          <p>Price: ${singleProduct?.price}</p>
          <p>Stock: {singleProduct?.stock}</p>
          <p>SKU: {singleProduct?.sku}</p>
          <p>Supplier: {singleProduct?.supplier}</p>
        </div>
      </div>
    </div>
  );
};

