import './GraphFormateur.css'
import { NavFormateur } from "../../../Components/Navs/NavFormateur"

export const GraphFormateur = () => {
    return (
        <>
            <NavFormateur />

            <h1>Visualiser les graphiques</h1>

            <section className='graph-selection'>
                <div className='select-label'>
                    <label htmlFor="graph" >Choissisez un graphique : </label>
                    <select name="graph" id="graph">
                        <option value="1">Questionnaire 1</option>
                        <option value="2">Questionnaire 2</option>
                        <option value="3">Questionnaire 3</option>
                        <option value="4">Questionnaire 4</option>
                    </select>
                </div>

                <div className='select-label'>
                    <label htmlFor="graph" >Choissisez un stagiaire : </label>
                    <select name="graph" id="graph">
                        <option value="1">Stagiaire 1</option>
                        <option value="2">Stagiaire 2</option>
                        <option value="3">Stagiaire 3</option>
                        <option value="4">Stagiaire 4</option>
                    </select>
                </div>
            </section >
        </>
    )
}