import { NavStagiaire2 } from '../../../Components/Navs/NavStagiaire2';

import "./Home-Stagiaire.css"
import { Link } from 'react-router-dom';

export const HomeStagiaire = () => {   

    return(
        <>
        <NavStagiaire2 />
        <section className='section'>
            <div className='div-btn'>
                <Link to={'/'}><button className='bouton-stagiaire'>Mes questionnaires</button></Link>
                <Link to={'/'}><button className='bouton-stagiaire'>Mes graphiques</button></Link>
            </div>
            <div>
                <Link to={'/modification-du-profil-stagiaire'}><button className='btnProfil'>Modifier le profil</button></Link>
            </div>
        </section>
        </>
    )
}