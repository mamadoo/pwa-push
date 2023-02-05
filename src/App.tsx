import { useState } from "react";
import { getToken, onMessageListener } from "./firebase";

function App() {
  const [token, setToken] = useState("");
  getToken(setToken);

  onMessageListener()
    .then((payload) => {
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  return (
    <div>
      {token ? (
        <p>
          Notification permission enabled 👍🏻
          <br />
          <span>{token}</span>
        </p>
      ) : (
        <p>Need notification permission ❗️ </p>
      )}
    </div>
  );
}

export default App;
