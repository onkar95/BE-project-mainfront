import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Input, TextField, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import img from "../img/img.jpg"
import CarouselCard from '../components/CarouselCard'
import { Link } from 'react-router-dom'
import { items } from '../data/carouselData'

const Register = () => {


    const [alignment, setAlignment] = React.useState('');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <div className='login'>
            <div className='login_info'
            // style={{
            //     backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat",
            //     backgroundSize: "contain", objectFit: "contain"
            // }}
            >
                <section className='logo'>
                    <h2>Company logo</h2>
                </section>
                <section className='middle_info'>
                    <h2>get your Dream job</h2>
                    <p>get your Dream job Tya madhe test admin questions upload karnar
                        Tya test test tables madhun data fetch karun user la dakhvaTya madhe test admin questions upload karnar
                    </p>
                </section>

                <Carousel  >
                    {
                        items.map((item, i) =>
                            <CarouselCard key={i} item={item} />
                        )
                    }
                </Carousel>

            </div>

            <div className='login_form'>

                <section className='form_heading'>
                    <h4>Create A New Account</h4>
                    <p>Already registered ?<Link to="/login">login here</Link></p>
                </section>

                <div className='form'>
                    <section>
                        <label>Enter Your name</label>
                        <input className='input' type="text" />
                    </section>
                    <section>
                        <label style={{ marginBottom: "8px" }} >What Are You Looking For?</label>
                        <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            fullWidth
                            style={{ width: "98%" }}
                        >
                            <ToggleButton value="web" style={{ marginRight: "8px", marginTop: "8px" }}>I am looking for Job</ToggleButton>
                            <ToggleButton value="android" style={{ marginRight: "8px", marginTop: "8px" }}>I am looking to heir</ToggleButton>
                        </ToggleButtonGroup>
                    </section>
                    <section>
                        <label>Enter Your email</label>
                        <input className='input' type="email" />
                    </section>
                    <section>
                        <label> Password</label>
                        <input className='input' type='password' />
                    </section>
                    <section>

                        <Button variant="contained">Register</Button>
                    </section>
                </div>
            </div>

        </div>
    )
}


export default Register