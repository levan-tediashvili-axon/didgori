'use client'
import { EventDetails } from '@/features'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const PageEventDetails = () => {
  const router = useRouter()

  useEffect(() => {
    if (typeof router.query.eventId !== 'string') {
      router.push('/')
      return
    }
  }, [router])

  return <EventDetails eventId={router.query.eventId as string} />
}

export default PageEventDetails
