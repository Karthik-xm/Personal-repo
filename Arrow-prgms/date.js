const compareDates = (givenDate) => {
    const currentDate = new Date();
    const givenDateTime = new Date(givenDate);
  
    if (currentDate.toDateString() === givenDateTime.toDateString()) {
      console.log("Both dates are equal.");
    } else if (currentDate < givenDateTime) {
      console.log("Given date is a coming date.");
    } else {
      console.log("Given date is a previous date.");
    }
  };
  
  const prompt = require('prompt-sync')();
  date = prompt("Enter a date in format(yyyy-mm-dd): ");
  compareDates(date);
  