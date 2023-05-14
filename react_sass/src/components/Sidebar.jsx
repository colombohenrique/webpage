import SocialNetworks from './SocialNetworks';
import Avatar from '../img/perfil.jpg';
import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';

const Sidebar = () => {
    return <div id="sidebar">
        <img src={Avatar} alt="Colombo"/>
        <p className="name">José Henrique Bispo Colombo</p>
        <SocialNetworks/>
        <InformationContainer/>
    </div>;
}

export default Sidebar