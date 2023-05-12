import '../styles/components/workexperiencecontainer.sass';
import aucom from "../img/aucom.png";
import rhitmo from "../img/rhitmo.png";
import tds from "../img/tds.png";
import union from "../img/union.png";

const exp = [
    {id: "rhitmo", name: "Rhitmo Tech", href: "https://rhitmotech.com.br/", imgsrc: rhitmo, inicio: " ABR 2022", fim: "Atualmente"},
    {id: "aucom", name: "Aucom", href: "https://aucom.com.br/", imgsrc: aucom, inicio: "JUN 2021", fim: "FEV 2022"},
    {id: "tds", name: "TDS Enterprise", href: "https://tds-enterprise.com/", imgsrc: tds, inicio: "FEV 2021", fim: "MAI 2021"},
    {id: "union", name: "TDS Union", href: "https://www.facebook.com/tdsunion/?locale=pt_BR", imgsrc: union, inicio: "SET 2019", fim: "DEZ 2020"},
];


const WorkExperienceContainer = () => {
    return (
        <section className="experience-container">
            <h2>Experiências</h2>
            <div className="experience-grid">
                {exp.map((xp)=>(
                    <div className="experience-card">
                        <a href={xp.href} target="_blank"><img src={xp.imgsrc} alt={xp.id}/></a>
                        <div>
                            <a href={xp.href} target="_blank"><h3>{xp.name}</h3></a>
                            <p>{xp.inicio} - {xp.fim}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default WorkExperienceContainer