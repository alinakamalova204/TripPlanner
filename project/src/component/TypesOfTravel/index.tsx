import beach from './../../assets/image/beach.jpg'
import mountain from './../../assets/image/mountain.png'
import culture from './../../assets/image/culture.jpg'
import spa from './../../assets/image/spa.jpg'
import winter from './../../assets/image/winter.jpg'
import styles from './styles.module.sass'
import {allCountries} from "../../pages/AllCountries/data";
import {Link} from "react-router-dom";
import {AnyObject} from "yup";
interface Country {
    name: string;
    // другие свойства...
}

interface HandleClickParams {
    countries: Country[];
}
const TypesOfTravel = () => {
    const travelTypes = [
        { idTravel: 2, type: 'Горный', image: mountain, countries: [allCountries[0], allCountries[1], allCountries[5], allCountries[7], allCountries[11], allCountries[12]] },
        { idTravel: 3, type: 'Культурно-исторический', image: culture, countries: [ allCountries[0], allCountries[1], allCountries[2], allCountries[3], allCountries[5], allCountries[7], allCountries[8],allCountries[9],allCountries[10],allCountries[12]] },
        { idTravel: 4, type: 'Лечебно-оздоровительный', image: spa, countries: [allCountries[1], allCountries[2],allCountries[3],allCountries[5],allCountries[10]]},
        { idTravel: 5, type: 'Зимний', image: winter, countries: [allCountries[0]] },
        { idTravel: 6, type: 'Пляжный', image: beach, countries: [allCountries[2], allCountries[3], allCountries[4],allCountries[5], allCountries[6],allCountries[8],allCountries[9],allCountries[11]] },
    ];
    const handleClick = (countries: AnyObject) => {
        console.log('Страны:', countries);
    };

    return (
        <div className={styles.galleryAll}>
            <h3>Уже знаешь какой вид отдыха тебе по душе?</h3>
            <div className={styles.container}>
                {travelTypes.map((travel, index) => (
                    <Link to={`/countries/${travel.idTravel}`} key={index}>
                        <div className={styles.slide} key={index} onClick={() => handleClick(travel.countries)}>
                            <img className={styles.image} src={travel.image} alt={travel.type} />
                            <p className={styles.title}>{travel.type}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default TypesOfTravel