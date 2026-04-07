// src/ProfileCard.jsx

import { useState } from 'react';

function ProfileCard({ name, age, dream, emoji, hobby, mbti, intro}) {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleReset() {
    setLikes(0);
  }
  // intro 버튼 클릭 시 close intro 버튼으로 변경, close intro 버튼 클릭 시 open intro 버튼으로 변경
  const [showIntro, setShowIntro] = useState(false);

  const handleIntro = () => {
    setShowIntro(!showIntro);
  }

  return (
    <div style={{
      border: '2px solid #61dafb',
      borderRadius: '16px',
      padding: '24px',
      width: '280px',
      textAlign: 'center',
      fontFamily: 'sans-serif'
      }}>
      <div style={{ fontSize: '48px' }}>{emoji}</div>
      <h2>{name}</h2>
      <p>AGE: {age}세</p>
      <p>DREAM: {dream}</p>
      <p>HOBBY: {hobby}</p>
      <p>MBTI: {mbti}</p>
      <div style={{ marginTop: '16px' }}>
        <p style={{ fontSize: '20px' }}>❤️ {likes}</p>
        <button onClick={handleLike} style={{ marginRight: '8px' }}>+ LIKES</button>
        <button onClick={handleReset}>RESET</button>
      </div>
      {showIntro&& (
        <div style={{ marginTop: '16px', marginBottom: '16px' }}>
          <p style={{ fontFamily: 'sans-serif', fontSize: '20px' }}> {intro}</p>
          안녕하세요! 저는 14기 아기사자 이지은입니다. 열심히 하겠습니다!
        </div>
      )}
      <button onClick={handleIntro} style={{ marginRight: '8px' }}>
        {showIntro ? 'CLOSE INTRO' : 'OPEN INTRO'}
      </button>
        
    </div>
    );
}


export default ProfileCard;
