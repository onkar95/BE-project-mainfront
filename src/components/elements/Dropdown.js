import React, { useContext } from 'react'
import './drop.css'
import ProfileContext from '../../context/profileContext';

const Dropdown = ({ data, type }) => {


    const { handelAdd } = useContext(ProfileContext)


    return (
        <select className='option' onChange={(a) => handelAdd(a, type)}>
            {data.map((val) => (
                <option className='option_val' >{val}</option>
            ))}
        </select>
    )
}

export default Dropdown