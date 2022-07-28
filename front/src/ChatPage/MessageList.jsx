import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import style from './ChatPage.module.css'

function MessageList({ message, user, checkedItems, handleSingleChange }) {

  return (
    <div className={style.listWrap}>
      <input 
        type="checkbox" 
        value={message} 
        checked={checkedItems.includes(message) ? true : false}
        onChange={(e) => handleSingleChange(e.target.checked, e.target.value)}
      />
      <span style={{marginRight: '240px'}}>{user.name}</span>
      <span>{message}</span>
    </div>
  );
}

export default MessageList;