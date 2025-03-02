import { useEffect, useState } from 'react'

//import "./Home-stagiaire.css"

export const HomeStagiaire = () => {

    const {Home, setHome} = useState();

    useEffect(() => {
        handleQuestionnaires();
        handleGraphique();
        handleProfil()
    }, [])


const handleQuestionnaires = () => {
    fetch()
    .then(res => res.json())
    .then(data => setHome(data))
    .catch(console.error)
}

const handleGraphique = () => {
    fetch()
    .then(res => res.json())
    .then(data => setHome(data))
    .catch(console.error)
}

const handleProfil = () => {
    fetch()
    .then(res => res.json())
    .then(data => setHome(data))
    .catch(console.error)
}
    return(
        <>
        <section className='section'>
            <div className=''>
                <button className='btnQuestionnaire' onClick={handleQuestionnaires}>Mes questionnaires</button>
                <button className='btnGraphique' onClick={handleGraphique}>Mes graphiques</button>
            </div>
            <div>
                <button className='btnProfil' onClick={handleProfil}>Modifier le profil</button>
            </div>
        </section>
        </>
    )
}