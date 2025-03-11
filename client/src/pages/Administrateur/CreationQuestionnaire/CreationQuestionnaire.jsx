import React, { useState } from 'react';
import { Valider } from '../../../Components/Boutons/Valider/Valider';
import { NavFormateur } from '../../../Components/Navs/NavFormateur';
import './CreationQuestionnaire.css';

export const CreationQuestionnaire = () => {
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [formation, setFormation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [question, setQuestion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        
        const data = {
            titre,
            description,
            formation
        };

        try {
            const response = await fetch('http://localhost:3000/api/questionnaire', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la création du questionnaire');
            }

            const result = await response.json();
            console.log('Questionnaire créé avec succès:', result);
        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    return (
        <>
            <NavFormateur />
            <main className="main-form">
                <h1 className="title-questionnaire">Créer votre questionnaire</h1>

                <form className="create-form" onSubmit={handleSubmit}>
                    <div className="form-section">
                        <label htmlFor="">Titre du questionnaire</label>
                        <input 
                            className="form-input" 
                            type="text" 
                            value={titre} 
                            onChange={(e) => setTitre(e.target.value)} 
                        />
                    </div>

                    <div className="form-section">
                        <label htmlFor="">Description du questionnaire</label>
                        <input 
                            className="form-input2" 
                            type="text" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                        />
                    </div>

                    <div className="form-section">
                        <label htmlFor="">Formations concernées par ce questionnaire</label>
                        <div className="radio-formation">
                            <div className="formation">
                                <input 
                                    type="radio" 
                                    name="formation" 
                                    value="POA"
                                    onChange={(e) => setFormation(e.target.value)} 
                                />
                                <label>ERA / POA</label>
                            </div>

                            <div className="formation">
                                <input 
                                    type="radio" 
                                    name="formation" 
                                    value="PrepaNum"
                                    onChange={(e) => setFormation(e.target.value)} 
                                />
                                <label>Prepa Num</label>
                            </div>

                            <div className="formation">
                                <input 
                                    type="radio" 
                                    name="formation" 
                                    value="Front-End"
                                    onChange={(e) => setFormation(e.target.value)} 
                                />
                                <label>Front-end</label>
                            </div>

                            <div className="formation">
                                <input 
                                    type="radio" 
                                    name="formation" 
                                    value="Back-End"
                                    onChange={(e) => setFormation(e.target.value)} 
                                />
                                <label>Back-end</label>
                            </div>

                            <div className="formation">
                                <input 
                                    type="radio" 
                                    name="formation" 
                                    value="CDA"
                                    onChange={(e) => setFormation(e.target.value)} 
                                />
                                <label>CDA</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <label htmlFor="">Dates</label>
                        <div className="date-div">
                            <div className="dates-field">
                                <input 
                                    className="date-input" 
                                    type="date" 
                                    value={startDate} 
                                    onChange={(e) => setStartDate(e.target.value)} 
                                />
                            </div>
                            <div className="dates-f">
                                <input 
                                    className="date-input" 
                                    type="date" 
                                    value={endDate} 
                                    onChange={(e) => setEndDate(e.target.value)} 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <label htmlFor="">Questions</label>
                        <input 
                            className="form-input" 
                            type="text" 
                            value={question} 
                            onChange={(e) => setQuestion(e.target.value)} 
                        />
                    </div>

                    <Valider />
                </form>
            </main>
        </>
    );
};
