import styles from 'src/styles/container.module.css'

const Container = ({ children , large = false}) => {
    return (
        <div className={large ? styles.large : styles.default}>
            {children}
        </div>
    );
}



export default Container;