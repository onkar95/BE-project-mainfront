import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { MessageContext } from '../../context';
import profile from '../../Assets/icons/profileicon.png'
import { memo } from 'react';
import { useEffect } from 'react';

const MemberList = () => {
    const { Members, setCurrentChatID, setMembers } = useContext(MessageContext)
    const [searchMember, setSearchMember] = useState('')
    const [filteredMembers, setfilteredMembers] = useState('')

    const filterMember = () => {
        const findMember = Members.filter((key) => {
            return key.name.includes(searchMember) || key.email.includes(searchMember)
        })
        console.log(findMember)
        setfilteredMembers(findMember)
    }

    useEffect(() => {
        filterMember()
    }, [searchMember])

    let memberArray = filteredMembers ? filteredMembers : Members

    return (
        <div className='messageSidebar'>
            <div>
                <input className='input' type='test' value={searchMember}
                    onChange={(a) =>
                        setSearchMember(a.target.value)} />
            </div>
            <div className='personLists' >
                {
                    memberArray.length !== 0 ?
                        memberArray.map((val, key) => (
                            <div className='member' onClick={() => setCurrentChatID(val._id)}>
                                <img src={profile} alt="profile" />
                                <p>{val.name}</p>
                            </div>
                        ))
                        :
                        <div className='member'> no match</div>
                }
            </div>
        </div>
    )
}

export default MemberList