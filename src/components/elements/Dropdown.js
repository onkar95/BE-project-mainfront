import React, { useContext } from 'react'
import './drop.css'
import ProfileContext from '../../context/profileContext';

const Dropdown = ({ data, type }) => {


    const { handelAdd, selectedDropdownVal, setSelectedDropdownVal } = useContext(ProfileContext)

    return (
        <select className='option' onChange={(a) => handelAdd(a, type)}>
            <option className='option_val' defaultValue='select' selected>select</option>
            {data.map((val) => (
                <option className='option_val' defaultValue='select' >{val}</option>
            ))}
        </select>
    )
}

export default Dropdown