'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        router.push('/')
      }
    })

    // PKCE 코드 교환이 이미 완료된 경우 처리
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) router.push('/')
    })

    return () => subscription.unsubscribe()
  }, [router])

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#050510',
      color: 'rgba(255,255,255,0.7)',
      fontSize: '14px',
      fontFamily: 'sans-serif',
    }}>
      로그인 처리 중...
    </div>
  )
}
