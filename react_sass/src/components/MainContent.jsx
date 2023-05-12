import '../styles/components/maincontent.sass';
import AboutContainer from './AboutContainer';
import TechnologiesContainer from './TechnologiesContainer';
import WorkExperienceContainer from './WorkExperienceContainer';

const MainContent = () => {
    return <main id="main-content">
        <AboutContainer/>
        <TechnologiesContainer/>
        <WorkExperienceContainer/>
    </main>;
};

export default MainContent