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
            <div className='userBubbleContainer'>  
              <div><Avatar><PhotoCamera/></Avatar>
                <div className='userBubble'>  
                    <div className='userBubbleBody'>
                        <ChildComponent/> 
                    </div> 
                    <div className='userBubbleTip'></div>
                </div>
              </div> 
            </div> 
        );
      }
    };
  }