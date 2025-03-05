# Collaborative Story Creator

This is a **Collaborative Story Creator** web application built using **React (Vite)**, **Firebase Authentication**, and a **Mock Server** for managing stories. Users can register, log in, create short stories, and contribute sentence by sentence.

## 🚀 Features
- **User Authentication** (Login/Register using Firebase)
- **Home Page & Navigation**
- **Story Creation & Contribution**
- **Dashboard for Viewing & Adding to Stories**
- **Firebase Authentication with Protected Routes**
- **Mock Server to Store Stories Temporarily**
- **Fully Responsive UI**

---

## 📂 Folder Structure
```
collab-story-creator/
│── public/
│── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── StoryForm.jsx
│   │   ├── StoryList.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── StoryContext.jsx
│   ├── services/
│   │   ├── firebase.js
│   │   ├── mockServer.js
│   ├── App.jsx
│   ├── main.jsx
│── .env
│── package.json
│── vite.config.js
│── README.md
```

---

## 🛠️ Setup & Installation
### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/collab-story-creator.git
cd collab-story-creator
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Configure Firebase
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project & enable **Email/Password Authentication**
3. Copy your **Firebase Config** and add it to `.env`:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 4️⃣ Start the development server
```sh
npm run dev
```

---

## 🎯 Deployment (GitHub Pages)
1. Install `gh-pages`:
```sh
npm install gh-pages --save-dev
```
2. Update `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Deploy the app:
```sh
npm run deploy
```

Your app will be live at: `https://your-username.github.io/collab-story-creator/`

---

## 🔥 Tech Stack
- **Frontend:** React (Vite)
- **Authentication:** Firebase
- **State Management:** React Context API
- **Mock Database:** JavaScript Object

---



