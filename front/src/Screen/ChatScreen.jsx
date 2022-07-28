import React from 'react';
import Chat from '../ChatPage/Chat';

function ChatScreen() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70%', margin: '0 auto'}}>
      <Chat/>
    </div>
  );
}

export default ChatScreen;