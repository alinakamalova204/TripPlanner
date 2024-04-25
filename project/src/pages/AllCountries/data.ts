import japan from './../../assets/image/japonise.jpg'
import turkish from './../../assets/image/turkish.jpg'
import tailand from './../../assets/image/tailand.jpg'
import uae from './../../assets/image/uae.jpg'
import china from './../../assets/image/china.jpg'
import maldives from './../../assets/image/maldivesjpg.jpg'
import uzbekistan from './../../assets/image/uzbekistan.jpg'
import cuba from './../../assets/image/cubajpg.jpg'
import egipet from './../../assets/image/egipet.jpg'
import india from './../../assets/image/india.jpg'
import vietnam from './../../assets/image/vietnam.jpg'
import armenia from './../../assets/image/armenia.jpg'
import russia from './../../assets/image/russia.jpg'
export const allCountries = [
    {
        id: 'rus',
        country: 'Россия',
        image: russia ,
        cities: [
            { id: 'msk', name: 'Москва', imageCity: russia },
            { id: 'cpb', name: 'Санкт-Петербург', imageCity: russia },
            { id: 'kzn', name: 'Казань', imageCity: russia },
        ]
    },
    {
        id: 'jap',
        country: 'Япония',
        image: japan,
        cities: [
            { id: 'tok', name: 'Токио', imageCity: japan},
        ]
    },
    { country: 'Турция', image: turkish },
    { country: 'Таиланд', image: tailand },
    { country: 'ОАЭ', image: uae },
    { country: 'Китай', image: china },
    { country: 'Мальдивы', image: maldives },
    { country: 'Узбекистан', image: uzbekistan },
    { country: 'Куба', image: cuba },
    { country: 'Египет', image: egipet },
    { country: 'Индия', image: india },
    { country: 'Вьетнам', image: vietnam },
    { country: 'Армения', image: armenia },

]