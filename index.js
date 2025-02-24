import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import { authentication } from './routes/auth.route.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true //gere la conservation des cookies
}));
app.use(express.json());
app.use(cookieParser());

//middlewares authentication
app.use('/auth', authentication)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});