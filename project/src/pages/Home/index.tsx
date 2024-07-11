import Footer from "../../component/Footer";
import {Link} from "react-router-dom";
import TypesOfTravel from "../../component/TypesOfTravel";
import Header from "../../component/Header";
import PopularDestination from "../../component/PopularDestinations";
import Promo from "../../component/Promo";
import styles from './styles.module.sass'


const Home = () => {
    return (
        <div>
            <Header className={styles.header}/>
            <Promo/>
            <PopularDestination/>
            <div className={styles.container}>
                <Link to="/allcountries">
                    <button className={styles.btn} type="button">Посмотреть все страны</button>
                </Link>
            </div>
            <TypesOfTravel/>
            {/*<MapComponent/>*/}
            <Footer/>
        </div>
    )
}
export default Home