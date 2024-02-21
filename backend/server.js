
import express from 'express';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// app.get('/api/auth/login', (req, res) => {
//     res.send('Hello World!')
// });
//for clean code i am using routes so that i dont have to write the func in requests

app.use('/api/auth', authRoutes)
app.listen(PORT,() => {
    console.log(`server listening on port ${PORT}`)
});