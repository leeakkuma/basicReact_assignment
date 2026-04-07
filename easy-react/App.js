// src/App.js

import ProfileCard from './ProfileCard';

function App() {
  return (
    <div style={{
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      marginTop: '60px',
      flexWrap: 'wrap'
    }}>
      <ProfileCard name="이지은" age={22} dream="프론트엔드 개발자" emoji="🐈‍⬛" hobby="노래 듣기, 게임하기" mbti="INFJ" />
    </div>
  );
}

export default App;
