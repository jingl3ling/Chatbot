import React, {Component} from 'react';
import { Avatar } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

export default function App(ChildComponent) {
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = {
        };
      }

      render() {
        return (
            <div className='supportBubbleContainer'>  
              <div><Avatar><PhotoCamera/></Avatar>  
                <div className='supportBubble'>  
                    <div className='supportBubbleTip'></div>
                    <div className='supportBubbleBody'>
                        <ChildComponent/> 
                    </div> 
                </div>
              </div>
            </div> 
        );
      }
    };
  }