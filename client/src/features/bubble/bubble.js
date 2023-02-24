import React from 'react';
import { Avatar } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

export default function App(props){
    console.log(props)
    if(props.by=='user'){
        return(
            <div className='userBubbleContainer'>   
                <div><Avatar><PhotoCamera/></Avatar>  
                <div className='userBubble'> 
                    <div className='userBubbleBody'>
                        {props.context}
                    </div> 
                    <div className='userBubbleTip'></div>
                </div>
            </div> 
            </div>
        );
    }
    else{
        return (
            <div className='bubbleContainer'> 
                <div><Avatar><PhotoCamera/></Avatar>  
                <div className='supportBubble'> 
                <div className='supportBubbleTip'></div>
                    <div className='supportBubbleBody'>
                        {props.context}
                    </div> 
                </div>
            </div>  
            </div>
        );        
    }
}