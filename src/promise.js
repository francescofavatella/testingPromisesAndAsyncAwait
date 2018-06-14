export const exampleMessage = [
  { message: "Hi", delay: 2000 },
  { message: "how", delay: 1000 },
  { message: "are", delay: 3000 },
  { message: "you", delay: 2000 }
];

export const promiseOK = async (message, msec) => {
  console.log("++++++ Creating Promise(" + message + ", " + msec + ")");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(">>>>>>>>> " + message);
      resolve(message);
    }, msec);
  });
};

export const promiseKO = async (message, msec) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      reject({ error: 400 });
    }, msec);
  });
};

export const nestedPromises = async () => {
  const testName = "nestedPromises - ";
  console.log("--- STARTING " + testName);
  console.log(testName + "Awaiting message 'Hi' in 2 seconds");
  promiseOK(testName + "Hi", 2000).then(response => {
    console.log(testName + "Awaiting message 'francesco' in 1 seconds");
    promiseOK(testName + "francesco", 1000).then(() => {
      console.log(testName + "COMPLETED");
    });
  });
  console.log("--- ENDING " + testName);
};

/*
--- Expected Output ---

nestedPromises - Awaiting message 'Hi' in 2 seconds
++++++ Creating Promise(nestedPromises - Hi, 2000)
>>>>>>>>> nestedPromises - Hi
nestedPromises - Awaiting message 'francesco' in 1 seconds
++++++ Creating Promise(nestedPromises - francesco, 1000)
*/

export default nestedPromises;
