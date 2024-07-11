import Header from "../../component/Header";
import Footer from "../../component/Footer";
import styles from './style.module.sass'
import image from './../../assets/image/flat-lay-travel-items-assortment.jpg'
import image1 from './../../assets/image/3d-rendering-of-arrow-hitting-the-target.jpg'

const About = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.text}>
                <div className={styles.points}>
                    <div className={styles.image_wrapper}>
                        <img className={styles.image} src={image1} alt={''}/>
                    </div>
                    <div className={styles.text_wrapper}>
                        <h1 className={styles.h2}>Наша миссия</h1>
                        <span className={styles.slogan}>Наша миссия - помочь людям воплотить свои мечты о путешествиях в жизнь. Мы верим, что каждый человек заслуживает качественного отдыха, который оставит только приятные воспоминания. Поэтому наша команда профессионалов предлагает индивидуальный подход к каждому клиенту и разрабатывает уникальные маршруты путешествий, учитывая все пожелания и потребности наших клиентов. Мы стремимся сделать ваш отдых незабываемым!</span>
                    </div>
                </div>
                <div className={styles.points}>
                    <div className={styles.image_wrapper}>
                        <img className={styles.image} src={image} alt={''}/>
                    </div>
                    <div className={styles.text_wrapper}>
                        <h1 className={styles.h2}>Наше видение</h1>
                        <span className={styles.slogan}>Наше видение - это вдохновлять людей на захватывающие путешествия и помогать им воплощать свои мечты в реальность. Мы стремимся создать уникальный опыт для каждого путешественника, предлагая индивидуальный подход к планированию и организации путешествий</span>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default About