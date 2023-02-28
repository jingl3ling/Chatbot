import React from 'react';
import { Avatar } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

export default function App(props){
    const by = props.message.by;
    const context = props.message.context;
    const time= props.message.timestamp;
    if(by=='user'){
        return(
            <div className='userBubbleContainer'>   
                <Avatar><PhotoCamera/></Avatar>  
                <div className='userTimestamp'>{time}</div>
                <div className='userBubble'> 
                    <div className='userBubbleTip'></div>
                    <div className='userBubbleBody'>
                        {context}
                    </div> 
                </div>

            </div>
        );
    }
    else{
        return (
            <div className='supportBubbleContainer'> 
            <Avatar><PhotoCamera/></Avatar>  
                <div className='supportTimestamp'>{time}</div>
                <div className='supportBubble'> 
                <div className='supportBubbleTip'></div>
                    <div className='supportBubbleBody'>
                        {context}
                    </div> 
                </div>
            </div>
        );        
    }
}