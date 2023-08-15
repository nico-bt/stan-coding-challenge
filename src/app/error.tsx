"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Ups... Something went wrong</h2>
      <button onClick={() => reset()} className="btn_error_page">
        Try again
      </button>
      <button onClick={() => router.push("/")} className="btn_error_page">
        Home
      </button>
    </div>
  )
}

export default Error
