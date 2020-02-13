// 6.	Open the index.html file in your browser and you should see a console log of 15
//          a.	Use the debugger in the for loop to fix the code
//          b.	After you fix the bug turn this code into a function

// debugger

// let numbers = [1, 2, 3, 4, 5]

debugger
const summingTool = (numbers) {
    let numbers = [1, 2, 3, 4, 5]
    let sum = 0
    }   
    for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}


console.log(sum())
