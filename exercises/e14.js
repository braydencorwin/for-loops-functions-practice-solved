
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let wrongBalance = [];
  for(let i=0; i< array.length; i++){
    let withdrawalSum= 0;
    let depositSum = 0;
    if('withdrawals' in array[i] && array[i].withdrawals.length){
      for(let y=0; y< (array[i].withdrawals).length; y++){
        withdrawalSum += array[i].withdrawals[y];
    }
     }
    if('deposits' in array[i] && array[i].deposits.length){
      for(let y=0; y< (array[i].deposits).length; y++){
        depositSum += array[i].deposits[y];
        }
      }
    if(depositSum - withdrawalSum != array[i].balance){
      wrongBalance.push(array[i])
    }
  }
  return wrongBalance
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
