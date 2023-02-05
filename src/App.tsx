import { useState } from "react";
import { getToken } from "./firebase";

function App() {
  const [token, setToken] = useState("");
  getToken(setToken);

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
