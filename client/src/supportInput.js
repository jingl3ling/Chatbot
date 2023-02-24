import React, { useState, useRef }  from 'react';
import { TextField, Button, IconButton} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import store from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { supportTyping, supportNotTyping} from './features/typing/typingSlice'

export default function App(props){
    const [timeoutID, setTimeoutID] = useState(undefined);
    const supportIsTyping = useSelector((state) => state.typing.support)
    const dispatch = useDispatch()
    const state = store.getState();
    console.log('state:',state)

    const handleChange = () => {
        dispatch(supportTyping());
    
        clearTimeout(timeoutID);
        const timeID = setTimeout(() => {
            dispatch(supportNotTyping());
        }, 2000);
        setTimeoutID(timeID);
    };

    return(
        <div>
        <form className='SupportInputForm'>
            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
                </IconButton>
                <TextField onChange={handleChange} placeholder="Please enter content" />
            <Button>Submit</Button>
        </form>
        </div>
    )
}