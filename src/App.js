import React, { useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';

function App() {
  // 3단계용 상태 관리 (메시지 입력 등)
  const [parentMessage, setParentMessage] = useState("");

  return (
    <div style={{ backgroundColor: '#fff9f9', minHeight: '100vh', padding: '10px', fontFamily: 'sans-serif' }}>
      
      {/* 상단 로고 (로고 전까지는 텍스트로 대체) */}
      <div style={{ textAlign: 'center', padding: '15px 0' }}>
        <h1 style={{ color: '#d63031', margin: 0, fontSize: '24px', fontWeight: '900' }}>孝湛 [효담]</h1>
        <p style={{ fontSize: '12px', color: '#636e72', marginTop: '5px' }}>마음을 담다, 효를 담다</p>
      </div>

      {/* 라이브 방송 영역 (실시간 알림 오버레이 추가) */}
      <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, backgroundColor: '#000' }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            src="https://www.youtube.com/embed/LIVE_VIDEO_ID?autoplay=1&mute=1"
            title="효담 라이브"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        
        {/* 실시간 효도 알림 (가상 데이터) */}
        <div style={{ 
          position: 'absolute', top: '10px', left: '10px', 
          backgroundColor: 'rgba(255,255,255,0.8)', padding: '5px 12px', 
          borderRadius: '20px', fontSize: '11px', fontWeight: 'bold', color: '#d63031'
        }}>
          ✨ 방금 천안시 서북구에서 효도 배달 완료!
        </div>
      </div>

      {/* 상품 정보 및 메시지 입력 */}
      <div style={{ backgroundColor: '#fff', marginTop: '15px', padding: '20px', borderRadius: '15px', border: '1px solid #ffeaea' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#d63031', fontWeight: 'bold', fontSize: '14px' }}>
          <Heart size={16} fill="#d63031" /> 오늘 부모님께 드리는 첫 발견
        </div>
        <h2 style={{ fontSize: '22px', margin: '10px 0 5px 0' }}>블랙세이블 포도 (1.5kg 내외)</h2>
        <p style={{ color: '#636e72', fontSize: '13px', lineHeight: '1.4' }}>
          "엄마 이거 처음 먹어봐!" <br/>설탕보다 달콤하고 씨 없는 귀한 품종만 골랐습니다.
        </p>

        {/* 효도 메시지 카드 입력 (효담 핵심 기능) */}
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fdf2f2', borderRadius: '10px' }}>
          <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#b33939', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <MessageCircle size={14} /> 부모님께 보낼 카드 문구
          </label>
          <input 
            type="text" 
            placeholder="예) 아빠 건강 챙기세요! 아들이 보냅니다."
            value={parentMessage}
            onChange={(e) => setParentMessage(e.target.value)}
            style={{ width: '100%', border: 'none', background: 'transparent', borderBottom: '1px solid #ffb8b8', padding: '8px 0', outline: 'none', fontSize: '14px' }}
          />
        </div>
        
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '14px', textDecoration: 'line-through', color: '#b2bec3', marginRight: '5px' }}>24,900원</span>
            <span style={{ fontSize: '24px', fontWeight: '900', color: '#d63031' }}>16,800원</span>
          </div>
          <button style={{ 
            backgroundColor: '#d63031', color: '#fff', border: 'none', padding: '15px 30px', 
            borderRadius: '12px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer',
            boxShadow: '0 5px 15px rgba(214, 48, 49, 0.3)'
          }}>
            바로 효도하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
