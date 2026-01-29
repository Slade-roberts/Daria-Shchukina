import { useState, useEffect, ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'

interface SurpriseGateProps {
  children: ReactNode
}

export default function SurpriseGate({ children }: SurpriseGateProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const revealedData = localStorage.getItem('revealed')
    const urlCode = searchParams.get('code')
    const revealCode = import.meta.env.VITE_REVEAL_CODE

    if (revealedData) {
      const { value, timestamp } = JSON.parse(revealedData)
      const now = Date.now()
      const thirtyDays = 30 * 24 * 60 * 60 * 1000
      if (value === 'true' && now - timestamp < thirtyDays) {
        setIsRevealed(true)
      } else {
        localStorage.removeItem('revealed')
      }
    } else if (urlCode === revealCode) {
      const timestamp = Date.now()
      localStorage.setItem('revealed', JSON.stringify({ value: 'true', timestamp }))
      setIsRevealed(true)
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (code === import.meta.env.VITE_REVEAL_CODE) {
      localStorage.setItem('revealed', 'true')
      setIsRevealed(true)
    } else {
      setError('Incorrect code')
    }
  }

  if (isRevealed) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent/10 to-neutral-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-serif mb-4 text-accent">This site is a surprise</h1>
        <p className="mb-6 text-neutral-600">Enter the passcode to reveal the content.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter code"
            className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <button type="submit" className="btn w-full">
            Enter
          </button>
        </form>
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </div>
    </div>
  )
}