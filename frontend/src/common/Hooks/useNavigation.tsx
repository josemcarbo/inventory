"use client"
import { useRouter } from "next/navigation"

export default function useNavigation() {
    const router = useRouter()

    return {
        onNavigateToPath: (path: string) => router.push(path)
    }
}