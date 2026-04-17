import React from 'react';
import { ShoppingCart, Tv, Heart, Package, Phone } from 'lucide-react';

// --- 스타일 설정 (심플하고 정갈한 효담 스타일) ---
const styles = {
  container: { fontFamily: "'Pretendard', sans-serif", color: '#333', lineHeight: '1.6' },
  header: { padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 100 },
  main: { maxWidth: '800px', margin: '0 auto', padding: '40px 20px' },
  productCard: { border: '1px solid #eee', borderRadius: '15px', overflow: 'hidden', marginBottom: '40px' },
  imagePlaceholder: { width: '100%', height: '400px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#999' },
  content: { padding: '20px' },
  brandBadge: { backgroundColor: '#e63946', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' },
  title: { fontSize: '24px', fontWeight: 'bold', margin: '15px 0' },
  price: { fontSize: '20px', color: '#e63946', fontWeight: 'bold' },
  button: { width: '100%', padding: '15px', backgroundColor: '#222', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' },
  footer: { padding: '60px 20px', backgroundColor: '#f9f9f9', fontSize: '12px', color: '#666', borderTop: '1px solid #eee', marginTop: '100px' },
  footerContent: { maxWidth: '800px', margin: '0 auto' },
  footerTitle: { fontSize: '15px', fontWeight: 'bold', marginBottom: '15px', color: '#333', display: 'block' },
  linkGroup: { marginTop: '20px', borderTop: '1px solid #ddd', paddingTop: '15px' },
  link: { marginRight: '20px', fontWeight: 'bold', cursor: 'pointer', color: '#444', textDecoration: 'none' }
};

function App() {
  return (
    <div style={styles.container}>
      {/* 헤더 */}
      <header style={styles.header}>
        <h1 style={{ fontSize: '20px', fontWeight: '900', letterSpacing: '-1px' }}>효담</h1>
        <div>
          <Tv size={24} style={{ marginRight: '15px', cursor: 'pointer' }} />
          <ShoppingCart size={24} style={{ cursor: 'pointer' }} />
        </div>
      </header>

      {/* 메인 상품 영역 */}
      <main style={styles.main}>
        <div style={styles.productCard}>
          {/* 실제 이미지 파일이 있다면 <img src="..." />로 교체하세요 */}
          <div style={styles.imagePlaceholder}>블랙세이블 포도 고화질 이미지 영역</div>
          <div style={styles.content}>
            <span style={styles.brandBadge}>산지직송</span>
            <h2 style={styles.title}>부모님께 드리는 보석, 프리미엄 블랙세이블 포도</h2>
            <p style={{ color: '#666' }}>당도 20브릭스 이상의 진한 달콤함. 효심을 담아 엄선했습니다.</p>
            <div style={styles.price}>35,000원 <span style={{ fontSize: '14px', color: '#999', fontWeight: 'normal', textDecoration: 'line-through' }}>42,000원</span></div>
            <button style={styles.button}>네이버 페이로 구매하기</button>
          </div>
        </div>
      </main>

      {/* 네이버 페이 필수 푸터 영역 */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <span style={styles.footerTitle}>효담 (HYODAM)</span>
          <p>
            상호명: [스마트라이프 주식회사] | 대표자: [박영환] <br />
            사업자등록번호: [229-88-03004] | 통신판매업신고: [제 2025-충남천안-1063호] <br />
            주소: 충청남도 천안시 [서북구 두정동 1041, 계룡타워 202호] <br />
            고객센터: [010-2582-7607] | 이메일: smartlifezkzlzm@gmail.com
          </p>
          
          <div style={styles.linkGroup}>
            <a href="#terms" style={styles.link}>이용약관</a>
            <a href="#privacy" style={styles.link}>개인정보처리방침</a>
            <a href="#guide" style={styles.link}>이용안내</a>
          </div>

          <p style={{ marginTop: '30px', fontSize: '11px', color: '#aaa' }}>
            효담은 소비자 보호를 위한 모든 규정을 준수합니다. 본 사이트의 모든 콘텐츠는 저작권법의 보호를 받습니다. <br />
            © 2026 HYODAM. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;