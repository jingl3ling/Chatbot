import React, { useState, useRef }  from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { TextField, Button, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material"
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {UserTyping, SupportTyping} from './features/typing/typing'
import UserInput from './userInput';
import SupportInput from './supportInput';
import Conversation from './features/conversation/conversation'
import "./styles.css"

export default function App(){
    const [isSupportTyping, setSupportTyping] = useState(false);
    const [isUserTyping, setUserTyping] = useState(false);
    const [timeoutID, setTimeoutID] = useState(undefined);
    const [inProp, setInProp] = useState(false);
    const nodeRef = useRef(null);

    const userIsTyping = useSelector((state) => state.typing.user)
    const supportIsTyping = useSelector((state) => state.typing.support)
  
    const handleSupportChange = () => {
        setSupportTyping(true);
    
        clearTimeout(timeoutID);
        const timeID = setTimeout(() => {
            setSupportTyping(false);
        }, 2000);
        setTimeoutID(timeID);
      };

    return(
        <div className="App">

        <div className='chatbox'>
            <Conversation/>

            {userIsTyping ?    
            <UserTyping/>  : null}

            {supportIsTyping ?    
            <SupportTyping/>  : null}
        </div>
        
        <SupportInput/>
        <UserInput/>
      </div>
    );
}