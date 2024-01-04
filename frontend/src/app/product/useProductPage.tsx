"use client"
import { useAppSelector } from "@/common/Redux/hooks";

export default function useProductPage() {
    const content = useAppSelector((state) => state.navBar.option)

    return {
        content
    }
}