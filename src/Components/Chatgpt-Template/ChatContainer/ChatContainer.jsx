import { assets } from "../../../assets/assets"

const ChatContainer = ({setIsMenuOpen}) => {
  return (
    <>
      <div className="px-10 py-12 bg-[red] relative flex items-center justify-between">
        <div className="absolute active:scale-[.9] transition-all cursor-pointer" onClick={()=>setIsMenuOpen(true)}>
          <img src={assets.hamburger} alt="" />
        </div>

      </div>
    </>
  )
}

export default ChatContainer
