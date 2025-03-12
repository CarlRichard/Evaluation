import { NavStagiaire2 } from '../../../Components/Navs/NavStagiaire2';

import "./Home-Stagiaire.css"
import { Link } from 'react-router-dom';

export const HomeStagiaire = () => {   

    return(
        <>
        <NavStagiaire2 />
        <section className='section'>
            <div className='div-btn'>
                <button className='bouton-stagiaire'><Link to={'/questionnaires-stagiaire'}>Mes questionnaires</Link></button>
                <button className='bouton-stagiaire'><Link to={'/graphiques-stagiaire'}>Mes graphiques</Link></button>
            </div>
            <div>
                <button className='btnProfil'><Link to={'/modification-du-profil-stagiaire'}>Modifier le profil</Link></button>
            </div>
        </section>
        </>
    )
}