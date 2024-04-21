import styles from './index.module.sass'
import {Link} from "react-router-dom";
const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to={"/"} className={styles.link}>Вернуться на главную</Link>
        </div>
    )
}
export default NotFound