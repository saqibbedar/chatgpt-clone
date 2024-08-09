import { assets } from "../../../assets/assets"

const Chats = ({isClient, ClientQuery, isGPT, gptResponse}) => {
  return (
    <>
        <div className={`client-query ${isClient? 'block' : 'hidden'} bg-gptInputBg p-5 rounded-3xl w-[65%]`}>
            <p className="text-gptColor/[.9]">{isClient && ClientQuery}</p>
        </div>

        <div className={`gpt-response ${isGPT? 'flex' : 'hidden'} items-start gap-4`}>

            <img src={assets.gptLogo} className="w-10 h-10 p-2 border-gptBorderColor border rounded-full" alt="" />

            <div className="generated-response">
                <p className="text-gptColor/[.9]">{isGPT && gptResponse}</p>
                <div className="copy-btn mt-3 cursor-pointer w-[fit-content]" title="copy"><img src={assets.copy} alt="" className="w-[1.1rem]"/></div>
            </div>

        </div>
    </>
  )
}

export default Chats
