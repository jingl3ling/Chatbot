import React, {Component} from 'react';

export default function App(ChildComponent) {
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = {
        };
      }

      render() {
        return (
            <div className='bubbleContainer'>   
                <div className='userBubble'>  
                    <div className='userBubbleBody'>
                        <ChildComponent/> 
                    </div> 
                    <div className='userBubbleTip'></div>
                </div>
            </div> 
        );
      }
    };
  }