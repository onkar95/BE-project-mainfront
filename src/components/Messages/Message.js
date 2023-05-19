import React, { useContext, useEffect, useRef, useState } from 'react'
import './message.css'
// import girl_profile from '../../Assets/girl_profile.jpg'
// import boy_profile from '../../Assets/boy_profile.jpg'
import profile from '../../Assets/icons/profileicon.png'
import { io } from "socket.io-client";
import axios from 'axios'
import { BASE_URL } from '../util'
import { UserContext } from '../../context'


const Message = () => {

    const { user, Token } = useContext(UserContext)
    const socket = useRef();
    const scrollRef = useRef();
    const [searchMember, setSearchMember] = useState('')
    const [InpMessage, setInpMessage] = useState('')
    const [Messages, setMessages] = useState([])
    const [Members, setMembers] = useState([])
    const [CurrentChatID, setCurrentChatID] = useState()
    const [arrivalMessage, setArrivalMessage] = useState(null);

    useEffect(() => {
        if (user) {
            socket.current = io(BASE_URL);
            socket.current.emit("add-user", user._id);
        }
    }, [user]);

    useEffect(() => {
        if (CurrentChatID !== undefined) {
            console.log(CurrentChatID)
            const handelSelcetChat = (id) => {
                const config = {
                    headers: { 'x-access-token': Token }
                }

                axios.get(`${BASE_URL}/chat/get-message/${id}`, config)
                    .then((data) => {
                        console.log(data.data)
                        setMessages(data.data.response)
                    })
                    .catch((err) => console.log(err))
            }
            handelSelcetChat(CurrentChatID)
        }
        // eslint-disable-next-line
    }, [CurrentChatID])

    useEffect(() => {
        const getMembers = () => {
            // const token = localStorage.getItem('token')
            const config = {
                headers: { 'x-access-token': Token }
            }
            axios.get(`${BASE_URL}/chat/get-members`, config)
                .then((data) => {
                    console.log(data)
                    setMembers(data.data.members)
                    setCurrentChatID(data.data.members[0]?._id)
                })
                .catch((err) => console.log(err))
        }

        getMembers()
        // eslint-disable-next-line
    }, [])

    const handelSendMessage = () => {


        socket.current.emit("send-msg", {
            to: CurrentChatID,
            from: user._id,
            message: InpMessage,
        });

        const config = {
            headers: { 'x-access-token': Token }
        }
        const data = {
            SendToUserID: CurrentChatID,
            message: InpMessage
        }
        axios.post(`${BASE_URL}/chat/send-message`, data, config)
            .then(() => {
                setMessages((Message) => [...Message, { message: InpMessage, from: user._id }])
                setInpMessage('')
            })
            .catch((err) => console.log(err))
    }


    useEffect(() => {
        if (socket.current) {
            socket.current.on("msg-recieve", (data) => {
                setArrivalMessage({ from: data.from, message: data.message });
            });
        }
    }, []);

    useEffect(() => {
        arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [Messages]);
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
                        Members && Members?.map((val, key) => (
                            <div className='member' onClick={() => setCurrentChatID(val._id)}>
                                <img src={profile} alt="profile" />
                                <p>{val.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='messageChat'>
                <div className='messages'>
                    {Messages.length === 0 ?
                        <div>No Messages to show</div>
                        :
                        Messages && Messages?.map((val, key) => (
                            <div className={val.from === user._id ? 'my_message msg' : 'others_msg msg'}>
                                <span className='sp'>
                                </span>

                                <h4>{val.message}</h4>
                            </div>
                        ))}
                </div>
                <div className='message_inp'>
                    <input type='text' className='input' value={InpMessage} onChange={(a) => setInpMessage(a.target.value)} />
                    <button className='button' onClick={() => handelSendMessage()} >Send</button>
                </div>
            </div>

        </div>
    )
}

export default Message