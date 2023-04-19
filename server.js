// Setup 
import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

// Endpoints
app.post('/test', (req, res) => {
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}...`);
});