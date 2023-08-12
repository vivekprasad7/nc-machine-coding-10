import React from 'react'
import "./Home.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { useAppContext } from '../../contexts/AppContext'

export const Home = () => {
    const { totalStock, totalDelivered, lowStockItems} = useAppContext();
  return (
    <div className='home'>
        <Sidebar/>
        <div className='dashboard'>

            <div className='dashboard-unit'>
                <h3>{totalStock}</h3>
                <h4>Total Stock</h4>
            </div>

            <div className='dashboard-unit'>
                <h3>{totalDelivered}</h3>
                <h4>Total Delivered</h4>
            </div>

            <div className='dashboard-unit'>
                <h3>{lowStockItems}</h3>
                <h4>Low Stock Items</h4>
            </div>

        </div>

    </div>
  )
}
