import Link from "next/link";
import styles from 'src/styles/logo.module.css'

const Logo = ({boxOn = false}) => {
    return (
        <Link href="/">
            <a className={boxOn ? styles.box : styles.basic}>Rion</a>
        </Link>
    );

}


export default Logo;