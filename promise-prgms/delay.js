  
const delayPromise = new Promise((resolve, reject) => {
    console.log("Program is in progress...");
    setTimeout(() => {
      const data = { message: "Promise completed successfully." };
      resolve(data);
    }, 4000);
    setTimeout(() => {
        reject("Promise rejected.");
    }, 5000);
  });
  
  const newPromise = delayPromise.then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Another promise resolved");
        }, 2000);
      });
});

newPromise.then((message) => {
    console.log("Second promise:", message);
  }).catch((error) => {
    console.error("Error in second promise:", error);
  });
  