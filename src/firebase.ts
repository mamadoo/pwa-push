import { Dispatch, SetStateAction } from "react";
import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken as getFirebaseToken,
} from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAjJukVeeuHcpD93sZPErXedwIH2dM6tfI",
  authDomain: "pwa-test-61ec5.firebaseapp.com",
  projectId: "pwa-test-61ec5",
  storageBucket: "pwa-test-61ec5.appspot.com",
  messagingSenderId: "524773891118",
  appId: "1:524773891118:web:ce39523cdaf8e3c60253bf",
};

const firebaseApp = initializeApp(firebaseConfig);
export const messaging = getMessaging(firebaseApp);

export const getToken = (setToken: Dispatch<SetStateAction<string>>) => {
  return getFirebaseToken(messaging, { vapidKey: "BIEyAEVaPrxM958iSjd58IYerr7AIgFY2ShFryc90jlr-8nrEuB64B46vjB_waZ2P6unwCfPzOKJ4oCLB368Gco" })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setToken(currentToken);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setToken(currentToken);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};