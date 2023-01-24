import styles from "src/styles/contact.module.css"
import Social from "./Social";

const Contact = () => {
    return (
        <div className={styles.stack}>
            <h3 className={styles.heading}>Contact</h3>
            <Social iconSize="30px" />
            <address>rion.it456@gmail.com</address>
        </div>
    );
}

export default Contact;