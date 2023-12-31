
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  let arr1 = []
  let arr2= []
  let finalArr = []
for(let i =0; i<array.length; i++){
  let letters = array[i].split('')
  let hasA = false
  for(let l = 0; l< letters.length; l++){
    if (letters[l] === 'a'){
      arr1.push(array[i])
      hasA = true
    }
  }
  if(!hasA){
    arr2.push(array[i])
  }
}
  
finalArr.push(arr1)
finalArr.push(arr2)
return finalArr
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
