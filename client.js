const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//console.log( employees );
 //bonus scale

//totalCompensation
let newEmployeeInfo = [];
// /function CreateNewObject(taco) {
//   this.name = name;
//   this.bonusPercentage = bonusPercentage;
//   this.totalCompensation = totalCompensation;
//   this.totalBonus = totalBonus;


function employeeInfoFinder(employee) {
//this is going to loop over all employees
for (let i = 0; i < employee.length; i++) {
  //employee at i is each employee
  //I need to calculate the bonus for each employee
  let bonusPercentage = 0;
  let totalBonus = employee[i].annualSalary * bonusPercentage;
  let totalCompensation = employee[i].annualSalary + totalBonus;
  
  if (employee[i].rating <= 2) {
    bonusPercentage = 0;
  } else if (employee[i].rating === 3) {
    bonusPercentage = .04;
  } else if (employee[i].rating === 4) {
    bonusPercentage = .06;
  } else if (employee[i].rating === 5) {
    bonusPercentage = .10;
  }

  //time w/ company bonus
  if(employee[i].number.toString().length === 4){
    bonusPercentage += .05;
  } else {
    bonusPercentage += 0;
  }

  //annualSalary > $65000
  if(employee[i].annualSalary > $65000){
    bonusPercentage -= .01;
  }

  //total bonus cap
  if(bonusPercentage > .13){
    bonusPercentage = .13;
  }
  if(bonusPercentage < 0){
    bonusPercentage = 0;
  
    //then make a bonusObject and 

    let updatedEmployee {
      name: ,
      bonusPercentage: ,
      totalCompensation: , 
      totalBonus: ,
    }

    // save the bonusObject in a list of all the bonusObjects
    newEmployeeInfo.push(updatedEmployee);
 }//end for loop
} //end employeeInfoFinder

