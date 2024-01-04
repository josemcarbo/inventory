"use client"
import Image from "next/image"
import useNavBar from "./useNavBar";
import styles from "./NavBar.module.css"

export default function NavBar() {
    const { selected, onClickOption } = useNavBar()

    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={selected === "dashboard" ? styles.selected : ""} onClick={() => onClickOption("/")}>
                    <Image priority={true} alt="dashboard" src="/icons/dashboard.png" width={18} height={18} />
                </li>
                <li className={selected === "product" ? styles.selected : ""} onClick={() => onClickOption("/product")}>
                    <Image priority={true} alt="product" src="/icons/product.png" width={18} height={18} />
                </li>
            </ul>
        </nav>
    )
}