const delayPromise = new Promise((resolve, reject) => {
    console.log("Program is in progress...");
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  
  delayPromise.then(() => {
    console.log("Promise completed successfully.");
  });
  