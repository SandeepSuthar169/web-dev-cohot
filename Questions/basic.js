// adding number 
function totalCupcakes(trayOne, trayTwo) {
    // Return the sum of trayOne and trayTwo
    return  trayOne + trayTwo
} 
totalCupcakes(12, 23)
//-------------------------------------------

// 2
function remainingApples(totalApples, givenAway) {
    // Return totalApples minus givenAway
     return totalApples - givenAway
  }
//-----------------------------------------------

// 3
// You just need to implement the totalChocolateBars function
function totalChocolateBars(barsPerBox, numberOfBoxes) {
  // Return barsPerBox multiplied by numberOfBoxes
  return barsPerBox * numberOfBoxes
}
//-----------------------------------------------


//4
function checkEvenOdd(num) {
    // Return "Even" if num is even, otherwise return "Odd"
    if(num % 2 == 0){
      return "Even"
    } else {
      return "Odd"
    }
}
//---------------------------------------------


// 5
function findLargest(a, b, c) {
    // Return the largest among a, b, and c
    if(a > b && a > c ){
      return a
    } else if ( b > a && b > c ){
      return b
    } else {
      return c
    }
  }
//----------------------------------------------


// 6
function checkVotingEligibility(age) {
    // Return "Eligible" if age is 18 or more, otherwise return "Not Eligible"
    if( age >= 18) {
      return "Eligible"
    } else {
      return "Not Eligible"
  }
}
//----------------------------------------------


// 7
function calculateGrade(marks) {
    // Return grade based on the marks
    if(marks >= 90){
      return "A"
    } else if (marks >= 80){
      return "B"
    } else if (marks >= 70){
      return "C"
    } else if (marks >= 60){
      return "D"
    } else {
      return "F"
    }
  }
//------------------------------------------------


// 8
function isLeapYear(year) {
  // Return "Leap Year" if the year is a leap year, otherwise return "Not a Leap Year"
  if((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0){
    return "Leap Year"
  } else {
    return "Not a Leap Year"
  }
}
//------------------------------------------------

// 9
function trafficLightAction(color) {
  // Return "Stop", "Slow Down", or "Go" based on the traffic light color
  switch (color) {
  case "Red":
    return "Stop"
  case "Yellow":
        return "Slow Down"
  case "Green":
        return "Go"
  case "Blue":
        return "Invalid Color"

    }
}
//-----------------------------------------------------


// 10
function getDayOfWeek(day) {
  // Return the corresponding day of the week based on the input number
  switch (day){
    case 1:
    return "Monday"
    case 2:
    return "Tuesday"
    case 3:
    return "Wednesday"
    case 4:
    return "Thursday"
    case 5 :
    return "Friday"
    case 6:
    return "Saturday"
    case 7: 
    return "Sunday"
  }
}
//-------------------------------------------------------


//11
function checkNumberType(num) {
  // Return "Positive", "Negative", or "Zero" based on the input number
  if(num < 0){
    return "Negative"
  } else if( num == 0){
    return "Zero"
  } else {
    return "Positive"
  }
}
//---------------------------------------------------

// 12
function convertTemperature(value, scale) {
    // Convert temperature based on the scale ("C" to "F" or "F" to "C")
    switch(scale){
     case "C":  
      return (value *9) / 5 + 32 + "°F" 
      case "F":
      return ((value - 32) * 5) / 9 + "°C"
    }
}
//---------------------------------------------------

// 13
function calculator(num1, num2, operator) {
    // Perform basic arithmetic operations using switch case
    switch(operator){
      case "+":
      return num1 + num2
      case "-":
      return num1 - num2
      case "*":
      return num1 * num2
      case "/":
      if (num1 === 0){
        return "Cannot divide by zero"
      } 
        num1 / num2
    }
}
