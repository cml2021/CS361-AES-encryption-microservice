import Base64 from 'crypto-js/enc-base64.js';
import WordArray from 'crypto-js/lib-typedarrays.js';
import { JSEncrypt } from 'jsencrypt';
import randomWords from 'better-random-words';

/* Generates a random AES key */
const genKey = () => {
    const keyArr = WordArray.random(32);       // generate a random 256-bit key
    const key = keyArr.toString(Base64);       // convert to Base64  

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
    numWords = Math.random() * (max - min) + min;

    let message = '';
    for (let i = 0; i < numWords; i++) {
        message = randomWords() + ' ' + message;
    }

    return message;
}

/* Encrypts a message with an AES key */
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
    console.log('key: ', key)

    // use public key to encrypt AES key
    const encryptedKey = encryptKey(key, publicKey);
    console.log('encrypted key: ', encryptedKey);

    // generate random message
    const message = genMessage();
    console.log('message: ', message);

    // encrypt message with AES key
    const encryptedMessage = encryptMessage(message, key);
    console.log('encrypted message: ', encryptedMessage);

    // return encrypted AES key and message
    return encryptedKey, encryptedMessage;
}

// TESTING
generateEncryptedKeyMessage('abc');

export default generateEncryptedKeyMessage;