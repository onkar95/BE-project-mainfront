
import React, { useContext } from 'react'
import Dropdown from '../elements/Dropdown'
import './profilesections.css'
import ProfileContext from '../../context/profileContext'
import { EmployeeSizeData, LocationsData, remoteOfficeData, SalaryRangeData, TypeOfJobsData } from '../data/DropdownData'
import axios from 'axios'
import { BASE_URL } from '../util'

const Preferences = () => {
    const { EmployeeSize, Locations, remoteOffice, SalaryRange, TypeOfJobs } = useContext(ProfileContext)
    const handelSave = () => {
        const dataobj = {
            EmployeeSize, Locations, remoteOffice, SalaryRange, TypeOfJobs
        }
        console.log(dataobj)

        axios.post(`${BASE_URL}/Education`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err.message))
    }

    return (
        <div className='preferences'>
            <div className='fields'>
                <p>What Type of Job are you seeking?</p>
                <Dropdown data={TypeOfJobsData} type='TypeOfJobs' />
            </div>
            <div className='fields'>
                <p>Do you prefer Remote or Office Job?</p>
                <Dropdown data={remoteOfficeData} type='remoteOffice' />

            </div>
            <div className='fields'>
                <p>Select Job Location</p>
                <Dropdown data={LocationsData} type='Locations' />

            </div>
            <div className='fields'>
                <p>What size of the companies you prefer most?</p>
                <Dropdown data={EmployeeSizeData} type='EmployeeSize' />
            </div>
            <div className='fields'>
                <p>Select Desired Salary Range</p>
                <Dropdown data={SalaryRangeData} type='SalaryRange' />
            </div>
            <div className='skills_btn'>
                <button className='btn_1' onClick={() => handelSave()} >Save</button>
                <button className='btn_2'>Skip</button>
            </div>
        </div>
    )
}

export default Preferences