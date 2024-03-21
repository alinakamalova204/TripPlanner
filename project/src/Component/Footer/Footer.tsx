import './styles.sass'
import tg from './image/telegram.png'
import whats from './image/whatsapp.png'
import vk from './image/VK.com-logo.svg'
const Footer = () => {
    return (
        <div className={'Footer'}>
            <div>ООО "TripPlanner"</div>

            <div>
                О нас
                Разделы
                Служба поддержки
            </div>


            <div>
                Связь в соц сетях
                <div className='img-class'>
                    <img className='img' src={tg} alt={'*'}/>
                    <img className='img' src={whats} alt={'*'}/>
                {/*<svg className='img' src={vk}/>*/}
                </div>
            </div>
        </div>
    )
}
export default Footer