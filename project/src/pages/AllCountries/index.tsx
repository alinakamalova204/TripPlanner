import Footer from "../../component/Footer";
import styles from './styles.module.sass'
import {Link} from "react-router-dom";
import Header from "../../component/Header";
import {allCountries} from "./data";

const AllCountries = () => {

    return (
        <div className={styles.page}>
            <Header/>
            <h4>Все страны доступные для путешествий прямо сейчас</h4>
            <div className={styles.countries}>
                {allCountries.map((country, index: number) => (
                    <Link to={`./cities/${country.id}`} key={index}>
                        <div className={styles.item} key={index}>
                            <img src={country.image} alt={country.country}/>
                            <p className={styles.title}>{country.country}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <Footer/>
        </div>
    )
}
export default AllCountries