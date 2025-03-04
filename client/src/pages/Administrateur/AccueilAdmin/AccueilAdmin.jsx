import { DecoOrange } from "../../../Components/Boutons/Deconnexion/DecoOrange"
import "./AccueilAdmin.css"

export const AccueilAdmin = () => {

    

    return(
        <>
        <nav className='vide-vert'></nav>
        <section className='sectionAdmin'>
            <div className='lesbtn'>
                <div className="end">
                    <button className='bouton-admin' >Front-end</button>
                    <button className='bouton-admin'>Back-end</button>
                </div>
                <div className="num">
                    <button className='bouton-admin'>CDA</button>
                    <button className='bouton-admin'>Prepa num</button>
                </div>
                <div className="autre">
                    <button className='bouton-admin'>POA</button>
                    <button className='bouton-admin'>Modifier mon profil</button>
                </div>
            </div>
            <DecoOrange/>
        </section>
        
        </>
    )
}