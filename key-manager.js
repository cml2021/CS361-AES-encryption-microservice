import CryptoJS from 'crypto-js';
import JSEncrypt from 'node-jsencrypt';
import randomWords from 'better-random-words';

/* Generates a RSA public key for testing purposes in JSON */
const genPublicKey = async () => {
    try {
        const encryptor = await new JSEncrypt({default_key_size: 4096});
        let publicKey = await encryptor.getPublicKey();
        publicKey = JSON.stringify(publicKey);

        return publicKey;
    }
    catch(err) {
        console.log(`Error generating public key: ${err}`);
    }
}

/* Generates a random AES key */
const genKey = () => {
    try {
        const keyArr = CryptoJS.lib.WordArray.random(32);       // generate a random 256-bit key
        const key = keyArr.toString(CryptoJS.enc.Base64);       // convert to Base64  

        return key;
    }
    catch(err) {
        console.log(`Error generating AES key: ${err}`);
    }
}

/* Encrypts a key with a public key */
const encryptKey = async (key, publicKey) => {
    try {
        const encryptor = await new JSEncrypt();
        await encryptor.setPublicKey(publicKey);
        const encryptedKey = await encryptor.encrypt(key);

        return encryptedKey;
    }
    catch(err) {
        console.log(`Error encrypting key: ${err}`);
    }
}

/* Generates a random message string */
const genMessage = () => {
    try {
        const min = 4;
        const max = 11;
        const numWords = Math.random() * (max - min) + min;

        let message = '';
        for (let i = 0; i < numWords; i++) {
            message = randomWords() + ' ' + message;
        }

        return message;
    }
    catch(err) {
        console.log(`Error generating random message: ${err}`);
    }
}

/* Encrypts a message with an AES key string */
const encryptMessage = (message, key) => {
    try {
        const encryptedMessage = CryptoJS.AES.encrypt(
            message,
            key
        );

        return encryptedMessage;
    }
    catch(err) {
        console.log(`Error encrypting message: ${err}`);
    }
}

/* Returns an encrypted AES key and message */
const generateEncryptedKeyMessage = async (publicKey) => {
    try {
        // generate AES key
        const key = genKey();

        // use public key to encrypt AES key
        const encryptedKey = await encryptKey(key, publicKey);

        // generate random message
        const message = genMessage();

        // encrypt message with AES key
        const encryptedMessage = encryptMessage(message, key);

        // return encrypted AES key and message
        return [encryptedKey, encryptedMessage];
    }
    catch(err) {
        return [1, 1];
    }
}

export default generateEncryptedKeyMessage;

export {genPublicKey};