"use client"
import Image from "next/image";
import styles from "./SideBar.module.css";

interface Props {
    children: React.ReactNode,
    isOpen: boolean,
    onClose: () => void
}
export default function SideBar(props: Props) {
    return (
        <>
            {
                props.isOpen && (
                    <>
                        <div className={styles.sidebar_overlay} onClick={props.onClose}></div>
                        <div className={styles.sidebar_content}>
                            <div className={styles.sidebar_content_close}>
                                <span>
                                    <Image alt="close" src="/icons/close.png" width={16} height={16} onClick={props.onClose} />
                                </span>
                            </div>
                            <div className={styles.sidebar_content_body}>
                                {props.children}
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}
