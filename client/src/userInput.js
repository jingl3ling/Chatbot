import React, { useState, useRef }  from 'react';
import { TextField, Button, IconButton} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import store from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { userTyping, userNotTyping} from './features/typing/typingSlice'
import { addMessage } from './features/conversation/conversationSlice';

export default function App(props){
    const [timeoutID, setTimeoutID] = useState(undefined);
    const userIsTyping = useSelector((state) => state.typing.user)
    const dispatch = useDispatch()
    const state = store.getState();

    const valueRef = useRef('')

    const handleUserChange = (e) => {
        console.log('key:', e.target.value);
        dispatch(userTyping());
    
        clearTimeout(timeoutID);
        const timeID = setTimeout(() => {
            dispatch(userNotTyping());
        }, 2000);
        setTimeoutID(timeID);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const context = valueRef.current.value
        const message = {
            by: 'user',
            context: context,
            timestamp: new Date().toLocaleString()
        }
        dispatch(userNotTyping());
        dispatch(addMessage(message));

        valueRef.current.value = ''
    }

    return(
        <div>
        <form className='UserInputForm' onSubmit={handleSubmit}>
            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
                </IconButton>
                <TextField inputRef={valueRef} 
                onChange={handleUserChange} 
                placeholder="Please enter content" 
                inputProps={{ autoComplete: 'off' }}/>
            <Button type='submit'>Submit</Button>
        </form>
        </div>
    )
}