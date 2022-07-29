import React, { useEffect, useState } from 'react';
import dummy from './DirectMessageData.json';
import Message from './Message';
import style from './ChatPage.module.css';
import ChatHeader from './ChatHeader';
import ChatForm from './ChatForm';
import { dbService } from '../RegisterPage/fbase';
import { child, DataSnapshot, onChildAdded, ref } from 'firebase/database';

function ChatPage() {
  const [messages, setMessages] = useState([]); // 모든 쪽지 내역
  const messagesRef = ref(dbService, "messages");
  const chatRoomId = Object.keys(dummy)[0]// (userId-currentUserId) 지금은 하나라 0번 인덱스만 접근
  const currUserId = 'JNVe6U0iGlP4A5Pm65UfXgZju0Z2';  // 현재 사용자 id
  const userId = chatRoomId.split('-').filter(e => e !== currUserId).join();

  // 상대 정보 (리코일 사용할 것)
  const user = {
    id: userId,
    name: "유행사",
    img: "http://gravatar.com/avatar/0f7c362b0125aaff368169c8acc4dd39?d=identicon"
  }

  useEffect(() => {
    addMessagesListeners(chatRoomId)
  }, [])

  const addMessagesListeners = (chatRoomId) => {
    let messagesArray = [];
    onChildAdded(child(messagesRef, chatRoomId), DataSnapshot => {
      messagesArray.push(DataSnapshot.val());
      setMessages(messagesArray);
    })
  }

  return (
    <div className={style.chatContainer}>
      <ChatHeader user={user}/>
      <div className={style.chatWrap}>
        {messages.length > 0 &&
          messages.map((message) => (
            <Message
              key={message.messageId}
              message={message.content}
              sentUser={message.sentUser}
              receivedUser={message.receivedUser}
            />
          ))
        }
      </div>
      <ChatForm/>
    </div>
  );
}

export default ChatPage;