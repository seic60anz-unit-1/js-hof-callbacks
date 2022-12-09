// Callback Drills 
// 1
// const what = function (nani) {
//     console.log("yello") 
// }
// what()

// 2
// const where = function (doko) {
//     console.log("hi")
// }
// where()

// 3 
// what(where)


// 4 apparently it's not logging the function reference for me

// 5

// Guess the Log
// 1 ((param, param2), "hi")
// const foo = (param, param2) => {
//     param(param2)
//   }
  
//   const bar = (param) => {
//     console.log(param)
//   }
  
//   foo(bar, 'hi')
// oh it's just "hi"

// 2 HELLO
// const foo = (param1, param2) => {
//     param1(param2)
//   }
  
//   const baz = (param) => {
//     console.log(param.toUpperCase())
//   }
  
//   foo(baz, 'hello')
// yay i got this correct!

// 3 hello hi
// const foo = (param, param2) => {
//     param(param2, 'hello')
//   }
  
//   const bar = (param, param2) => {
//     console.log(param2)
//   }
  
//   foo(bar, 'hi')
// it's just "hello"

// Electric Mixer
// 1 amidoingthisrite
const electricMixer = function (attachment) {
    console.log("This mixer is now: ____")
    return attachment
}
electricMixer()

// 2
const spiraliser = () => {
    return "spiralising"
  }

const dicer = () => {
    return "dicing"
  }
  
const grinder = () => {
    return "grinding"
}
// 3 jks nope
electricMixer(spiraliser)
electricMixer(dicer)
electricMixer(grinder)

// Console should show:
// "This mixer is now: spiralising"
// "This mixer is now: dicing"
// "This mixer is now: grinding meat"