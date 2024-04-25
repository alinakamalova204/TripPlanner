import Footer from "../../component/Footer";
import maldives from './../../assets/image/maldivesjpg.jpg'
import styles from './styles.module.sass'
import Header from "../../component/Header";
const Plans = () => {
    return (
        <div>
            <Header/>
            Мои планы
            <div className={styles.card}>
                <div className={styles.details}>
                    <p>Количество путешественников: 2</p>
                    <p>Страна: Мальдивы</p>
                    <p>Остров: Расду</p>
                    <p>Дата: 10.04.2024-20.04.2024</p>
                    <p>Город вылета: Казань</p>

                </div>
                <img className={styles.img} src={maldives} alt={maldives}/>
            </div>

            <div className={styles.card}>
                <div>
                    <p>Количество путешественников: 2</p>
                    <p>Страна: Мальдивы</p>
                    <p>Остров: Расду</p>
                    <p>Дата: 10.04.2024-20.04.2024</p>
                    <p>Город вылета: Казань</p>

                </div>
                <img className={styles.img} src={maldives} alt={maldives}/>
            </div>
            <Footer/>
        </div>
    )
}
export default Plans