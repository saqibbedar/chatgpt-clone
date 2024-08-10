import React from "react";
import ChatgptContainer from "./Components/Chatgpt-Template/ChatgptContainer";
import ChatGPTProvider from "./Context/ChatGPTContext";

const App = () => {
  return (
    <div className="min-h-[100vh] overflow-hidden">
      <ChatGPTProvider>
        <ChatgptContainer />
      </ChatGPTProvider>
    </div>
  );
};

export default App;
