import React, { useState, useRef }  from 'react';
import { TextField, Button, IconButton} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

export default function App(props){
    return(
        <div>
            <IconButton color="primary" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
            </IconButton>
            <TextField onChange={props.handleChange()} placeholder="Please enter content" />
            <Button>Submit</Button>
        </div>
    )
}