import generateEncryptedKeyMessage, {genPublicKey} from './key-manager.js';

// Setup 
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

// Endpoints
app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.post('/', (req, res) => {
    let publicKey = req.body.publicKey;
    publicKey = JSON.parse(publicKey);
    console.log(publicKey);

    res.send('Response');
});

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}...`);
});