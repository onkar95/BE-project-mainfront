/* eslint-disable */
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import register from '../../Assets/register.png'
import { BASE_URL } from '../util'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'

const Register = () => {
    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [Role, setRole] = useState()

    const handleChange = (event, value) => {
        setRole(value)
    };
    const handelSubmit = () => {
        const dataObjs = {
            username: Name,
            email: Email,
            password: Password,
            Role
        }

        console.log(dataObjs)
        axios.post(`${BASE_URL}/api/signup`, dataObjs)
            .then((data) => {
                console.log(data)
                alert("registered succesfully")
            })
            .catch((err) => console.log(err))
    }


    return (
        <div className='login'>
            <div className='login_info'>
                <img className='auth_img' src={register} alt="login" />
            </div>


            <div className='login_form'>

                <section className='form_heading'>
                    <h4>Create A New Account</h4>
                    <p>Already registered ?<Link to="/login">login here</Link></p>
                </section>

                <div className='form'>
                    <section>
                        <label className='label'>Enter Your name</label>
                        <input className='input' type="text" value={Name} onChange={(a) => setName(a.target.value)} />
                    </section>
                    {/* <section className='btn_group'>
                        <label className='label' style={{ marginBottom: "8px" }} >What Are You Looking For?</label>
                        <ToggleButtonGroup
                            color="primary"
                            value={Role}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            fullWidth
                            style={{ width: "98%" }}
                        >
                            <ToggleButton className='b1 gp_btn' value="candidate" style={{ marginRight: "8px", marginTop: "8px" }}>I am looking for Job</ToggleButton>
                            <ToggleButton className='b2 gp_btn' value="company" style={{ marginRight: "8px", marginTop: "8px" }}>I am looking to heir</ToggleButton>
                        </ToggleButtonGroup>
                    </section> */}
                    <section>
                        <label className='label'>Enter Your email</label>
                        <input className='input' type="email" value={Email}
                            onChange={(a) => setEmail(a.target.value)} />
                    </section>
                    <section>
                        <label className='label'> Password</label>
                        <input className='input' type='password' value={Password}
                            onChange={(a) => setPassword(a.target.value)} />
                    </section>
                    <section>

                        <button className='auth_button' onClick={handelSubmit}>Create An Account</button>
                    </section>
                </div>
            </div>

        </div>
    )
}


export default Register