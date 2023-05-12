import '../styles/components/informationcontainer.sass';
import {AiOutlineMail, AiFillEnvironment, AiOutlineWhatsApp} from 'react-icons/ai'

const InformationContainer = () => {
    return (
        <section id="information">
            <div className="info-card">
                <a href='https://wa.me/5514996696599' target='_blank'><AiOutlineWhatsApp id='phone-icon'/></a>
                <div>
                    <h3>Telefone</h3>
                    <p>(14) 99669-6599</p>
                </div>
            </div>

            <div className="info-card">
                <a href='mailto:jhbcolombo@gmail.com'><AiOutlineMail id='email-icon'/></a>
                <div>
                    <h3>E-mail</h3>
                    <p>jhbcolombo@gmail.com</p>
                </div>
            </div>

            <div className="info-card">
                <AiFillEnvironment id='pin-icon'/>
                <div>
                    <h3>Localização</h3>
                    <p>Bauru / SP</p>
                </div>
            </div>
        </section>
    )
};

export default InformationContainer;