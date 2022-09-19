# 🥝 T9 Keyboard Emulator

A fully functional number to word list converter made with __Next.js__ and __Typescript__.

## 🧮 Features
- <ins>Frontend</ins>
  - Phone Keyboard-like UI.
  - Next.js framework.  
  - Used Orbit Design System.
- <ins>Backend</ins>
  - API Endpoint that converts a numeric string into a list of words in the style of T9 or Phonewords.
  - Next.js API Route. An equivalent API written with Node.js/Express is available [here](https://github.com/thisisbernat/phonewords-express-typescript).
  - Filtering of words based on an English dictionary (~275000 words).

## 🌐 Deployment
The app is deployed at https://phonewords.vercel.app

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
Unit and integration tests (Jest) are available. From the project directory run:
```bash
npm run test
```
