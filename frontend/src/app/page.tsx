"use client"
import usePage from "./usePage"

export default function ProductPage() {
  const {content} = usePage()

  return (
    <main>
      {content}
    </main>
  )
}
