import styles from './styles.module.sass'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <span>TripPlanner</span>
            </div>
            <nav className={styles.header__nav}>
                <ul>
                    <li className={styles.links_container}>
                        <Link className={styles.link} to='/'>Главная</Link>
                        <Link to='/signin'>Мои планы</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header