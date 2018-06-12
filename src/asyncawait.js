import { promiseOK } from "./promise";

export const nonBlockingAsyncAwait = async () => {
  const testName = "nonBlockingAsyncAwait - ";
  console.log(testName + "Awaiting message 'Hi' in 2 seconds");
  promiseOK(testName + "Hi", 2000);

  console.log(testName + "Awaiting message 'francesco' in 1 seconds");
  promiseOK(testName + "francesco", 1000);
};

/*
--- Expected Output ---
nonBlockingAsyncAwait - Awaiting message 'Hi' in 2 seconds
nonBlockingAsyncAwait - Awaiting message 'francesco' in 1 seconds
francesco
Hi
*/
//nonBlockingAsyncAwait();

export const blockingAsyncAwait = async () => {
  const testName = "blockingAsyncAwait - ";

  console.log(testName + "Awaiting message 'Hi' in 2 seconds");
  const a1 = await promiseOK(testName + "Hi", 2000);

  console.log(testName + "Awaiting message 'francesco' in 1 seconds");
  const a2 = await promiseOK(testName + "francesco", 1000);
};

/*
--- Expected Output ---
blockingAsyncAwait - Awaiting message 'Hi' in 2 seconds
Hi
blockingAsyncAwait - Awaiting message 'francesco' in 1 seconds
francesco
*/
//blockingAsyncAwait();
const asyncAwait_TestAll = () =>
  Promise.all([nonBlockingAsyncAwait(), blockingAsyncAwait()]).then(response =>
    console.log("Done")
  );

export default asyncAwait_TestAll;
