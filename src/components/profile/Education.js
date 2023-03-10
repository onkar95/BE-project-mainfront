
import axios from 'axios';
import React, { useState } from 'react'
import { BASE_URL } from '../util';

const Education = () => {
    const dateToday = new Date().toISOString().slice(0, 10);
    const [Degree, setDegree] = useState('')
    const [College, setCollege] = useState('')
    const [DateFrom, setDateFrom] = useState(new Date().toISOString().slice(0, 10))
    const [DateTo, setDateTo] = useState(new Date().toISOString().slice(0, 10))
    const [Description, setDescription] = useState('')


    const handelSave = () => {
        const dataobj = {
            Degree,
            College,
            DateFrom,
            DateTo,
            // Description
        }
        console.log(dataobj)

        axios.post(`${BASE_URL}/Education`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err.message))
    }

    return (
        <div className='education'>
            <div className='form_itm' >
                <label className='label'>Enter Degree</label>
                <input className='input' type='text' value={Degree} onChange={((a) => setDegree(a.target.value))} />
            </div>
            <div className='form_itm' >
                <label className='label'>Enter College Name</label>
                <input className='input' type='text' value={College} onChange={((a) => setCollege(a.target.value))} />
            </div>
            <div className='form_itm' >
                <label className='label'>Start Date and End Date</label>
                <div className='date_inp'>
                    <input className='input date' type='date' value={DateFrom} onChange={(a) => setDateFrom(a.target.value)} max={DateTo} />
                    <input className='input date' type='date' value={DateTo} onChange={(a) => setDateTo(a.target.value)} max={dateToday} min={DateFrom} />
                </div>
            </div>
            {/* <div className='form_itm' >
                <label className='label'>Enter Job Description</label>
                <input className='input' type='text' value={Description} onChange={((a) => setDescription(a.target.value))} />
            </div> */}
            <div className='edu_btn'>
                <button className='btn_1' onClick={() => handelSave()} >add</button>
                <button className='btn_2'>add</button>
            </div>
        </div>
    )
}

export default Education