import styles from "src/styles/social.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Social = ({ iconSize = 'initial' }) => {
  return  (
    <ul className={styles.list} style={{ '--icon-size': iconSize }}>
        <li>
            <a href="https://twitter.com/Rion_Y_0919">
                <FontAwesomeIcon icon={faTwitter} />
                <span className="sr-only">Twitter</span>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/rion_y_0919/">
                <FontAwesomeIcon icon={faInstagram} />
                <span className="sr-only">Instagram</span>
            </a>
        </li>
        <li>
            <a href="https://github.com/Rion0919">
                <FontAwesomeIcon icon={faGithub} />
                <span className="sr-only">Github</span>
            </a>
        </li>
    </ul>
  )
};


export default Social;
