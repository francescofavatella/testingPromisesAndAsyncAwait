import { promiseOK, exampleMessage } from "./promise";

export const nonBlockingAsyncAwait = async () => {
  const testName = "nonBlockingAsyncAwait - ";
  console.log("--- STARTING " + testName);
  Promise.all(
    exampleMessage.map((elem, index) =>
      promiseOK(testName + elem.message, elem.delay)
    )
  );
  console.log("--- ENDING " + testName);
};

/*
--- Expected Output ---

--- STARTING nonBlockingAsyncAwait -
++++++ Creating Promise(nonBlockingAsyncAwait - Hi, 2000)
++++++ Creating Promise(nonBlockingAsyncAwait - how, 1000)
++++++ Creating Promise(nonBlockingAsyncAwait - are, 3000)
++++++ Creating Promise(nonBlockingAsyncAwait - you, 2000)
--- ENDING nonBlockingAsyncAwait -
>>>>>>>>> nonBlockingAsyncAwait - how
>>>>>>>>> nonBlockingAsyncAwait - Hi
>>>>>>>>> nonBlockingAsyncAwait - you
>>>>>>>>> nonBlockingAsyncAwait - are
*/

export const blockingAsyncAwait = async () => {
  const testName = "blockingAsyncAwait - ";
  console.log("--- STARTING " + testName);

  for (let i = 0; i < exampleMessage.length; ++i) {
    const elem = exampleMessage[i];
    const promiseResult = await promiseOK(testName + elem.message, elem.delay);
    console.log({ promiseResult: promiseResult });
  }
  console.log("--- ENDING " + testName);
};

/*
--- Expected Output ---

--- STARTING blockingAsyncAwait -
++++++ Creating Promise(blockingAsyncAwait - Hi, 2000)
>>>>>>>>> blockingAsyncAwait - Hi
Object {promiseResult: "blockingAsyncAwait - Hi"}
++++++ Creating Promise(blockingAsyncAwait - how, 1000)
>>>>>>>>> blockingAsyncAwait - how
Object {promiseResult: "blockingAsyncAwait - how"}
++++++ Creating Promise(blockingAsyncAwait - are, 3000)
>>>>>>>>> blockingAsyncAwait - are
Object {promiseResult: "blockingAsyncAwait - are"}
++++++ Creating Promise(blockingAsyncAwait - you, 2000)
>>>>>>>>> blockingAsyncAwait - you
Object {promiseResult: "blockingAsyncAwait - you"}
--- ENDING blockingAsyncAwait -
*/

const asyncAwait_TestAll = async () => {
  const a = await blockingAsyncAwait();
  const b = await nonBlockingAsyncAwait();
  console.log("Done");
  return;
};

export default asyncAwait_TestAll;
