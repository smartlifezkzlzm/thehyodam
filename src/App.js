import React from 'react';
import { ShoppingCart, Tv, Heart, Play, Share2, Info } from 'lucide-react';

const styles = {
  container: { fontFamily: "'Pretendard', -serif", color: '#333', backgroundColor: '#fff' },
  header: { padding: '15px 20px', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', zIndex: 100 },
  main: { maxWidth: '600px', margin: '0 auto', paddingBottom: '100px' },
  
  videoSection: { width: '100%', aspectRatio: '9/16', backgroundColor: '#000', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  liveBadge: { position: 'absolute', top: '20px', left: '20px', backgroundColor: '#ff0000', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' },
  videoOverlay: { position: 'absolute', bottom: '20px', left: '20px', color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.5)' },
  
  content: { padding: '24px' },
  title: { fontSize: '22px', fontWeight: 'bold', marginBottom: '8px', letterSpacing: '-0.5px' },
  price: { fontSize: '20px', color: '#e63946', fontWeight: '800', marginBottom: '20px' },
  description: { fontSize: '15px', color: '#666', lineHeight: '1.6', marginBottom: '30px' },
  
  buttonGroup: { display: 'flex', gap: '10px', position: 'fixed', bottom: 0, width: '100%', maxWidth: '600px', padding: '15px', backgroundColor: '#fff', borderTop: '1px solid #eee', boxSizing: 'border-box' },
  buyButton: { flex: 2, padding: '16px', backgroundColor: '#00c73c', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' },
  cartButton: { flex: 1, padding: '16px', backgroundColor: '#f4f4f4', color: '#333', border: 'none', borderRadius: '10px', cursor: 'pointer' },

  footer: { padding: '60px 20px', backgroundColor: '#f9f9f9', fontSize: '12px', color: '#888', borderTop: '1px solid #eee' },
};

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={{ fontSize: '18px', fontWeight: '900', color: '#222' }}>효담</h1>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Tv size={22} color="#333" />
          <ShoppingCart size={22} color="#333" />
        </div>
      </header>

      <main style={styles.main}>
        <section style={styles.videoSection}>
          <div style={styles.liveBadge}>
            <span style={{ width: '6px', height: '6px', backgroundColor: '#fff', borderRadius: '50%' }}></span>
            LIVE
          </div>
          <Play size={48} color="rgba(255,255,255,0.5)" />
          <div style={styles.videoOverlay}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>오늘 새벽 수확한 블랙세이블 포도</h3>
            <p style={{ fontSize: '14px', opacity: 0.9 }}>실시간 산지 모습을 확인하세요</p>
          </div>
        </section>

        <section style={styles.content}>
          <h2 style={styles.title}>부모님을 위한 프리미엄 블랙세이블 포도</h2>
          <div style={styles.price}>
            35,000원 <span style={{ fontSize: '14px', color: '#bbb', textDecoration: 'line-through', fontWeight: 'normal' }}>42,000원</span>
          </div>
          <p style={styles.description}>
            충청남도 천안의 햇살을 머금은 고당도 포도입니다. <br/>
            대표님이 직접 검수한 A급 상품만을 효심을 담아 보내드립니다.
          </p>
        </section>
      </main>

      <div style={styles.buttonGroup}>
        <button style={styles.cartButton}><Heart size={20} /></button>
        <button style={styles.buyButton}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Naver_Pay_Logo.png" alt="Npay" style={{ height: '18px' }} />
          구매하기
        </button>
      </div>

      <footer style={styles.footer}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <strong style={{ display: 'block', marginBottom: '10px', color: '#555' }}>효담(HYODAM) 사업자 정보</strong>
          <p style={{ lineHeight: '1.8' }}>
            상호명: 스마트라이프 주식회사 | 대표자: 박영환 <br />
            사업자등록번호: 229-88-03004 <br />
            통신판매업신고: 제 2025-충남천안-1063호 <br />
            주소: 충청남도 천안시 서북구 두정동 1041, 계룡타워 202호 <br />
            고객센터: 010-2582-7607 | 이메일: smartlifezkzlzm@gmail.com
          </p>
          <div style={{ marginTop: '20px', display: 'flex', gap: '15px', fontWeight: 'bold' }}>
            <span style={{ cursor: 'pointer' }}>이용약관</span>
            <span style={{ cursor: 'pointer' }}>개인정보처리방침</span>
          </div>
          <p style={{ marginTop: '30px', fontSize: '11px', opacity: 0.7 }}>
            © 2026 HYODAM. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;