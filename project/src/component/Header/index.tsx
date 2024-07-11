import styles from './styles.module.sass'
import {Link} from "react-router-dom";
interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <span>TripPlanner</span>
            </div>
            <nav className={styles.header__nav}>
                <ul>
                    <li className={styles.links_container}>
                        <Link className={styles.link} to='/'><span className={styles.span}>Главная</span></Link>
                        <Link className={styles.link} to='/signin'><span className={styles.span}>Мои планы</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header