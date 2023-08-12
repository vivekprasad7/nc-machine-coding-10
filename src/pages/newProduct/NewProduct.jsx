


import React, { useState } from 'react';
import "./NewProduct.css";
import { Sidebar } from '../../components/sidebar/Sidebar';
import { useAppContext } from '../../contexts/AppContext';

export const NewProduct = () => {
  const { addProduct } = useAppContext();
  const [newProduct, setNewProduct] = useState({
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleAddProduct = () => {
    addProduct(newProduct);
    setNewProduct({
      department: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      sku: "",
      supplier: "",
      delivered: 0,
      imageUrl: "",
    });
  };

  return (
    <div className='new-product'>
      <Sidebar />
      <div className='np-form'>
        <label>
          Department:
          <select
            name="department"
            value={newProduct.department}
            onChange={handleInputChange}
          >
            <option value="">Select Department</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>
        </label>
        
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            placeholder='Name'
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            placeholder='Description'
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            placeholder='0'
          />
        </label>

        <label>
          Stock:
          <input
            type="number"
            name="stock"
            value={newProduct.stock}
            onChange={handleInputChange}
            placeholder='0'
          />
        </label>

        <label>
          SKU:
          <input
            type="text"
            name="sku"
            value={newProduct.sku}
            onChange={handleInputChange}
            placeholder='Product ID'
          />
        </label>

        <label>
          Supplier:
          <input
            type="text"
            name="supplier"
            value={newProduct.supplier}
            onChange={handleInputChange}
            placeholder='Supplier'
          />
        </label>

        <label>
          Delivered:
          <input
            type="number"
            name="delivered"
            value={newProduct.delivered}
            onChange={handleInputChange}
            placeholder='0'
          />
        </label>

        <label>
          ImageUrl:
          <input
            type="text"
            name="imageUrl"
            value={newProduct.imageUrl}
            onChange={handleInputChange}
            placeholder='Image URL'
          />
        </label>

        <button onClick={handleAddProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
};
