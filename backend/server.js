
import express from 'express';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import connectiontomongo from './db/connectionmongo.js';

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(express.json()); // from req.body 
app.use('/api/auth', authRoutes)









// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

// app.get('/api/auth/login', (req, res) => {
//     res.send('Hello World!')
// });
//for clean code i am using routes so that i dont have to write the func in requests

app.listen(PORT,() => {
    connectiontomongo();
    console.log(`server listening on port ${PORT}`)
});