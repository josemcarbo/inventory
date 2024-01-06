"use client"
import { Product, STOCK, useGetStockQuery } from "@/common/Api/stockApi";
import { useAppSelector } from "@/common/Redux/hooks";
import { transformProduct } from "@/common/utils";
import { useEffect, useState } from "react";

export default function useStockPage() {
    const content = useAppSelector((state) => state.navBar.option)
    const [stock, setStock] = useState(STOCK)
    const [isClient, setIsClient] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<Product | null | undefined>(null)
    // const { data, isLoading, error } = useGetStockQuery()

    useEffect(() => {
        setIsClient(true)
    }, [])

    const onOpenDetailModal = () => setIsOpenModal(true)

    const onCloseDetailModal = () => {
        setIsOpenModal(false)
        setSelectedProduct(undefined)
    }

    const onRowClick = (row: number) => {
        setSelectedProduct(stock.find(v => v.id === row))
        onOpenDetailModal()
    }

    return {
        stock: stock.map(s => transformProduct(s)),
        isClient,
        isOpenModal,
        onCloseDetailModal,
        onOpenDetailModal,
        onRowClick,
        selectedProduct
    }
}