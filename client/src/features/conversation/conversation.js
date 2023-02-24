import React from 'react';
import Bubble from '../bubble/bubble'
import { useSelector, useDispatch } from 'react-redux'

export default function App(){
    const conversation = useSelector((state)=>state.conversation);
    console.log('here',conversation)
    return(
    <div>
        {conversation?.map(({by,context,timestamp})=>(
            // <div>{{by}=='user'? <UserBubble context={context}/>:<SupportBubble context={context}/>}</div>
            <Bubble by={by} context={context}/>
        ))}
    </div>
    );
}