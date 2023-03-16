import React, { useState } from 'react'
import './message.css'
import girl_profile from '../../Assets/girl_profile.jpg'
import boy_profile from '../../Assets/boy_profile.jpg'
import profile from '../../Assets/icons/profileicon.png'


import { members, messages } from '../data/message'


const Message = () => {

    const [searchMember, setSearchMember] = useState('')
    const [InpMessage, setInpMessage] = useState('')


    return (
        <div className='message'>
            <div className='messageSidebar'>
                <div>
                    <input className='input' type='test' value={searchMember}
                        onChange={(a) =>
                            setSearchMember(a.target.value)} />
                </div>
                <div className='personLists' >
                    {
                        members.map((val, key) => (
                            <div className='member'>
                                <img src={profile} alt="profile" />
                                <p>{val.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='messageChat'>


                {messages.map((val, key) => (
                    <div className={val.from === 1 ? 'my_message msg' : 'others_msg msg'}>
                        <img src={val.from === 1 ? girl_profile : boy_profile} alt="profile" />
                        <h4>{val.message}</h4>
                    </div>
                ))

                }
                <div className='message_inp'>
                    <input type='text' className='input' value={InpMessage} onChange={(a) => setInpMessage(a.target.value)} />
                    <button className='button' >Send</button>
                </div>
            </div>

        </div>
    )
}

export default Message