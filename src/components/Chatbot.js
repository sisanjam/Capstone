

export default function Chatbot()
{
    return(
        <div id="chat-widget">
  
        <button id="chat-button" onclick="toggleChat()">Chat with us!</button>
        
        <div id="chat-box" style={{ display: 'none'}}>
          <div id="chat-box-header">
            <span>Chat with us!</span>
            <button onclick="toggleChat()">Close</button>
          </div>
          <div id="chat-box-content">
         
          </div>
          <div id="chat-box-input">
            <input type="text" id="user-input" placeholder="Type your message..."></input>
            <button id="send-button" onclick="sendMessage()">Send</button>
          </div>
        </div>
      </div>

    )
    
}