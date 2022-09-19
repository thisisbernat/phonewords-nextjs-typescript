# 🥝 T9 Keyboard Emulator

This web app is a fully functional number to word list converter that emulates T9 predictive text technology. It has a phone keyboard-like UI that allows the user to input numbers, which get converted into a list of words to be used to build a message. It has been made with __Next.js__ and __Typescript__.

The app is deployed at https://phonewords.vercel.app

## 🧮 Features
- <ins>Frontend</ins>
  - Used Orbit Component Library.
- <ins>Backend</ins>
  - API Endpoint that converts a numeric string into a list of words in the style of T9 or Phonewords.
  - Next.js API Route. An equivalent API written with Node.js/Express is available [here](https://github.com/thisisbernat/phonewords-express-typescript).
  - Filtering of words based on an English dictionary (~275000 words).

## 🛫 How to run the app locally
```bash
git clone https://github.com/thisisbernat/phonewords-nextjs-typescript
cd phonewords-nextjs-typescript
npm i
npm run build
npm run start
```
The app will be available at http://localhost:3000

## 🧪 How to run tests
Tests for the API Endpoint, custom hook and components are available. From the project directory run:
```bash
npm run test
```