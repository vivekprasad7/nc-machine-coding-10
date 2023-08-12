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
                <h3>Total Stock</h3>
            </div>

            <div className='dashboard-unit'>
                <h3>{totalDelivered}</h3>
                <h3>Total Delivered</h3>
            </div>

            <div className='dashboard-unit'>
                <h3>{lowStockItems}</h3>
                <h3>Low Stock Items</h3>
            </div>

        </div>

    </div>
  )
}
