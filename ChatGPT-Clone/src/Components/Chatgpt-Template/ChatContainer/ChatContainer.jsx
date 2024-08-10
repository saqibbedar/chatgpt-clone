import { assets, openAIURL, authorURL } from "../../../assets/assets";
import { Link } from "react-router-dom";
import Chats from "../Chats/Chats";
import { useContext, useState } from "react";
import { ChatGPTContext } from "../../../Context/ChatGPTContext";

const ChatContainer = ({isMenuOpen, setIsMenuOpen}) => {

  const {sendMsgToOpenAI} = useContext(ChatGPTContext);

  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([{}]); 

  const handleSend = async () => {
    if(prompt != ""){
      setMessages(prev => [...prev, {type: "client", text: prompt}]);
      const response = await sendMsgToOpenAI(prompt);
      setMessages(prev => [...prev, {type: "gpt", text: response}]);

      setPrompt("");
    }
  }

  const handleEnter = (e) => {
    if(e.key === "Enter" && prompt != "") {
      handleSend();
      setPrompt("");
    };
  }

  return (

    <div className="chatContainer">

      <div className="chat-header py-10 relative flex items-center justify-between px-[1.5rem]">

        <div className="absolute active:scale-[.9] transition-all cursor-pointer" onClick={()=>setIsMenuOpen(true)}>
          <img src={assets.hamburger} alt="chatgpt menu" />
        </div>

        <div className="login-area absolute right-0 flex gap-3 pr-[1.5rem]">
          <Link to={openAIURL.login} className="text-sm border-1 border-[#0000] bg-[white] px-4 py-[.4rem] rounded-full">Log in</Link>
          <Link to={openAIURL.signUp} className="text-sm border border-gptBorderColor px-4 py-[.4rem] rounded-full hover:bg-gptBorderColor text-[white]">Sign up</Link>
        </div>
        
      </div>

      <div className={`chat-body w-[100%] h-[calc(100dvh-5rem)] ${isMenuOpen ? 'w-[calc(100%-20rem)]': 'w-[100%]'} right-0 absolute transition-all max-[867px]:w-[100%] flex flex-col justify-between`}>

        <div className={`chats flex flex-col gap-7 overflow-y-auto py-5 px-[18rem] h-full ${isMenuOpen && 'px-[1.8rem]'} transition-all`}>
          {
            messages.length > 0 &&
            messages.map((msg, index) =>
              <Chats 
            key={index} 
            isClient={msg.type === "client"}
            ClientQuery={msg.type === "client" ? msg.text : undefined}
            isGPT={msg.type === "gpt"}
            gptResponse={msg.type === "gpt" ? msg.text : undefined}
            />) 
          }
        </div>

        <div className={`chat-footer flex flex-col gap-3 px-[18rem] ${isMenuOpen && 'px-[1.8rem]'} mb-1 transition-all`}>

          <div className="input-area flex justify-between items-center bg-gptInputBg w-[100%] rounded-full overflow-hidden">

            <input className="text-gptColor/[.9] resize-none font-light w-full py-[1rem] px-[1.3rem] bg-[transparent] outline-none border-none"
            placeholder="Message ChatGPT"
            value={prompt}
            onChange={(e)=> setPrompt(e.target.value)}
            onKeyDown={handleEnter}
            />
            <button className="mr-5 bg-gptColor h-[fit-content] rounded-[50%]" onClick={handleSend}><img src={assets.send} alt="" /></button>

          </div>

          <p className="text-sm text-gptColor text-center font-light">Made with ❤️ by <Link to={authorURL.url}>Saqib Bedar</Link></p>

        </div>

      </div>
    </div>
  )
}

export default ChatContainer
