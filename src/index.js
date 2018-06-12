import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const promiseOK = async (message, msec) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      resolve(message);
    }, msec);
  });
};

const promiseKO = async (message, msec) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      reject({ error: 400 });
    }, msec);
  });
};

(async function() {
  console.log("Waiting message 'Hi' in 2 seconds");
  promiseOK("Hi", 2000);

  console.log(
    "Awaiting message 'francesco' in 1 seconds and then continue to write"
  );
  const a3 = await promiseOK("francesco", 1000);

  console.log("After message 'francesco' I will write 'bye' in 3 seconds");
  promiseOK("bye", 3000);
  /*
Waiting message 'Hi' in 2 seconds
Awaiting message 'francesco' in 1 seconds and then continue to write
francesco
After message 'francesco' I will write 'bye' in 3 seconds
Hi
bye
*/
  //promiseKO("ciao", 1000);
})();

function App() {
  return (
    <div className="App">
      <h1>Testing async/await</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
