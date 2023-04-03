import { useState } from "react";
import { getToken } from "./firebase";

function App() {
  const [token, setToken] = useState("");
  getToken(setToken);

  const handleClick = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        alert(JSON.stringify(stream));
      })
      .catch(function (err) {
        alert(err);
      });
  };

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
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
