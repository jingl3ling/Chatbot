import React, {useState, useEffect} from 'react';
import { useIdleTimer } from 'react-idle-timer'
import Bubble from '../bubble/bubble'
import { useSelector, useDispatch } from 'react-redux'
import { addMessage } from './conversationSlice';

export default function App(){
    const conversation = useSelector((state)=>state.conversation);
    const [remaining, setRemaining] = useState(0)
    const dispatch = useDispatch()

    const onIdle = () => {
        const message = {
            by: 'support',
            context: '[Auto Message]Are you still there? It has been 2 minutes since you were last active.',
            timestamp: new Date().toLocaleString()
        }

        dispatch(addMessage(message));
      }

    const { getRemainingTime } = useIdleTimer({
        onIdle,
        timeout: 120_000,
        throttle: 500
      })
    
    useEffect(() => {
        const interval = setInterval(() => {
            setRemaining(Math.ceil(getRemainingTime() / 1000))
        }, 500)

        return () => {
            clearInterval(interval)
        }
    })

    return(
    <div className='conversation'>
        {conversation?.map((message)=>(
            <Bubble message={message}/>
        ))}
    </div>
    );
}