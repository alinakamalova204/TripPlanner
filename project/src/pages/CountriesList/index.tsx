import React from 'react';

import styles from './styles.module.sass'
import {useParams} from "react-router-dom";


interface Country {
    name: string
}
interface TravelType {
    idTravel: number,
    type: string,
    image: string,
    countries: Country[]
}
interface CountriesListProps {
    travelTypes: TravelType[]
}

const CountriesList: React.FC<CountriesListProps> = ({ travelTypes }) => {
    const { idTravel } = useParams<{ idTravel: string}>();
    const travelId = parseInt(String(idTravel !== undefined), 10)
    const travel = travelTypes.find(t => t.idTravel === travelId)

    return (
        <div className={styles.gallery}>
            {travel ? (
                <>
                    <h3>{travel.type}</h3>
                    <div className={styles.countriesContainer}>
                        {travel.countries.map((country, index) => (
                            <div key={index} className={styles.countryItem}>
                                <p>{country.name}</p>
                            </div>
                        ))}
                    </div>
                </>
            ): ''}
        </div>
    );
};

export default CountriesList;