console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// Function to print odd numbers to the console
function printOdds(count) {
  //  Checking if the count is a negative number, If so throw an error. before the loop begins to run
  if (count < 0) {
    console.error("Error: Count cannot be negative");
    // Return to move to the next line of code after the check or an error will be thrown and the code will stop all together.
    return;
  }
  // for loop to iterate through the numbers from 0 to the count
  for (let i = 0; i <= count; i++) {
    // Checking if the count is NOT equal to 0 (i.e. it is an odd number)
    if (i % 2 !== 0) {
      // log the odd number to the console
      console.log(i);
    }
  }
}

printOdds(20);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName = null, age = null) {
  if (userName === null || age === null) {
    console.error(
      "Error: Username and/or Age have not been provided. Please provide both to continue."
    );
    return;
  }

  let yearsTilSixteen = 16 - age;
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait ${yearsTilSixteen} more years.`;

  if (age >= 16) {
    console.log(aboveSixteen);
  } else {
    console.log(belowSixteen);
  }
}
checkAge("Alice", 8);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function locatePoint(x = 0, y = 0) {
  if (x === 0 && y === 0) {
    console.log("THe point lies at the origin");
  } else if (x === 0) {
    console.log("The point lies on the y-axis");
  } else if (y === 0) {
    console.log("The point lies on the x-axis");
  } else if (x > 0 && y > 0) {
    console.log("The point lies in the first quadrant");
  } else if (x < 0 && y > 0) {
    console.log("The point lies in the second quadrant");
  } else if (x < 0 && y < 0) {
    console.log("The point lies in the third quadrant");
  } else {
    console.log("The point lies in the fourth quadrant");
  }
}

locatePoint(-8, 8);

// Exercise 4 Section
// POTENTIAL EDGE CASE SCENARIO: If the sum of two sides of a triangle is less than or equal to the third side, then the sides do not form a valid triangle. THEREFORE, WE NEED TO ADD A CONDITION TO CHECK FOR THIS EDGE CASE.
// Solution is added below this example Exercise 4.1
console.log("EXERCISE 4:\n==========\n");
function triangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    console.log("Equilateral Triangle");
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles Triangle");
  } else {
    console.log("Scalene Triangle");
  }
}
console.log("EXERCISE 4.1:\n==========\n");
function triangleTypeMinusEdge(side1, side2, side3) {
  // ADDED THIS CONDITIONAL STATEMENT TO SOLVE MY MISSED POTENTIAL EDGE CASE
  if (
    side1 + side2 <= side3 ||
    side2 + side3 <= side1 ||
    side1 + side3 <= side2
  ) {
    console.log("These sides do not form a valid triangle");
  } else if (side1 === side2 && side2 === side3) {
    console.log("Equilateral Triangle");
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles Triangle");
  } else {
    console.log("Scalene Triangle");
  }
}

triangleType(3, 3, 5);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataPlanStatus(planLimit, day, usage) {
  // DEFINING VARIABLES TO BE USED WITHIN THE FUNCTION
  const planLimitGB = planLimit / 1024;
  const usageGB = usage / 1024;
  const averageDailyUsageGB = usageGB / day;
  const expectedDailyUsageGB = planLimitGB / 30;
  const remainingDataGB = planLimitGB - usageGB;
  const remainingDays = 30 - day;
  const averageRemainingUsageGB = remainingDataGB / remainingDays;
  const excessUsageGB = averageDailyUsageGB * 30 - planLimitGB;
  // BEGIN console LOGGING THE DATA USAGE STATUS WE RECEIVE FROM THE ARGUMENTS PASSED TO THE FUNCTION
  console.log(`${day} days used, ${remainingDays} days remaining.`);
  console.log(`Average daily use: ${averageDailyUsageGB.toFixed(2)} GB/day`);

  // BEGIN FUNCTIONS LOGICAL CHECKS TO DETERMINE THE DATA USAGE STATUS
  if (averageDailyUsageGB > expectedDailyUsageGB) {
    console.log(
      `You are EXCEEDING your average daily use (${averageDailyUsageGB.toFixed(
        2
      )}GB/day), continuing this high usage, you will exceed your data plan by ${excessUsageGB.toFixed(
        2
      )} GB. To stay below your data plan, use no more than ${averageRemainingUsageGB.toFixed(
        2
      )} GB/day.`
    );
  } else if (averageDailyUsageGB < expectedDailyUsageGB) {
    console.log("You can afford to use more data.");
  } else {
    console.log("You are right on track with your data usage.");
  }

  if (remainingDataGB <= 0) {
    console.log("You have run out of data.");
  } else {
    console.log(
      `You have ${remainingDataGB.toFixed(
        2
      )} GB left for the remaining ${remainingDays} days. You can use an average of ${averageRemainingUsageGB.toFixed(
        2
      )} GB per day to stay within your plan.`
    );
  }
}

// INVOKING THE FUNCTION WITH THE GIVEN ARGUMENTS (SAME AS THE PARAMETERS ONLY WHEN WE INVOKE THE FUNCTION THE PARAMETERS THAT ARE DEFINED AT THE CREATION OF THE FUNCTION ARE THEN CALLED THE ARGUMENTS WHEN WE INVOKE THE FUNCTION)
dataPlanStatus(102400, 15, 57344);
