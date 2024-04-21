import {useParams} from "react-router-dom";
import {allCountries} from "../AllCountries/data";
import Calendar from "../../Component/Calendar";

const Cities = (props: any) => {
    // const { id } = useParams(); // Получаем ID страны из URL
    const id = props.match.params.id;
    const selectedCountry = allCountries.find(country => country.id === id); // Находим страну по ID

    return (
        <>
            {selectedCountry && (
                <div>
                    <h2>{selectedCountry.country}</h2>
                    {selectedCountry && selectedCountry.cities && selectedCountry.cities.map(city => (
                        <div key={city.id}>
                            <img src={city.imageCity} alt={city.name} />
                            <p>{city.name}</p>
                        </div>
                    ))}
                </div>
            )}
            {/*<Calendar/>*/}
        </>
    );
};

export default Cities