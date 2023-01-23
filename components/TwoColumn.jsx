import styles from "src/styles/two-column.module.css";

export const TwoColumn = ({ children }) => {
  return <div className={styles.flexContainer}>{children}</div>;
};

export const TwoColumnMain = ({children}) => {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}

export const TwoColumnSidebar = ({children}) => {
    return (
        <div className={styles.sidebar}>
            {children}
        </div>
    )
}