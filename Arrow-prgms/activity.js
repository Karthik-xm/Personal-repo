  
  const printActivityCounts = (activityMap) => {
    let completedCount = 0;
    let todoCount = 0;
    let inProgressCount = 0;
  
    for (const status of activityMap.values()) {
      if (status === "completed") {
        completedCount++;
      } else if (status === "in progress") {
        inProgressCount++;
      } else if (status === "todo") {
        todoCount++;
      }
    }
  
    console.log("Completed activities:", completedCount);
    console.log("Todo activities:", todoCount);
    console.log("Activities in progress:", inProgressCount);
  };
  
  const Activity = new Map([
    ["Day1 note learning", "completed"],
    ["Day1 assignments", "in progress"],
    ["Day1 mcq", "todo"]
  ]);
  printActivityCounts(Activity);
  