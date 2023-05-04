# AES Encryption Microservice

## Overview

Upon receiving a public RSA key, this microservice:

- Generates a random AES key
- Encrypts the AES key using the public key
- Generates a random message string
- Encrypts the message with the AES key
- Responds with the encrypted AES key and encrypted message

## How to Request Data

Send an HTTP POST request to [https://cs361-microservice.herokuapp.com/](https://cs361-microservice.herokuapp.com/) with Content-Type set to `application/json` with a request body containing the RSA public key.

**Example request body*:*

```json
{
    "publicKey": "-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAg4lNPzu1T/aJp/zxjGA3\ncwm+dF5ejTFPHYUcrshHqJh59yGMsrsNBrPagmkWSraX495aOr817vE8py/p6gXu\nVUjn2bJoZqHoiLDJ4MjGE6aUMN5s3+cUq1njn4s2YpA/8fXECKcrTvMT8L4e84pH\nevS2tjMVVpVEj8yljPd7viY6+CLM4yws3LVcdGdxVXaF2MelgBDaydPng14hJKHi\nzM/VnXjrckPrgd/Qrl7i9w8yPZvF52T2ry/52tFB3hTbMVAVlmDxFjwmG7uzjgts\naKymCkx+mULVnepgKAgqi59EEOaiICDMNxnhYx6P8nraBzpCD5VgPUxeYTBrUOTO\nRWyWy6cSoa55jrwnvggOgMj2db9o7QNFajGyWXn00oYHCEwT8VENmPILF/DJ9Prs\nuY+r7SLEiWavkUIBGvxKkRUfhxu9IL1S/AAUzsbn8f28lcKexhDvaoj6hk9Sxxn8\n5tOeqS4r2qYNSwWwQ+VDUsqLMNIJ0q4PvrRpLaSiL5xJ5XLTYkyZqdOPmb1zrqTX\n7mB7W6D65Yfd8e3OgTV32tH1310gp1WqYpLuv1NGY8/YbrwtJKVboqzK+iEHE/2i\nA44WbVDoFpdmjW1f8vLIUPyAGiTEHmPKtNK2htM8rkNZ3G5Q3W9UarmYGQ5WXRwV\nJfsMmArUA3fsyDMCjYp1lTMCAwEAAQ==\n-----END PUBLIC KEY-----"
}
```

## How to Receive Data

Upon success, the microservice will respond to the POST request with a response body containing the encrypted AES key and encrypted message.

**Example response body:**

```json
{
    "encryptedKey": "NxnyD6OXvcCTIzVPXUtfz6XAsRjFFKDfcPMvommMrBau/geSH9OklU2ZwONxrzBCXdQMIF48KF5Tp+PwT/y1s9QfHdRgfNQrFMu2TcgyBS5dRhbCCAI1FG/bLhbBHJjGCLc0j3iKfdfoGQR+bBtP09lehM/rJ2DgmciFLagOGxak74KcT7hrDWT2PLF4I0but81g+OgxUBOYPcXlm/PqpjhihzTITlIueibWduuxOmqfS0LtdCq0PQ4Nqg9imQeOgVDvihvN7rVgQnJ0LYrok0xYqdl0Sfn/t2gBIogvmcyX0WebTPkSiT+cfXUKsxshtPr37IMc4EX8uZIvUoohRr8si8LzqDjqw4GTiZ2UuvoFzngLgDnT5NtXqtX7SFmC6l0bUepGaregwdeLr+scsNVUt+HHmx1sa54Yua4/yBDopu73QiIFGsT0UPul4sxKCMQHfiFNCkG4HdFyAFfH1sOb+EAmPRE6pgnGaqWICugmOkC8rzTBHYa18HXu3E3rSixIAXzQZHt+84WimuSQNJ4pTTyC/Ae9/qJWaiEHP8tsTDYby2nmByou8h7a40XVKsEWxShzRbJ04m9OqgkdZaxxu0mszr8MH80Vu8TmBfwSyafsInc8SvoNG2P/liqr8OEmSueLZy9WLa+yolxMi7IVPYf0XP7jZj6WxBCbTpQ=",
    "encryptedMessage": "U2FsdGVkX1+Tkhp8yYT3v8xOiptC2UrpajY28FlMCTB0gVkmvYf5SPyMc1uo9qEHYAXmpnZS+ZmvkPcd+zNkNWnQWVfSqgKF4qyzJkfC5Ogg1HqEkb4TjEUrepswkPyZ"
}
```

## UML Diagram

![Microservice UML diagram(1)](https://user-images.githubusercontent.com/72637386/236264216-42604ec7-b705-4b30-99ca-a5919c56c971.png)


