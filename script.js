//-------------------------------------------
// CALLBACK DRILLS

// 1. & 4.
// const printMessage = function(message) {
//     console.log(message)
// }

const printMessage = function(message) {
    message()
}

// 2. 
const printHi = function() {
    console.log("hi")
}

// 3.
printMessage(printHi)


//-------------------------------------------
// GUESS THE LOG

// 1. (guess = hi) correct guess
// const foo = (param, param2) => {
//     param(param2)
// }

// const bar = (param) => {
// console.log(param)
// }

// foo(bar, 'hi')


// 2. (guess = HELLO) correct guess
// const foo = (param1, param2) => {
// param1(param2)
// }

// const baz = (param) => {
// console.log(param.toUpperCase())
// }

// foo(baz, 'hello')


// 3. (guess = hello) correct guess
// const foo = (param, param2) => {
// param(param2, 'hello')
// }

// const bar = (param, param2) => {
// console.log(param2)
// }

// foo(bar, 'hi')

//-------------------------------------------
// ELECTRIC MIXER

const electricMixer = function(attachment) {
    console.log(`This mixer is now: ${attachment}`)
}

// 3 attachments
const doughHook = function() {
    return "Dough Hook"
}

const balloonWhisk = function() {
    return "Balloon Whisk"
}

const flatBeater = function() {
    return "Flat Beater"
}

// calling electricMixer() function
electricMixer(doughHook())
electricMixer(balloonWhisk())
electricMixer(flatBeater())