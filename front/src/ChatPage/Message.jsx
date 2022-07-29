import React from 'react';

function Message({message, sentUser, receivedUser}) {
  return (
    <div style={{ marginBottom: '3px', display: 'flex' }}>
      <img
        style={{ borderRadius: '10px' }}
        width={48}
        height={48}
        className="mr-3"
        src={sentUser.image}
        alt={sentUser.name}
      />
      <div style={{
        backgroundColor: "#ECECEC"
      }}>
        <h6>{sentUser.name}{" "}
          
        </h6>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message;
