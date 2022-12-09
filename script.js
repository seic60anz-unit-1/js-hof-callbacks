// ### Callback Drills

// Follow these steps:

// 1. Create a function that takes a parameter and logs it
//  const logCall = function (param) {
//     console.log(param)
//  }
// logCall(5)

// 2. Create a second function that logs 'hi'
// const logCall2 = function () {
//     console.log('hi')
// }
// logCall2()

// 3. Call the first function, passing in the second function as an argument
// const logCall = function (param) {
//     console.log(param)
//  }

// const logCall2 = function() {   
//     console.log('hi')
// }
// logCall(logCall2())


///// Guess the Log
// Write your guesses as a comment in script.js. Run the code after you guess to see if you were correct.

// 1. Guess what this will log:
// const foo = function (param, param2) {
//   param(param2)
// }
// const bar = (param) => {
//   console.log(param)
// }
// foo(bar, 'hi')
/// My Guess = hi

// 2. Guess what this will log:
// const foo = function (param1, param2) {
//   param1(param2)
// }
// const baz = (param) => {
//   console.log(param.toUpperCase())
// }
// foo(baz, 'hello')
/// My Guess = undefined


//  3. Guess what this will log:
// const foo = (param, param2) => {
//   param(param2, 'hello')
// }
// const bar = (param, param2) => {
//   console.log(param2)
// }
// foo(bar, 'hi')
/// My Guess = hi 

/// Electric Mixer

// Write at least 3 attachments for the electric mixer. Each attachment is a function that returns what it's doing.
// const electricMixer = function (attachment) {
//     console.log(`This mixer is now: ${attachment}`)
// }
// const spiraliser = function () {
//     return "spiralising"
// }
// const dicer = function () {
//     return "dicing"
// }
// const grinder = () => {
//     return "grinding meat"
// }
// electricMixer(spiraliser())
// electricMixer(dicer())
// electricMixer(grinder())
