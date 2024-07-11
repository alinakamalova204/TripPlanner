import React, {useState} from 'react';
import styles from './styles.module.sass'
import {popularDestinations} from "./data";
import {Link} from "react-router-dom";
interface Destination {
    id: string;
    country: string;
    image: string;
    description: string;
}
const PopularDestination = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (destination: any) => {
        const id = setTimeout(() => {
            setIsModalVisible(true);
            setSelectedDestination(destination);
        }, 500); // 5 секунд
        setTimeoutId(() => id);
    };

    const handleMouseLeave = () => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setIsModalVisible(false);
        setSelectedDestination(null);
    };

    const scrollLeft = () => {
        // const container = document.querySelector(.${styles.container});
        // if (container) {
        //     container.scrollLeft -= 300; // Измените значение на ширину слайда
        // }
    };

    const scrollRight = () => {
        // const container = document.querySelector(.${styles.container});
        // if (container) {
        //     container.scrollLeft += 300; // Измените значение на ширину слайда
        // }
    };
    return (
        <div className={styles.galleryAll}>
            <div className={styles.arrow_left} onClick={scrollLeft}></div>
            <h1>Популярные направления</h1>
            <div className={styles.container}>
                {popularDestinations.map((destination, index) => (
                    <Link to={`/cities/${destination.id}`} key={index}>
                        <div
                            className={styles.slide}
                            onMouseEnter={() => handleMouseEnter(destination)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img className={styles.image} src={destination.image} alt={destination.country} />
                            <p className={styles.title}>{destination.country}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className={styles.arrow_right} onClick={scrollRight}></div>
            {isModalVisible && selectedDestination && (
                <div className={styles.modal}>
                    <h2>{selectedDestination.country}</h2>
                    <p>{selectedDestination.description}</p>
                </div>
            )}
            {isModalVisible && (
                <div className={styles.overlay} />
            )}
        </div>
    );
};


export default PopularDestination