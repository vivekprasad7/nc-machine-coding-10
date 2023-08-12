import React, { useState } from "react";
import "./Products.css";
import { useAppContext } from "../../contexts/AppContext";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

export const Products = () => {

    const { newData, filteredProducts, inventoryData, dispatch, initialState } = useAppContext();
    const [departmentFilter, setDepartmentFilter] = useState(
        initialState.departmentFilter
    );
    const [onlyLowStock, setOnlyLowStock] = useState(initialState.onlyLowStock);
    const [sortBy, setSortBy] = useState(initialState.sortBy);

    const navigate = useNavigate();

    const handleDepartmentChange = (event) => {
        const newDepartmentFilter = event.target.value;
        setDepartmentFilter(newDepartmentFilter);
        dispatch({ type: "FILTER_BY_DEPARTMENT", payload: newDepartmentFilter });
    };

    const handleLowStockChange = () => {
        const newOnlyLowStock = !onlyLowStock;
        setOnlyLowStock(newOnlyLowStock);
        dispatch({ type: "FILTER_BY_STOCK", payload: newOnlyLowStock });
    };

    const handleSortChange = (event) => {
        const newSortBy = event.target.value;
        setSortBy(newSortBy);
        dispatch({ type: "SORT", payload: newSortBy });
    };

    return (
        <div className="products">
            <Sidebar />
            <div className="products-area">
                <div className="p-top">
                    <div className="p-title">
                        <h3>Products</h3>
                    </div>
                    <div className="p-select">
                        
                        <select value={departmentFilter} onChange={handleDepartmentChange}>
                            <option value="All">All </option>
                            <option value="Kitchen">Kitchen</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Toys">Toys</option>
                        </select>
                    </div>

                    <div className="p-checkbox">
                        <label>
                            <input
                                type="checkbox"
                                checked={onlyLowStock}
                                onChange={handleLowStockChange}
                            />
                            Only Low Stock Items
                        </label>
                    </div>

                    <div className="name">
                        <select value={sortBy} onChange={handleSortChange}>
                          
                            <option>Name</option>
                            <option>Price</option>
                            <option>Stock</option>
                        </select>
                    </div>

                    <div className="button">
                        <button onClick={() => navigate("/new-product")}>New</button>
                    </div>
                </div>

                <div className="p-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Supplier</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newData.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <img
                                            onClick={() => navigate(`/details/${item.id}`)}
                                            style={{ width: "50px" }}
                                            src={item.imageUrl}
                                            alt={item.name}
                                        />
                                    </td>
                                    <td style={{cursor:"pointer"}} onClick={() => navigate(`/details/${item.id}`)}>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>${item.price}</td>
                                    <td>{item.stock}</td>
                                    <td>{item.supplier}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

