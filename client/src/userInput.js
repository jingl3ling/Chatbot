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
    console.log('state:',state)

    const valueRef = useRef('')

    const handleUserChange = () => {
        dispatch(userTyping());
    
        clearTimeout(timeoutID);
        const timeID = setTimeout(() => {
            dispatch(userNotTyping());
        }, 2000);
        setTimeoutID(timeID);
    };

    const handleSubmit = (e) => {
        const context = valueRef.current.value
        const message = {
            by: 'user',
            context: context,
            time: Date()
        }
        dispatch(userNotTyping());
        dispatch(addMessage(message));

        valueRef.current.value = ''
    }

    return(
        <div>
        <form className='UserInputForm'>
            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
                </IconButton>
                <TextField inputRef={valueRef} onChange={handleUserChange} placeholder="Please enter content" />
            <Button onClick={handleSubmit}>Submit</Button>
        </form>
        </div>
    )
}