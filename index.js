import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import { authentication } from './routes/auth.route.js';
import { sequelize } from './database.js';
import { questionnaire } from './routes/questionnaire.route.js';
import { question } from './routes/question.route.js';
import { reponse } from './routes/reponse.route.js';
import { evaluation } from './routes/evaluation.route.js';




const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true //gere la conservation des cookies
}));
app.use(express.json());
app.use(cookieParser());

//middlewares authentication
app.use('/auth', authentication);

// Utilisation des routes 
app.use('/api/questionnaire', questionnaire);
app.use('/api/question', question);
app.use('/api/reponse', reponse);
app.use('/api/reponse', evaluation);

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }) 
.then(()=> {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})
.catch(console.error)
