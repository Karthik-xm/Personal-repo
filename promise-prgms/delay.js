const delayPromise = new Promise((resolve, reject) => {
    console.log("Program is in progress...");
    setTimeout(() => {
        reject("Promise rejected.");
    }, 2000);
  });
  
  delayPromise.then(() => {
    console.log("Promise completed successfully.");
  }).catch((error) => {
    console.log(error);
  });
  