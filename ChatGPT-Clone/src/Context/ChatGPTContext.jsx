import OpenAI from "openai";
import { createContext } from "react";

export const ChatGPTContext = createContext();

const ChatGPTProvider = ({children}) => {

    const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        organization: import.meta.env.VITE_OPENAI_ORG_ID,
        project: import.meta.env.VITE_OPENAI_PROJECT_ID,
        dangerouslyAllowBrowser: true,
    });

    const sendMsgToOpenAI = async (message)=> {
    try{
        let gptResponse = "";

        const res = await openai.chat.completions.create({
            model: "davinci-002",
            messages: [{ role: "user", content: message }],
            stream: true,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,

        });
        for await (const chunk of res) {
            const content = chunk.choices[0]?.delta?.content || "";
            gptResponse += content;
        }
        
        return gptResponse;
    }catch(error){
        if(error && error.status === 429){
            return "Sorry, the quota for API requests has been exceeded. Please try again later.";
        } else {
            return `An error occurred. Please try again later.`;
        }
    }

    }

    return (
        <ChatGPTContext.Provider value={{sendMsgToOpenAI}}>
            {children}
        </ChatGPTContext.Provider>
    )
}

export default ChatGPTProvider;