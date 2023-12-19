# Contact List App

<img width="1154" alt="image" src="https://drive.google.com/file/d/1PGcJP1C8dmdj5URdhj6Vgp9G9D6Yyk7u/view
">


**Contact List App** is a React application built with Vite that allows users to manage their contacts. It provides functionalities to add, delete, and update contacts, and it utilizes Firebase as the backend database.

## Features

1. **Contact Management**
   - Add new contacts with details such as name, phone number, and email.
   - Delete existing contacts to keep your list up to date.
   - Update contact information as needed.

2. **Firebase Integration**
   - Utilizes Firebase as the backend database for storing and retrieving contact data.
   - Enables seamless and secure data management.

## Technologies Used

- React
- Vite
- Firebase (Firestore)

## Getting Started

1. Clone the repository.
2. Navigate to the project folder.
3. Run `npm install` to install project dependencies.
4. Configure Firebase credentials in the project.
5. Run `npm run dev` to start the development server.

## Configuration

Before running the app, you need to set up Firebase credentials.

1. Create a new Firebase project on the [Firebase Console](https://console.firebase.google.com/).
2. Obtain your Firebase project configuration.
3. Replace the placeholder values in the `.env` file with your Firebase credentials.

```dotenv
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
