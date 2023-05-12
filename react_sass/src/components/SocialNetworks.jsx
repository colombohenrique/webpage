import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'; 
import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn/>, href: "https://www.linkedin.com/in/jhbcolombo/"},
    {name: "github", icon: <FaGithub/>, href: "https://github.com/colombohenrique"},
    {name: "instagram", icon: <FaInstagram/>, href: "https://www.instagram.com/colombo.henrique/"},
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.href} className="social-btn" id={network.name} key={network.name} target="_blank">
                    {network.icon}
                </a>
            ))}
        </section>
    );
};

export default SocialNetworks;