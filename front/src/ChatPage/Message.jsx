import React from 'react';

function Message({message, sentUser, receivedUser}) {
  const currUserId = 'JNVe6U0iGlP4A5Pm65UfXgZju0Z2';  // 현재 사용자 id (나중에 리코일로 가져올 것)

  const isMessageMine = (sentUser) => {
    return currUserId === sentUser.id;
  }

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
        backgroundColor: isMessageMine(sentUser) && "#ECECEC"
      }}>
        <h6>{sentUser.name}{" "}
          
        </h6>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message;
