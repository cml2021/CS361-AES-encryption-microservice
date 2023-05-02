import CryptoJS from 'crypto-js';
import JSEncrypt from 'node-jsencrypt';
import randomWords from 'better-random-words';

/* Generates a RSA public key for testing purposes in JSON */
const genPublicKey = () => {
    const encryptor = new JSEncrypt({default_key_size: 4096});
    let publicKey = encryptor.getPublicKey();
    publicKey = JSON.stringify(publicKey);

    return publicKey;
}

/* Generates a random AES key */
const genKey = () => {
    const keyArr = CryptoJS.lib.WordArray.random(32);       // generate a random 256-bit key
    const key = keyArr.toString(CryptoJS.enc.Base64);       // convert to Base64  

    return key;
}

/* Encrypts a key with a public key */
const encryptKey = (key, publicKey) => {
    const encryptor = new JSEncrypt();
    encryptor.setPublicKey(publicKey);
    const encryptedKey = encryptor.encrypt(key);

    return encryptedKey;
}

/* Generates a random message string */
const genMessage = () => {
    const min = 4;
    const max = 11;
    const numWords = Math.random() * (max - min) + min;

    let message = '';
    for (let i = 0; i < numWords; i++) {
        message = randomWords() + ' ' + message;
    }

    return message;
}

/* Encrypts a message with an AES key string */
const encryptMessage = (message, key) => {
    const encryptedMessage = CryptoJS.AES.encrypt(
        message,
        key
    );

    return encryptedMessage;
}

const generateEncryptedKeyMessage = (publicKey) => {
    // generate AES key
    const key = genKey();

    // use public key to encrypt AES key
    const encryptedKey = encryptKey(key, publicKey);

    // generate random message
    const message = genMessage();

    // encrypt message with AES key
    const encryptedMessage = encryptMessage(message, key);

    // return encrypted AES key and message
    return encryptedKey, encryptedMessage;
}

export default generateEncryptedKeyMessage;

export {genPublicKey};

// Testing
genPublicKey();