import styles from './index.module.sass'
import {FaTelegram, FaVk, FaWhatsapp, FaYoutube} from "react-icons/fa";
// import {  FaFacebook, FaTwitter, FaInstagram } from 'react-icons';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.column}>
                <h4>Ваш аккаунт</h4>
                <ul>
                    <li>Регистрация</li>
                    <li>Войти</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h4>Разделы</h4>
                <ul>
                    <li>О нас</li>
                    <li>Служба поддержки</li>
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