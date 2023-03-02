import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Input, TextField, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import img from "../img/img.jpg"
import back_img from "../img/sign_up_page_background_graphic.svg"
import CarouselCard from '../components/CarouselCard'
import { Link } from 'react-router-dom'
import { items } from '../data/carouselData'

const Login = () => {



    const [alignment, setAlignment] = React.useState('');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <div className='login'>
            <div className='login_info'
                style={{
                    backgroundImage: `url(${back_img})`, backgroundRepeat: "no-repeat",
                    backgroundSize: "contain", objectFit: "contain"
                }}
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
                    <h4>Login To Your Account</h4>
                    <p>Dont have an Account?<Link to="/register">Signup</Link></p>
                </section>

                <div className='form'>


                    <section>
                        <label>Enter Your email</label>
                        <input className='input' type="email" />
                    </section>
                    <section>
                        <label> Password</label>
                        <input className='input' type='password' />
                    </section>

                    <section>
                        <p>Forget password?<Link to="#">reset password</Link></p>
                        <Button variant="contained">Login</Button>
                    </section>
                </div>
            </div>

        </div>
    )
}


export default Login