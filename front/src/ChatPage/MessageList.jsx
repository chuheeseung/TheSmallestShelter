import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import style from './ChatPage.module.css'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';

function MessageList({ message, user, checkedItems, handleSingleChange }) {

  return (
    <div className={style.listWrap}>
      <label>
        <input 
          type="checkbox" 
          value={message} 
          checked={checkedItems.includes(message) ? true : false}
          onChange={(e) => handleSingleChange(e.target.checked, e.target.value)}
          style={{display: 'none'}}
        />
        {checkedItems.includes(message) ? <GrCheckboxSelected/> : <GrCheckbox/>}
      </label>
      
      <span style={{marginRight: '240px', marginLeft: '70px'}}>{user.name}</span>
      <span>{message}</span>
    </div>
  );
}

export default MessageList;