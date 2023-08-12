import React from 'react'
import "./Departments.css"
import { Sidebar } from '../../components/sidebar/Sidebar'

export const Departments = () => {
  return (
    <div className='departments'>
        <Sidebar/>
        <div className='department-area'>

            <div className='department-unit'>
                <h2>Kitchen</h2>
            </div>

            <div className='department-unit'>
                <h2>Clothing</h2>
            </div>

            <div className='department-unit'>
                <h2>Toys</h2>
            </div>


        </div>

    </div>
  )
}
