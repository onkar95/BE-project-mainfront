import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { MessageContext } from '../../context';
import profile from '../../Assets/icons/profileicon.png'

const MemberList = () => {
    const { Members, CurrentChatID, setCurrentChatID, } = useContext(MessageContext)
    const [searchMember, setSearchMember] = useState('')


    return (
        <div className='messageSidebar'>
            <div>
                <input className='input' type='test' value={searchMember}
                    onChange={(a) =>
                        setSearchMember(a.target.value)} />
            </div>
            <div className='personLists' >
                {
                    Members && Members?.map((val, key) => (
                        <div className='member' onClick={() => setCurrentChatID(val._id)}>
                            <img src={profile} alt="profile" />
                            <p>{val.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MemberList