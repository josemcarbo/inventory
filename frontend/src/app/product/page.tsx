"use client"
import useProductPage from "./useProductPage"

export default function ProductPage() {
  const {content} = useProductPage()

  return (
    <main>
      {content}
    </main>
  )
}
