import React from 'react'
import "./Departments.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../contexts/AppContext'

export const Departments = () => {
    const {dispatch} = useAppContext();
    const navigate = useNavigate({});
  return (
    <div className='departments'>
        <Sidebar/>
        <div className='department-area'>

            <div 
            onClick={() => {
                dispatch({ type: "FILTER_BY_DEPARTMENT", payload: "Kitchen" });
                navigate("/products")
            }}
            className='department-unit' >
                <h2>Kitchen</h2>
            </div>

            <div 
            onClick={() => {
                dispatch({ type: "FILTER_BY_DEPARTMENT", payload: "Clothing" });
                navigate("/products")
            }}
            className='department-unit'>
                <h2>Clothing</h2>
            </div>

            <div
            onClick={() => {
                dispatch({ type: "FILTER_BY_DEPARTMENT", payload: "Toys" });
                navigate("/products")
            }}
            className='department-unit'>
                <h2>Toys</h2>
            </div>


        </div>

    </div>
  )
}
