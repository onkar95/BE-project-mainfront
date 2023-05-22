import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { MessageContext } from '../../context';
import profile from '../../Assets/icons/profileicon.png'
import { useEffect } from 'react';
import './message.css'

const MemberList = () => {
    const { Members, setCurrentChatID } = useContext(MessageContext)
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
        // eslint-disable-next-line
    }, [searchMember])

    let memberArray = filteredMembers ? filteredMembers : Members

    return (
        <div className='messageSidebar'>
            <div className='search_box'>
                <input className='search_input' type='test' value={searchMember}
                    onChange={(a) =>
                        setSearchMember(a.target.value)} />
            </div>
            <div className='personLists' >
                {
                    memberArray.length !== 0 ?
                        memberArray.map((val) => (
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