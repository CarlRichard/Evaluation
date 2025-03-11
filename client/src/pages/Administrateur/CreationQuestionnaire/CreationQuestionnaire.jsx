import { Valider } from '../../../Components/Boutons/Valider/Valider'
import { NavFormateur } from '../../../Components/Navs/NavFormateur'
import './CreationQuestionnaire.css'

export const CreationQuestionnaire = () => {
    return (
        <>
            <NavFormateur />
            <main className='main-form'>
                <h1 className='title-questionnaire'>Créer votre questionnaire</h1>

                <form className='create-form' action="">
                    <div className='form-section'>
                        <label htmlFor="">Titre du questionnaire</label>
                        <input className='form-input' type="text" />
                    </div>

                    <div className='form-section'>
                        <label htmlFor="">Description du questionnaire</label>
                        <input className='form-input2' type="text" />
                    </div>

                    <div className='form-section'>
                        <label htmlFor="">Formations concerné par ce questionnaire</label>
                        <div className='radio-formation'>

                            <div className='formation'>
                                <input type="radio" name='formation' />
                                <label htmlFor="">ERA / POA</label>
                            </div>

                            <div className='formation'>
                                <input type="radio" name='formation' />
                                <label htmlFor="">Prepa Num</label>
                            </div>

                            <div className='formation'>
                                <input type="radio" name='formation' />
                                <label htmlFor="">Front-end</label>
                            </div>

                            <div className='formation'>
                                <input type="radio" name='formation' />
                                <label htmlFor="">Back-end</label>
                            </div>

                            <div className='formation'>
                                <input type="radio" name='formation' />
                                <label htmlFor="">CDA</label>
                            </div>

                        </div>

                    </div>

                    <div className='form-section'>
                        <label htmlFor="">Dates</label>

                        <div className='date-div'>
                            <div className='dates-field'>
                                <input className='date-input' type="date" />
                            </div>

                            <div className='dates-f'>
                                <input className='date-input' type="date" />
                            </div>

                        </div>
                    </div>

                    <div className='form-section'>
                        <label htmlFor="">Questions</label>
                        <input className='form-input' type="text" />
                    </div>

                    <Valider />
                </form>
            </main>
        </>
    )
}