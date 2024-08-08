import {assets} from '../../../assets/assets'

const SideBar = ({isMenuOpen, setIsMenuOpen}) => {

  const handleSidebarClick = (e) => {
    e.stopPropagation(); 
  };

  return (
    <>
    
    <div className={`side-bar-overlay absolute top-0 left-0 w-full h-full bg-[#0009] ${isMenuOpen ? 'opacity-1 visible' : 'opacity-0 invisible'} transition-all`} onClick={()=>setIsMenuOpen(false)}>

      <div onClick={handleSidebarClick} className={`side-bar flex bg-[#3f3f3f] absolute top-0 left-0 flex-col justify-between h-full w-[85%] ${isMenuOpen ? 'left-[0]' : 'left-[-20rem]'} px-10 py-8 overflow-x-hidden overflow-y-auto transition-all xs:w-[20rem] `}>
        
        <div className="side-bar-top flex flex-col gap-y-6">
          <div className="flex items-center gap-4">
            <img src={assets.gptLogo}  alt="ChatGPT Logo" className=''/>
            <h1 className='text-gptColor text-2xl font-medium'>ChatGPT</h1>
          </div>

          <button className='text-lg text-gptColor flex items-center justify-center gap-2 bg-[red] py-3 rounded-md'><img src={assets.add} alt="add button" className='w-5'/>New Chat</button>

          <div className='flex flex-col gap-y-3 whitespace-nowrap border-t border-gptBorderColor mt-2 pt-6'>
            
            <button className='text-base text-gptColor flex items-center gap-3 py-3 px-3 border border-gptBorderColor rounded-md hover:bg-gptBorderColor transition-all overflow-hidden'><img src={assets.message} alt="chat" className='w-5'/>How learn coding?</button>

            <button className='text-base text-gptColor flex items-center gap-3 py-3 px-3 border border-gptBorderColor rounded-md hover:bg-gptBorderColor transition-all overflow-hidden'><img src={assets.message} alt="chat" className='w-5'/>How learn coding?</button>
            
          </div>
        </div>

        <div className='flex flex-col gap-y-6 border-t border-gptBorderColor pt-6'>

          <button className='flex items-center gap-3 px-3 text-gptColor text-[1.1rem]'><img src={assets.home} alt="" className='w-5'/>Home</button>

          <button className='flex items-center gap-3 px-3 text-gptColor text-[1.1rem]'><img src={assets.bookmark} alt="" className='h-5 w-5' />Saved</button>

          <button className='flex items-center gap-3 px-3 text-gptColor text-[1.1rem]'><img src={assets.rocket} alt="" className='w-5'/>Upgrade</button>

        </div>
      </div>
    </div>
    </>
  )
}

export default SideBar
