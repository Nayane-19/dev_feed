import styles from "./Header.module.scss"

import Logo from "../../assets/img/logo.svg"

export function Header() {
    return (
        <header className={styles.Header}>
            <img src={Logo} alt="logo" />
            <p>Feed Dev</p>
        </header>
    )
}