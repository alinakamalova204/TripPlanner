import React from 'react';
import styles from './styles.module.sass'
import {popularDestinations} from "./data";
import {Link} from "react-router-dom";
const PopularDestination = () => {
    return (
        <div className={styles.galleryAll}>
            <h2>Популярные направления</h2>
            <div className={styles.container}>
                {popularDestinations.map((destination, index: number) => (
                    <Link to={`./cities/${destination.id}`} key={index}>
                        <div className={styles.slide} key={index}>
                            <img className={styles.image} src={destination.image} alt={destination.country} />
                            <p className={styles.title}>{destination.country}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};


export default PopularDestination