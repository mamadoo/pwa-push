/* eslint-disable */
// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// importScripts("/firebase-config.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAjJukVeeuHcpD93sZPErXedwIH2dM6tfI",
  authDomain: "pwa-test-61ec5.firebaseapp.com",
  projectId: "pwa-test-61ec5",
  storageBucket: "pwa-test-61ec5.appspot.com",
  messagingSenderId: "524773891118",
  appId: "1:524773891118:web:ce39523cdaf8e3c60253bf",
};

const app = firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(function (payload) {
  const notification = payload.notification;
  if (notification && notification.title) {
    // Customize notification here
    const notificationOptions = {
      ...notification,
      icon: "/logo192.png",
    };

    self.registration.showNotification(notification.title, notificationOptions);
  }
});
