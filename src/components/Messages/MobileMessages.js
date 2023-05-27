import React, { useContext, useEffect, useRef, useState } from 'react'
import './message.css'
import { io } from "socket.io-client";
import axios from 'axios'
import { BASE_URL } from '../util'
import { DashboardContest, MessageContext, UserContext } from '../../context'
import Loading from '../utils/Loader/Loading';
import MemberList from './MemberList';


const MobileMessages = () => {
    const { user, Token } = useContext(UserContext)
    const { Messages, setMessages, mobileChatClicked, CurrentChatID, setMobileChatClicked } = useContext(MessageContext)

    const socket = useRef();
    const messagesRef = useRef();
    const [InpMessage, setInpMessage] = useState('')
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const { innerWidth } = useContext(DashboardContest)

    useEffect(() => {
        if (user) {
            socket.current = io(BASE_URL);
            socket.current.emit("add-user", user._id);
        }
    }, [user]);


    const handelSendMessage = () => {

        if (InpMessage !== "") {
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
        // eslint-disable-next-line
    }, [arrivalMessage]);

    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
        // eslint-disable-next-line
    }, [Messages]);

    const handelMobileMessages = () => {
        if (innerWidth < 400) {
            // navigate(`/chat/${id}`)
            setMobileChatClicked(false)
        }
    }
    return (
        <div className={mobileChatClicked ? "visible" : "none"} >
            <button className='back_btn' onClick={handelMobileMessages} >back</button>
            <div className='mobile_chat_box' >

                <div className='messages' ref={messagesRef}>
                    {Messages?.length === 0 ?
                        user?._id === undefined ? <div>Login to see your messages</div>
                            :
                            <div>No Messages to show</div>
                        :
                        Messages && Messages?.map((val) => (
                            <div className={val.from === user?._id ? 'my_message msg' : 'others_msg msg'}>
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

export default MobileMessages