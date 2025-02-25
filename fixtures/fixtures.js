import { Utiliateur, Questionnaire, Question, Evaluation, Reponse } from './models'; // Importe tes modèles

export const createFixtures = async () => {
  try {
    // Création de 10 utilisateurs
    const Utiliateurs = [];
    for (let i = 0; i < 10; i++) {
      const user = await Utiliateur.create({
        username: `Utiliateur${i + 1}`,
        email: `Utiliateur${i + 1}@example.com`,
        password: 'password',
      });
      Utiliateurs.push(user);
    }

    // Création de 3 questionnaires
    const questionnaires = [];
    for (let i = 0; i < 3; i++) {
      const questionnaire = await Questionnaire.create({
        titre: `Questionnaire ${i + 1}`,
        description: `Description for questionnaire ${i + 1}`,
        id_utilisateur: Utiliateurs[i].id, 
      });
      questionnaires.push(questionnaire);
    }

    // Création de 15 questions, 5 par questionnaire
    const questions = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 5; j++) {
        const question = await Question.create({
          titre: `Question ${j + 1} for Questionnaire ${i + 1}`,
          description: `Description for question ${j + 1}`,
          id_questionnaire: questionnaires[i].id,
        });
        questions.push(question);
      }
    }

    // Création de 2 évaluations pour les utilisateurs
    const evaluations = [];
    for (let i = 0; i < 2; i++) {
      const evaluation = await Evaluation.create({
        id_utilisateur_evaluateur: Utiliateurs[i].id, // Utilisateur évaluateur
        id_utilisateur_evalue: Utiliateurs[(i + 1) % 10].id, // Utilisateur évalué
        commentaire: `Commentaire de l'évaluation ${i + 1}`,
      });
      evaluations.push(evaluation);
    }

    // Création de réponses pour les questions et les évaluations
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 5; j++) {
        const response = await Reponse.create({
          texte: `Réponse ${j + 1} pour la question ${j + 1} dans le questionnaire ${i + 1}`,
          id_question: questions[j + i * 5].id, // Lier la question correspondante
          id_evaluation: evaluations[i].id, // Lier à l'évaluation correspondante
        });
      }
    }

    console.log('Fixtures créées avec succès!');
  } catch (error) {
    console.error('Erreur lors de la création des fixtures:', error);
  }
};
