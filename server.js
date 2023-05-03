// Setup 
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import generateEncryptedKeyMessage, {genPublicKey} from './key-manager.js';
import asyncHandler from 'express-async-handler';
import {parse, stringify, toJSON, fromJSON} from 'flatted';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;


// Endpoints
app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.post('/', asyncHandler(async (req, res) => {
    const data = req.body;
    const publicKey = data['publicKey'];
    
    if (publicKey !== null || publicKey != undefined) {
        const [encryptedKey, encryptedMessage] = await generateEncryptedKeyMessage(publicKey);
        
        if (encryptedKey === 1) {
            res.status(500);
            throw new Error('Server error');

        } else {
            const response = {
                'encryptedKey': encryptedKey,
                'encryptedMessage': encryptedMessage
            }

            res.status(201).send(response);
        }

    } else {
        res.status(404);
        throw new Error('Bad request');
    }
}));

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}...`);
});