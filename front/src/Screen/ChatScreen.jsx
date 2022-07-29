import React from 'react';
import ChatPage from '../ChatPage/ChatPage';

function ChatScreen() {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '70%', 
        margin: '0 auto',
        fontFamily: "SpoqaHanSansNeo"
      }}>
      <ChatPage/>
    </div>
  );
}

export default ChatScreen;