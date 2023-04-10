import { useEffect, useState } from "react";
// import { getToken } from "./firebase";

function App() {
  // const [token, setToken] = useState("");
  // getToken(setToken);

  // const handleClick = () => {
  //   navigator.mediaDevices
  //     .getUserMedia({ audio: true })
  //     .then(function (stream) {
  //       alert(JSON.stringify(stream));
  //     })
  //     .catch(function (err) {
  //       alert(err);
  //     });
  // };

  const handleWebPush = () => {
    window.Notification.requestPermission().then((result) => {
      if (result === "granted") {
        navigator.serviceWorker.ready.then((sw) => {
          sw.pushManager
            .subscribe({
              userVisibleOnly: true,
              // applicationServerKey is obtained from a server-side call to web-push `generateVAPIDKeys()`
              applicationServerKey:
                "BCMuZv_Kh8gREcIZU68affaEsDcK8QUI2vboMDL9QIuWnOpx5uXSkcGM7veWmBToVmohf6Iz0W3XpAlSvpW8DJE",
            })
            .then((pushSubscription) => {
              console.log(JSON.stringify(pushSubscription));
              // store this in a database etc. for you to be able to send messages to the user. later

              // For testing, I add it to the web page for copy/paste testing purposes on the sever side, since the console will ellipsify/shorten the long endpoint URL
              const p = document.createElement("p");
              p.appendChild(
                document.createTextNode(JSON.stringify(pushSubscription))
              );
              document.querySelector("html")?.appendChild(p);

              // await fetch("/save-subscription", {
              //   method: "post",
              //   headers: {
              //     "Content-Type": "application/json",
              //   },
              //   body: JSON.stringify(subscription),
              // });
            });
        });
      }
    });
  };

  return (
    <div>
      {/* {token ? (
        <p>
          Notification permission enabled 👍🏻
          <br />
          <span>{token}</span>
        </p>
      ) : (
        <p>Need notification permission ❗️ </p>
      )} */}
      {/* <button onClick={handleClick}>Click me</button> */}
      <button onClick={handleWebPush}>Subscribe</button>
      test web push notification
    </div>
  );
}

export default App;
