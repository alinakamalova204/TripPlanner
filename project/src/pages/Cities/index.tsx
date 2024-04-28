import {useParams} from "react-router-dom";
import {allCountries} from "../AllCountries/data";
import Calendar from "../../component/Calendar";

const Cities = (props: any) => {
    const { countryId } = useParams(); // Получаем ID страны из URL
    // const id = props.match.params.id;
    const selectedCountry = allCountries.find(country => country.id === countryId); // Находим страну по ID

    return (
        <>
            {selectedCountry && (
                <div>
                    <h2>{selectedCountry.country}</h2>
                    {selectedCountry && selectedCountry.cities && selectedCountry.cities.map(city => (
                        <div key={city.id}>
                            <img src={city.imageCity} alt={city.name} />
                            <p>{city.name}</p>
                            <p>Helllloooo</p>
                        </div>
                    ))}
                </div>
            )}
            {/*<Calendar/>*/}
        </>
    );
};

export default Cities