import SideBar from "./SideBar/SideBar"
import ChatContainer from "./ChatContainer/ChatContainer"
import { useState } from "react"

const ChatgptContainer = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="gpt-container">
      <ChatContainer setIsMenuOpen={setIsMenuOpen}/>
      <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    </div>
  )
}

export default ChatgptContainer
