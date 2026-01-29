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
    <div className="min-h-screen flex items-center justify-