import { Link, useParams } from "react-router-dom";
import { allCountries } from "../AllCountries/data";
import styles from './styles.module.sass';
import Header from "../../component/Header";
import Footer from "../../component/Footer";

interface City {
    id: string;
    name: string;
    imageCity: string;
    description?: string;
}

interface Country {
    id: string;
    country: string;
    image: string;
    cities: City[];
}
const Cities = () => {
    const { countryId } = useParams();
    const selectedCountry: Country|undefined= allCountries.find(country => country.id === countryId);

    if (!selectedCountry) {
        return <div>Страна не найдена</div>;
    }

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.h1}>{selectedCountry?.country}</h1>
                {selectedCountry && (
                    <div className={styles.cities}>
                        {selectedCountry.cities && selectedCountry.cities.map(({ id, name, imageCity, description }) => (
                            <Link to={`./city/${id}`} key={id}>
                                <div className={styles.city}>
                                    <img src={imageCity} alt={name} />
                                    <div className={styles.cityInfo}>
                                        <p>{name}</p>
                                        {description && <span>{description}</span>}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default Cities;
