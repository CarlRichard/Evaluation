import { Sequelize } from "sequelize";


//creation d'une connexion a la bdd
export const sequelize = new Sequelize(
    "Eval_db",
    "root",
    "mdp",
    {
        host: 'bdd',
        dialect: 'mysql',
        logging: true
    }
)

// test de connexion
const testConnection = async () => {
    try {
        await sequelize.authenticate();
    } catch (err) {
        console.error(err);
    }
}

//appel de la fonction
testConnection();