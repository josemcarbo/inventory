"use client"
import { useAppSelector } from "@/common/Redux/hooks";

export default function usePage() {
    const content = useAppSelector((state) => state.navBar.option)

    return {
        content
    }
}