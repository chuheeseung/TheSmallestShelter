import { child, DataSnapshot, onChildAdded, ref } from 'firebase/database';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { dbService } from '../RegisterPage/fbase';
import style from './ChatPage.module.css'
import Message from './Message';
import MessageList from './MessageList';
import { chatdata } from './ChatData';
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';

function Chat() {
  const [messages, setMessages] = useState([]); // 모든 쪽지 내역
  const [message, setMessage] = useState([]);  // 받은/보낸 쪽지 내역
  const [clicked, setClicked] = useState("sent");  // 받은/보낸 쪽지 클릭 시 색 변경을 위해 (default: 보낸 쪽지)
  const [checkedItems, setCheckedItems] = useState([]); // 쪽지 전체 선택/해제
  const chatRoomId = 'tM8qdXZCQNZtAxa8pmuyOoMKPq12'; // (userId/currentUserId)
  const currUserId = 'EHmAfrXDlPhPv3wpq9LuSvAeugv1';  // 현재 사용자 id
  // const userId = 'tM8qdXZCQNZtAxa8pmuyOoMKPq12';      // 대화 상대 id
  

  useEffect(() => {
    let tmp = [];
    let chatArr = [];
    for(var i in chatdata[chatRoomId]) {
      tmp.push(chatdata[chatRoomId][i]);
      if (chatdata[chatRoomId][i].user.id === currUserId) {
        chatArr.push(chatdata[chatRoomId][i]);
      }
    }
    setMessages(tmp)
    setMessage(chatArr)
  }, [])
  
  const handleReceivedChat = () => {
    let tmp = messages.filter(e => e.user.id !== currUserId);
    setMessage(tmp);
    setClicked("received");
    setCheckedItems([])
  }

  const handleSentChat = () => {
    let tmp = messages.filter(e => e.user.id === currUserId);
    setMessage(tmp);
    setClicked("sent")
    setCheckedItems([])
  }

  const onCheckAll = (checked) => {
    if (checked) {
      const checkedChat = [];
      message.forEach(data => checkedChat.push(data.content));
      setCheckedItems(checkedChat);
    } else {
      setCheckedItems([]);
    }
  }

  const handleSingleChange = (checked, content) => {
    if (checked) {
      setCheckedItems([...checkedItems, content]);
    } else {
      setCheckedItems(checkedItems.filter((el) => el !== content));
    }
  }

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

      <div className={style.listContainer}>
        <div className={style.listHeader}>
          <div style={{ fontWeight: 'bold' }}>쪽지 목록</div>
          <div style={{fontWeight: 'bold', color: '#969696'}}>
            <span style={{ marginRight: '32px', color: clicked==='received' && 'black'}} onClick={handleReceivedChat}>받은 쪽지</span>
            <span style={{ color: clicked ==='sent' && 'black' }} onClick={handleSentChat}>보낸 쪽지</span>
          </div>
        </div>
        <div className={style.listInfo}>
          <label>
            <input 
              style={{display:'none'}} 
              type="checkbox" 
              onChange={(e) => onCheckAll(e.target.checked)} 
              checked={checkedItems.length == message.length ? true : false}
            />
            {checkedItems.length == message.length ? <GrCheckboxSelected/> : <GrCheckbox/>}
          </label>
          <span style={{fontWeight: 'bold', marginRight: '250px', marginLeft:'70px'}}>
          {clicked === 'sent'
          ? '받는 사람'
          : '보낸 사람'
          } </span>
          <span style={{ fontWeight: 'bold' }}>내용</span>
        </div>


        {message.length > 0 &&
          message.map((message, idx) => (
            <MessageList
              key={idx}
              message={message.content}
              user={message.user}
              checkedItems={checkedItems}
              handleSingleChange={handleSingleChange}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Chat;