import styles from './index.module.sass'
import {FaTelegram, FaVk, FaWhatsapp, FaYoutube} from "react-icons/fa";
import {Link} from "react-router-dom";
// import {  FaFacebook, FaTwitter, FaInstagram } from 'react-icons';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.column}>
                <h4>Ваш аккаунт</h4>
                <ul>
                    <Link to={'/signUp'}><li>Регистрация</li></Link>
                    <Link to={'/signIn'}><li>Войти</li></Link>
                </ul>
            </div>
            <div className={styles.column}>
                <h4>Разделы</h4>
                <ul>
                    <Link to={'/about'}><li>О нас</li></Link>
                    <Link to={'https://www.google.com/intl/ru/gmail/about/'}><li>Служба поддержки</li></Link>
                </ul>
            </div>
            <div className={styles.column}>
                <h4>Связь в соцсетях</h4>
                <div className={styles.socialIcons}>
                    <a href={'https://web.telegram.org'}><FaTelegram className={styles.icon}/></a>
                    <a href={'https://www.whatsapp.com'}><FaWhatsapp className={styles.icon}/></a>
                    <a href={'https://www.vk.com'}><FaVk className={styles.icon}/></a>
                    <a href={'https://www.youtube.com'}><FaYoutube className={styles.icon}/></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer