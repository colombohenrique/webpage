import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiGo,
    DiMysql,
    DiReact,
    DiVisualstudio,
    DiDotnet
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass';
import Rate from './Rate';

const technologies = [
    {id: "vs", name: "Visual Studio", icon: <DiVisualstudio/>, conhecimento: 4.5},
    {id: "dotnet", name: "Microsoft .NET", icon: <DiDotnet/>, conhecimento: 4},
    {id: "mysql", name: "MySQL", icon: <DiMysql/>, conhecimento: 4},
    {id: "go", name: "GoLang", icon: <DiGo/>, conhecimento: 3},
    {id: "react", name: "React", icon: <DiReact/>, conhecimento: 3},
    {id: "html", name: "HTML5", icon: <DiHtml5/>, conhecimento: 3},
    {id: "js", name: "JavScript", icon: <DiJsBadge/>, conhecimento: 3},
    {id: "css", name: "CSS3", icon: <DiCss3/>, conhecimento: 2.5},
];

const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Conhecimentos</h2>
            <div className='technologies-grid'>
                {technologies.map((tech) => (
                    <div className="technology-card">
                        <div className={tech.id}>
                            {tech.icon}
                        </div>
                        <div>
                            <h3>{tech.name}</h3>
                            <p>Nivel de conhecimento:</p>
                        </div>
                        <div className="rating">
                            <Rate count={tech.conhecimento}></Rate>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default TechnologiesContainer