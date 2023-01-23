import Logo from "./Logo";
import Container from "./Container";
import styles from "src/styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          [ソーシャル]
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
