'use client'

import dynamic from 'next/dynamic'

const FlowCanvas = dynamic(() => import('./FlowCanvas'), { 
  ssr: false,
  loading: () => (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      background: '#0a0a0a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#BF4D43'
    }}>
      Loading...
    </div>
  )
})

export default function FlowPage() {
  return <FlowCanvas />
}
