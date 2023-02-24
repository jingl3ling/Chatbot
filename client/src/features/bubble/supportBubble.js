import React from 'react';

export default function App(props){
    console.log(props.context)
    return(
        <div className='bubbleContainer'>   
        <div className='supportBubble'>  
        <div className='supportBubbleTip'></div>
            <div className='supportBubbleBody'>
                {props.context}
            </div> 
        </div>
        </div> 
    );
}