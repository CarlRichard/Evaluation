import mysql from "mysql2/promise";
import { Sequelize } from "sequelize";

const DB_NAME = "Eval_db";
const DB_USER = "root";
const DB_PASSWORD = "mdp";
const DB_HOST = "bdd";

// Fonction pour créer la base si elle n'existe pas
const createDatabaseIfNotExists = async () => {
    try {
        const connection = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
        });

        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
        console.log(`✅ Base de données '${DB_NAME}' vérifiée/créée.`);

        await connection.end();
    } catch (error) {
        console.error("❌ Erreur lors de la création de la base :", error);
    }
};

// Création de la connexion à la base de données
export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql",
    logging: true, // Active les logs des requêtes SQL
});

// Test de connexion et création de la base si besoin
export const initDB = async () => {
    await createDatabaseIfNotExists(); // Vérifie et crée la base si besoin

    try {
        await sequelize.authenticate();
        console.log("✅ Connexion à la base de données réussie.");

        // Synchronisation des modèles (ajuste sans tout supprimer)
        await sequelize.sync({ alter: true });
        
        const tables = await sequelize.query("SHOW TABLES FROM Eval_db;", { type: sequelize.QueryTypes.SELECT });
        console.log("📌 Tables disponibles :", tables);

        console.log("✅ Base de données synchronisée.");
    } catch (error) {
        console.error("❌ Erreur lors de l'initialisation de la base :", error);
    }
};

// Appel automatique de l'initialisation
initDB();
 