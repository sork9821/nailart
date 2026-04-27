'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function AuthPage() {
  const { user, signInWithGoogle, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace('/');
    }
  }, [user, loading, router]);
    return (
        <div className="auth-root">
            {/* Background grid */}
            <div className="auth-grid" />

            {/* 💡 [수정] BACK 버튼을 카드 밖으로 꺼냈습니다. 이제 화면 좌측 상단에 고정됩니다. */}
            <Link href="/" className="auth-back-link">
                <svg
                    className="auth-back-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M19 12H5m7-7l-7 7 7 7" />
                </svg>
                <span>BACK</span>
            </Link>

            {/* Ambient beams */}
            <div className="auth-beam auth-beam--cyan" />
            <div className="auth-beam auth-beam--magenta" />

            {/* Card */}
            <div className="auth-card">
                <h1 className="auth-heading">Create stunning<br />thumbnails in seconds</h1>

                <p className="auth-sub">
                    Sign in to create amazing thumbnails<br />
                </p>

                <div className="auth-divider">
                    <span className="auth-divider__line" />
                    <span className="auth-divider__text">continue with</span>
                    <span className="auth-divider__line" />
                </div>

                <button
                    className="auth-google-btn"
                    type="button"
                    onClick={signInWithGoogle}
                    disabled={loading}
                >
                    <svg className="auth-google-btn__icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    Sign in with Google
                </button>

                <p className="auth-legal">
                    By signing in, you agree to our{" "}
                    <a href="#" className="auth-legal__link">Terms</a> and{" "}
                    <a href="#" className="auth-legal__link">Privacy Policy</a>.
                </p>
            </div>

            <style>{`
        .auth-root {
          position: relative;
          min-height: 100vh;
          background: #050510;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 48px 24px;
        }

        .auth-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 200, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 200, 255, 0.06) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        /* ── Back Button 스타일 수정 ── */
.auth-back-link {
  position: absolute;
  top: 32px;
  left: 32px;
  z-index: 50;
  
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  
  /* 💡 흰색 글씨로 변경 */
  color: #ffffff; 
  
  font-family: var(--font-josefin), sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.15em;
  
  /* 💡 배경 박스와 테두리 제거 */
  background: none; 
  border: none;
  
  padding: 0; /* 여백 제거 */
  transition: opacity 0.2s ease;
}

.auth-back-link:hover {
  /* 호버 시 살짝 흐려지는 효과로 클릭 가능함을 표시 */
  opacity: 0.7;
  color: #ffffff;
  transform: none; /* 움직임 제거 (원하시면 유지 가능) */
}

.auth-back-icon {
  width: 16px;
  height: 16px;
  /* 💡 화살표 색상도 흰색으로 강제 지정 */
  stroke: #ffffff; 
}
      
        /* ── 나머지 스타일들 ── */
        .auth-beam {
          position: absolute;
          bottom: 0;
          width: 2px;
          height: 60vh;
          pointer-events: none;
          animation: authBeamRise 7s linear infinite, authBeamFade 7s ease-in-out infinite;
        }
        .auth-beam--cyan {
          left: 38%;
          background: linear-gradient(to top, transparent, rgba(0, 200, 255, 0.7), transparent);
          box-shadow: 0 0 6px rgba(0, 200, 255, 0.4);
        }
        .auth-beam--magenta {
          left: 62%;
          background: linear-gradient(to top, transparent, rgba(220, 0, 255, 0.7), transparent);
          box-shadow: 0 0 6px rgba(220, 0, 255, 0.4);
          animation-delay: 3.5s;
        }
        @keyframes authBeamRise {
          from { transform: translateY(0); }
          to   { transform: translateY(-140vh); }
        }
        @keyframes authBeamFade {
          0%   { opacity: 0; }
          15%  { opacity: 1; }
          75%  { opacity: 1; }
          100% { opacity: 0; }
        }

        .auth-card {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 420px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(0, 200, 255, 0.18);
          border-radius: 16px;
          padding: 44px 40px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 0 60px rgba(0, 200, 255, 0.06), 0 24px 64px rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(12px);
        }

        .auth-heading {
          font-family: var(--font-josefin), sans-serif;
          font-size: clamp(20px, 4vw, 26px);
          font-weight: 700;
          text-transform: uppercase;
          color: #fff;
          line-height: 1.3;
          letter-spacing: 0.04em;
          margin: 0 0 14px;
        }

        .auth-sub {
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.45);
          margin: 0 0 28px;
        }

        .auth-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          margin-bottom: 20px;
        }
        .auth-divider__line {
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
        }
        .auth-divider__text {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.3);
          white-space: nowrap;
        }

        .auth-google-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 20px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-bottom: 20px;
        }
        .auth-google-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(0, 200, 255, 0.35);
          box-shadow: 0 0 24px rgba(0, 200, 255, 0.15);
          transform: translateY(-1px);
        }
        .auth-google-btn__icon {
          width: 18px;
          height: 18px;
        }

        .auth-legal {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.28);
          line-height: 1.6;
          margin: 0;
        }
        .auth-legal__link {
          color: rgba(0, 200, 255, 0.6);
          text-decoration: none;
        }

        @media (max-width: 480px) {
          .auth-card {
            padding: 36px 24px 28px;
          }
        }
      `}</style>
        </div>
    );
}