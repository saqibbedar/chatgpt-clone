import { assets, openAIURL, authorURL } from "../../../assets/assets";
import { Link } from "react-router-dom";
import Chats from "../Chats/Chats";

const ChatContainer = ({isMenuOpen, setIsMenuOpen}) => {
  return (

    <div className="chatContainer">

      <div className="chat-header py-10 relative flex items-center justify-between px-[1.5rem]">

        <div className="absolute active:scale-[.9] transition-all cursor-pointer" onClick={()=>setIsMenuOpen(true)}>
          <img src={assets.hamburger} alt="" />
        </div>

        <div className="login-area absolute right-0 flex gap-3 pr-[1.5rem]">
          <Link to={openAIURL.login} target="_blank" className="text-sm border-1 border-[#0000] bg-[white] px-4 py-[.4rem] rounded-full">Log in</Link>
          <Link to={openAIURL.signUp} target="_blank" className="text-sm border border-gptBorderColor px-4 py-[.4rem] rounded-full hover:bg-gptBorderColor text-[white]">Sign up</Link>
        </div>
        
      </div>

      <div className={`chat-body w-[100%] h-[calc(100dvh-5rem)] ${isMenuOpen ? 'w-[calc(100%-20rem)]': 'w-[100%]'} right-0 absolute transition-all max-[867px]:w-[100%] flex flex-col justify-between`}>

        <div className={`chats flex flex-col items-end gap-7 overflow-y-auto py-5 px-[18rem] h-full ${isMenuOpen && 'px-[1.5rem]'} transition-all`}>

          <Chats 
          isClient={true} 
          ClientQuery={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, natus vero? Nesciunt velit, adipisci enim deleniti perferendis laborum voluptate aut pariatur assumenda voluptatibus necessitatibus porro recusandae fugit nobis! Vitae, cupiditate!"}
          
          isGPT={true}
          gptResponse={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, natus vero? Nesciunt velit, adipisci enim deleniti perferendis laborum voluptate aut pariatur assumenda voluptatibus necessitatibus porro recusandae fugit nobis! Vitae, cupiditate!"}
          />

        </div>

        <div className={`chat-footer flex flex-col gap-3 px-[18rem] ${isMenuOpen && 'px-[1.5rem]'} mb-1 transition-all`}>

          <div className="input-area flex justify-between items-center bg-gptInputBg w-[100%] rounded-full">

            <input type="text" className="text-gptColor/[.9] font-light w-full pl-5 bg-[transparent] outline-none border-none py-4" placeholder="Message ChatGPT"/>
            <button className="mr-5 bg-gptColor h-[fit-content] rounded-full"><img src={assets.send} alt="" /></button>

          </div>

          <p className="text-sm text-gptColor text-center font-light ">Made with ❤️ by <Link to={authorURL.url}>Saqib Bedar</Link></p>

        </div>

      </div>
    </div>
  )
}

export default ChatContainer
