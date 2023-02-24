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
                <div className='supportBubble'>  
                <div className='supportBubbleTip'></div>
                    <div className='supportBubbleBody'>
                        <ChildComponent/> 
                    </div> 
                </div>
            </div> 
        );
      }
    };
  }