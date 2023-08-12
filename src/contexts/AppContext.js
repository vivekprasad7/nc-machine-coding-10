import { createContext, useContext, useReducer, useState } from "react";
import { data } from "../api/data";
import { reducer } from "../reducers/productReducer";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    // const [inventoryData, setInventoryData] = useState(data)

    const storedInventoryData = localStorage.getItem("inventoryData");
    const initialInventoryData = storedInventoryData
      ? JSON.parse(storedInventoryData)
      : data;
    const [inventoryData, setInventoryData] = useState(initialInventoryData);
  
  
    const addProduct = (productData) => {
      const updatedInventoryData = [...inventoryData, productData];
      setInventoryData(updatedInventoryData);
      localStorage.setItem("inventoryData", JSON.stringify(updatedInventoryData));
    };


    const { totalStock, totalDelivered, lowStockItems} = inventoryData.reduce((acc, curr) => {
        acc.totalDelivered = curr.delivered + acc.totalDelivered;
        acc.totalStock = curr.stock + acc.totalStock;
        acc.lowStockItems = curr.stock <= 10 ? acc.lowStockItems + 1 : acc.lowStockItems;
        return acc;
    }, {totalStock :0, totalDelivered:0, lowStockItems: 0})


    const initialState = {
        departmentFilter:"All",
        onlyLowStock:false,
        sortBy:"",
    }


    const [state, dispatch] = useReducer(reducer, initialState);

    let filteredProducts;

    const filterProducts = () => {
        let filteredProducts = inventoryData;

        if (state?.departmentFilter !== "All"){
            filteredProducts = filteredProducts.filter((item) => item.department === state?.departmentFilter)
        }

        if (state?.onlyLowStock){
            filteredProducts = filteredProducts.filter((item) => item.stock <= 10)
        }

        if (state?.sortBy.length !== 0){

            if (state?.sortBy === "Name"){
                filteredProducts = filteredProducts.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            }

            if (state?.sortBy === "Price"){
                filteredProducts = filteredProducts.sort((a,b) => a.price - b.price)
            }

            if (state?.sortBy === "Stock"){
                filteredProducts = filteredProducts.sort((a,b) => a.stock - b.stock)
            }
           
        }

        return filteredProducts;


    }

    const newData = filterProducts();


    return(
        <AppContext.Provider value={{
            inventoryData,
            setInventoryData,
            totalStock,
            totalDelivered,
            lowStockItems,
            initialState,
            filteredProducts,
            state,
            dispatch,
            newData,
            addProduct,
            
           
        }}>{children}</AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)