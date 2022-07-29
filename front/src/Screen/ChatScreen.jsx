import React from 'react';
import ChatPage from '../ChatPage/ChatPage';

function ChatScreen() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70%', margin: '0 auto'}}>
      <ChatPage/>
    </div>
  );
}

export default ChatScreen;