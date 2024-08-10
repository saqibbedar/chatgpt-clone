import {assets, openAIURL} from '../../../assets/assets';
import { Link } from 'react-router-dom';

const SideBar = ({isMenuOpen, setIsMenuOpen}) => {

  const handleSidebarClick = (e) => {
    e.stopPropagation(); 
  };

  return (
    <>
    
    <div className={`side-bar-overlay absolute top-0 left-0 w-full h-full bg-[#0007] ${isMenuOpen ? 'opacity-1 visible' : 'opacity-0 invisible'} transition-all`} onClick={()=>setIsMenuOpen(false)}>

      <div onClick={handleSidebarClick} className={`side-bar flex bg-[#171717] absolute top-0 left-0 flex-col justify-between h-full w-[20rem] ${isMenuOpen ? 'left-[0]' : 'left-[-20rem]'} px-5 pt-4 pb-2 overflow-x-hidden overflow-y-auto transition-all max-[456px]:w-[85%] border-r border-gptBorderColor`}>
        
        <div className="side-bar-top overflow-hidden flex flex-col gap-1 ">
          
          <Link to="/" className="relative group flex items-center gap-4 hover:bg-gptBorderColor p-2 rounded cursor-pointer transition-all">
            <img src={assets.gptLogo}  alt="ChatGPT Logo" className='w-6 p-1 rounded-full border border-gptBorderColor'/>
            <h1 className='text-gptColor text-base font-extralight'>ChatGPT</h1>
            <div className="absolute after:absolute after:content['hello'] after:right-0"></div>
          </Link>

          <Link to={openAIURL.exploreGPTs} className='text-base text-gptColor flex items-center gap-4 rounded-md p-2 hover:bg-gptBorderColor font-extralight'><img src={assets.exploreGPTs} alt="add button" className='w-6'/>Explore GPTs</Link>

          <div className='flex flex-col gap-y-3 border-t border-gptBorderColor mt-2 pt-4 overflow-auto overflow-x-hidden pb-4'>

            <div className="bg-gptBorderColor p-5 rounded text-gptColor text-[.9rem]">
              Login with your official chatGPT account OR create a new account if you don't have any to save your chats. We don't save your chats as this is ChatGPT clone not original gpt.
            </div>

            {/* saved chats */}

            {/* <button className='text-base text-gptColor flex items-center gap-3 py-3  px-3 border border-gptBorderColor rounded-md hover:bg-gptBorderColor transition-all'><img src={assets.message} alt="chat" className='w-5'/>How learn coding?</button> */}
            
          </div>

        </div>

        <div className='flex flex-col gap-y-6'>

          <Link to={openAIURL.upgrade} className='flex items-center gap-3 px-3 text-gptColor  font-extralight p-2 hover:bg-gptBorderColor rounded-md'><img src={assets.upgrade} alt="" className='w-6 p-1 rounded-full border border-gptBorderColor transition-all'/>
            <div className='flex flex-col items-start'>
              <span className='text-base'>Upgrade plan</span>
              <span className='text-[12px] text-gptColor/[.5]'>Get GPT-4, DALL·E, and more</span>
            </div>
          </Link>

        </div>
      </div>
    </div>
    </>
  )
}

export default SideBar
