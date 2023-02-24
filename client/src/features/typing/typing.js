import "../../styles.css"
import userBubble from '../bubble/userBubble'
import supportBubble from '../bubble/supportBubble'

function App(){
    return (
        <div className="typing">
          <div className="typing__dot"></div>
          <div className="typing__dot"></div>
          <div className="typing__dot"></div>
        </div>
      );
}

export const UserTyping = userBubble(App);