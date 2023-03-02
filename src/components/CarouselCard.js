import React from 'react'
import img from "../img/img.jpg"

const CarouselCard = ({ item }) => {

    return (
        <div className='carousel' >
            <div className='carousel_div'>
                <section className='per_info'>
                    <section className='per_info_img'>
                        <img src={img} alt="loading" />

                    </section>
                    <section className='info' >
                        <p>{item?.name},</p>
                        <p>{item.description}</p>
                    </section>
                </section>
                <section className='description'>

                    {/* <p>{item.name}</p> */}
                    <div>{item.experience} </div>
                </section>


            </div>
        </div>
    )
}

export default CarouselCard