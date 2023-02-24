import React, { useState, useRef }  from 'react';
import { TextField, Button, IconButton} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import store from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { userTyping, userNotTyping} from './features/typing/typingSlice'

export default function App(props){
    const [timeoutID, setTimeoutID] = useState(undefined);
    const userIsTyping = useSelector((state) => state.typing.user)
    const dispatch = useDispatch()
    const state = store.getState();
    console.log('state:',state)

    const handleUserChange = () => {
        dispatch(userTyping());
    
        clearTimeout(timeoutID);
        const timeID = setTimeout(() => {
            dispatch(userNotTyping());
        }, 2000);
        setTimeoutID(timeID);
    };

    return(
        <div>
        <form className='UserInputForm'>
            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
                </IconButton>
                <TextField onChange={handleUserChange} placeholder="Please enter content" />
            <Button>Submit</Button>
        </form>
        </div>
    )
}