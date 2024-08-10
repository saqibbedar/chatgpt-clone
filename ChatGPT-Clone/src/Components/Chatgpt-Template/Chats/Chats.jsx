import { useState } from "react";
import { assets } from "../../../assets/assets"

const Chats = ({isClient, ClientQuery, isGPT, gptResponse}) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = (text)=>{
        navigator.clipboard.writeText(text)
        .then(()=>{
            setIsCopied(true);
            setTimeout(()=>{
                setIsCopied(false);
            }, 2000);
        })
        .catch((e)=>console.error("Failed to copy text: ", e));
    }

  return (
    <>
        {isClient && <div className={`client-query flex justify-end`}>
            <p className="bg-gptInputBg p-5 rounded-3xl w-[65%] text-gptColor/[.9]">{isClient && ClientQuery}</p>
        </div>
        }

        {isGPT &&
            
            <div className={`gpt-response flex items-start gap-4`}>

            <img src={assets.gptLogo} className="w-10 h-10 p-2 border-gptBorderColor border rounded-full" alt="chatGPT logo" />

            <div className="generated-response">
                <p className="text-gptColor/[.9]">{isGPT && gptResponse}</p>
                <div className="copy-btn mt-3 cursor-pointer w-[fit-content] relative group">
                    <img src={isCopied ? assets.copied : assets.copy} alt="copy button" onClick={()=> handleCopy(gptResponse)} className="w-[1.1rem] cursor-pointer"/>
                    <span className={`toolTip absolute hidden group-hover:block after:absolute after:translate-x-[-1rem] ${isCopied ? 'after:content-["Copied"]' : 'after:content-["Copy"]'} after:px-2 after:py-1 after:rounded after:text-xs after:mt-[5px] after:bg-[black] text-gptColor`}></span>
                </div>
            </div>

            </div>
        }

    </>
  )
}

export default Chats
