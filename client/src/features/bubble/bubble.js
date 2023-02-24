import React from 'react';

export default function App(props){
    console.log(props)
    if(props.by=='user'){
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
    else{
        return (
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
}