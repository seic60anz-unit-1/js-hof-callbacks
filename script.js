//CALL BACKS DRILLS
// Follow these steps:

// Create a function that takes a parameter and logs it
// Create a second function that logs 'hi'
// Call the first function, passing in the second function as an argument
// You should see a function reference being logged
// Alter the first function so that it calls its parameter
// If you did these steps correctly, you should get a log of 'hi'

// const fn1 = function (param1) {
//     param1();
//     //console.log(param1)
// }
// const fn2 = function () {
//     console.log('hi')
// }
// fn1( fn2 )

//GUESS THE LOG
//Write your guesses as a comment in script.js. 
//Run the code after you guess to see if you were correct.

//bar *incorrect* = hi
// const foo = (param, param2) => {
//     param(param2)
//   }
  
//   const bar = (param) => {
//     console.log(param)
//   }
  
//   foo(bar, 'hi')

//HELLO
// const foo = (param1, param2) => {
//     param1(param2)
//   }
  
//   const baz = (param) => {
//     console.log(param.toUpperCase())
//   }
  
//   foo(baz, 'hello')

//param2
// const foo = (param, param2) => {
//     param(param2, 'hello')
//   }
  
// const bar = (param, param2) => {
// console.log(param2)
// }

// foo(bar, 'hi')

//ELECTRIC MIXER
// A callback is like an electric mixer attachment. Each 
// mixer attachment does something different: slice, dice, spiralise, 
// and all sorts of fancy things depending on the attachment.
// The electric mixer also does something: it uses the mixer attachment.
// Write a function electricMixer that takes one parameter named 
// attachment. The electricMixer function should console log "This 
// mixer is now: _____" plus the return value of the attachment.
// Write at least 3 attachments for the electric mixer. Each 
// attachment is a function that returns what it's doing.

// const electricMixer = function (attachment) {
//     console.log(`This mixer is now: ${attachment}`)
//     return attachment
// }

// const spiraliser = () => {
//     return "spiralising"
// }

// const slicer = () => {
//     return "slicing"
// }

// const dice = () => {
//     return "dicing"
// }
// electricMixer(spiraliser())
// electricMixer(slicer())
// electricMixer(dice())