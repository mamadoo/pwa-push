/* eslint-disable */
// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAjJukVeeuHcpD93sZPErXedwIH2dM6tfI",
  authDomain: "pwa-test-61ec5.firebaseapp.com",
  projectId: "pwa-test-61ec5",
  storageBucket: "pwa-test-61ec5.appspot.com",
  messagingSenderId: "524773891118",
  appId: "1:524773891118:web:ce39523cdaf8e3c60253bf",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});