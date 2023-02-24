import React, { useState, useRef }  from 'react';
import { TextField, Button, IconButton} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import store from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { supportTyping, supportNotTyping} from './features/typing/typingSlice'
import { addMessage } from './features/conversation/conversationSlice';

export default function App(props){
    const [timeoutID, setTimeoutID] = useState(undefined);
    const supportIsTyping = useSelector((state) => state.typing.support)
    const dispatch = useDispatch()
    const state = store.getState();
    console.log('state:',state)

    const valueRef = useRef('')

    const handleChange = () => {
        dispatch(supportTyping());
    
        clearTimeout(timeoutID);
        const timeID = setTimeout(() => {
            dispatch(supportNotTyping());
        }, 2000);
        setTimeoutID(timeID);
    };

    const handleSubmit = (e) => {
        const context = valueRef.current.value
        const message = {
            by: 'support',
            context: context,
            time: Date()
        }
        dispatch(supportNotTyping());
        dispatch(addMessage(message));

        valueRef.current.value = ''
    }

    return(
        <div>
        <form className='SupportInputForm'>
            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
                </IconButton>
                <TextField inputRef={valueRef} onChange={handleChange} placeholder="Please enter content" />
            <Button onClick={handleSubmit}>Submit</Button>
        </form>
        </div>
    )
}