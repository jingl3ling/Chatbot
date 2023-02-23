import React, { useState, useRef }  from 'react';
import { TextField, Button, IconButton} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material"
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Dots from './Dots'
import "./styles.css"

export default function App(){
    const [isTyping, setTyping] = useState(false);
    const [timeoutID, setTimeoutID] = useState(undefined);
    const [inProp, setInProp] = useState(false);
    const nodeRef = useRef(null);
  
    const handleChange = () => {
      setTyping(true);
  
      clearTimeout(timeoutID);
      const timeID = setTimeout(() => {
        setTyping(false);
      }, 2000);
      setTimeoutID(timeID);
    };

    return(
        <div className="App">
        {isTyping ? <Dots/> : null}
        <IconButton color="primary" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
            </IconButton>
            <TextField onChange={handleChange} placeholder="Please enter content" />
        <Button>Submit</Button>
      </div>
    );
}