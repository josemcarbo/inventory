"use client"
import Image from "next/image";
import { Product } from "@/common/Api/stockApi"
import styles from "./ProductDetail.module.css"
import useProductDetail from "./useProductDetail";
interface Props {
    item: Product | null | undefined
}

export default function ProductDetail(props: Props) {
    const { product } = useProductDetail({ item: props.item })

    return (
        <article className={styles.product_detail_container}>
            <div className={styles.product_detail_header}>
                <h2>{product?.name}</h2>
                <div className={styles.product_detail_header_action}>
                    <span>
                        <Image title="Edit product" alt="price" src="/icons/edit.png" width={16} height={16} />
                    </span>
                    <span>
                        <Image title="Delete product" alt="price" src="/icons/delete.png" width={16} height={16} />
                    </span>
                </div>
            </div>
            {product?.description && (
                <div title="Description" className={styles.product_detail_item}>
                    <Image alt="comment" src="/icons/comment.png" width={18} height={18} />
                    <span>{product?.description}</span>
                </div>
            )}
            {product?.cost && (
                <div title="Cost" className={styles.product_detail_item}>
                    <Image alt="cost" src="/icons/cost.png" width={18} height={18} />
                    <span>{product?.cost}</span>
                </div>
            )}
            {product?.price && (
                <div title="Price" className={styles.product_detail_item}>
                    <Image alt="price" src="/icons/price.png" width={18} height={18} />
                    <span>{product?.price}</span>
                </div>
            )}
            {product?.quantity && (
                <div title="Quantity" className={styles.product_detail_item}>
                    <Image alt="quantity" src="/icons/quantity.png" width={18} height={18} />
                    <span>{product?.quantity}{product?.unit}</span>
                </div>
            )}
            {product?.arrival_at && (
                <div title="Arrived At" className={styles.product_detail_item}>
                    <Image alt="calendar" src="/icons/calendar.png" width={18} height={18} />
                    <span>{product?.arrival_at.toDateString()}</span>
                </div>
            )}
            {product?.expired_at && (
                <div title="Expired At" className={styles.product_detail_item}>
                    <Image alt="expired" src="/icons/calendar.png" width={18} height={18} />
                    <span>{product?.expired_at.toDateString()}</span>
                </div>
            )}
        </article>
    )
}