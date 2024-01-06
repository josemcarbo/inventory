"use client"
import Image from "next/image";
import useNavBar from "./useNavBar";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const { selected, onClickOption } = useNavBar()

    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={selected === "dashboard" ? styles.selected : ""} onClick={() => onClickOption("/")}>
                    <Image priority={true} alt="dashboard" src="/icons/dashboard.png" width={20} height={20} />
                </li>
                <li className={selected === "stock" ? styles.selected : ""} onClick={() => onClickOption("/stock")}>
                    <Image priority={true} alt="product" src="/icons/warehouse1.png" width={20} height={20} />
                </li>
            </ul>
        </nav>
    )
}