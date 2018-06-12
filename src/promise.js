export const promiseOK = async (message, msec) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
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

const nestedPromises_test = async () => {
  const testName = "nestedPromises - ";
  console.log(testName + "Awaiting message 'Hi' in 2 seconds");
  promiseOK(testName + "Hi", 2000).then(response => {
    console.log(testName + "Awaiting message 'francesco' in 1 seconds");
    promiseOK(testName + "francesco", 1000).then(() => {
      console.log("Done");
    });
  });
};

/*
nestedPromises - Awaiting message 'Hi' in 2 seconds
nestedPromises - Hi
nestedPromises - Awaiting message 'francesco' in 1 seconds
nestedPromises - francesco
Done
*/
//nonBlockingAsyncAwait();

export default nestedPromises_test;
