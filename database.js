import mysql from "mysql2/promise";
import { Sequelize } from "sequelize";

const DB_NAME = "Eval_db";
const DB_USER = "root";
const DB_PASSWORD = "mdp";
const DB_HOST = "bdd";

// Fonction pour créer la base de données si elle n'existe pas
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
        process.exit(1);
    }
};

// Attendre la création de la base AVANT d'initialiser Sequelize
await createDatabaseIfNotExists();

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql",
    logging: true,
});

// Suppression propre des clés étrangères avant la synchronisation
const dropAllForeignKeys = async () => {
    const tables = ["reponse", "questionnaire", "evaluation"];
    try {
        for (const table of tables) {
            const [constraints] = await sequelize.query(
                `SELECT CONSTRAINT_NAME FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS 
                 WHERE TABLE_NAME = :table AND TABLE_SCHEMA = :db AND CONSTRAINT_TYPE = 'FOREIGN KEY'`,
                { replacements: { table, db: DB_NAME } }
            );

            for (const { CONSTRAINT_NAME } of constraints) {
                console.log(`🗑️ Suppression de la contrainte '${CONSTRAINT_NAME}' sur '${table}'`);
                await sequelize.query(`ALTER TABLE \`${table}\` DROP FOREIGN KEY \`${CONSTRAINT_NAME}\`;`);
            }
        }
    } catch (error) {
        console.error("❌ Erreur lors de la suppression des contraintes :", error);
    }
};

export const initDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ Connexion à la base de données réussie.");

        await dropAllForeignKeys();
        await sequelize.sync({ alter: true });

        const tables = await sequelize.query("SHOW TABLES FROM Eval_db;", { type: sequelize.QueryTypes.SELECT });
        console.log("📌 Tables disponibles :", tables);

        console.log("✅ Base de données synchronisée.");
    } catch (error) {
        console.error("❌ Erreur lors de l'initialisation de la base :", error);
        process.exit(1);
    }
};

initDB();
