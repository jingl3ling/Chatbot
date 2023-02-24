import "../../styles.css"
import UserBubble from '../bubble/userTypingBubble'
import SupportBubble from '../bubble/supportTypingBubble'

function App(){
    return (
        <div className="typing">
          <div className="typing__dot"></div>
          <div className="typing__dot"></div>
          <div className="typing__dot"></div>
        </div>
      );
}

export const UserTyping = UserBubble(App);
export const SupportTyping = SupportBubble(App);