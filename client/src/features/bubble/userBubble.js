import React from 'react';

export default function App(props){
    console.log(props.context)
    
    return(
        <div className='bubbleContainer'>   
        <div className='userBubble'>  
            <div className='userBubbleBody'>
                {props.context}
            </div> 
            <div className='userBubbleTip'></div>
        </div>
        </div> 
    );
}