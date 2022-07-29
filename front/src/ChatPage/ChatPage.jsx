import React, { useEffect, useState } from 'react';
import dummy from './DirectMessageData.json';
import Message from './Message';

function ChatPage() {
  const [messages, setMessages] = useState([]); // 모든 쪽지 내역
  const chatRoomId =  Object.keys(dummy)[0]// (userId-currentUserId) 지금은 하나라 0번 인덱스만 접근
  const currUserId = 'JNVe6U0iGlP4A5Pm65UfXgZju0Z2';  // 현재 사용자 id
  const userId = chatRoomId.split('-').filter(e => e !== currUserId).join();

  useEffect(() => {
    let tmp = [];
    for(var i in dummy[chatRoomId]) {
      tmp.push(dummy[chatRoomId][i]);
    }
    setMessages(tmp)
  }, [])

  return (
    <div>
     {messages.length > 0 &&
        messages.map((message, idx) => (
          <Message
            key={idx}
            message={message.content}
            user={message.user}
          />
        ))
      }
    </div>
  );
}

export default ChatPage;