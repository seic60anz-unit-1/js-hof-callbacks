// const foo = (param, param2) => {
//     param(param2)
//   }
  
//   const bar = (param) => {
//     console.log(param)
//   }
  
//   foo(bar, 'hi')
//   // hi 

//   const foo = (param1, param2) => {
//     param1(param2)
//   }
  
//   const baz = (param) => {
//     console.log(param.toUpperCase())
//   }
  
//   foo(baz, 'hello')

//   // hello
//   // WRONG: It was HELLO (caps)

// const foo = (param, param2) => {
//     param(param2, 'hello')
//   }
  
//   const bar = (param, param2) => {
//     console.log(param2)
//   }
  
//   foo(bar, 'x')

// hi hello

const electricMixer = function (attatchment) {
    console.log(`This mixer is now: ${attatchment}`)
    return attatchment
}

const spiraliser = () => {
    return "spiralising"
}

const slicer = () => {
    return "slicing"
}

const dice = () => {
    return "dicing"
}
electricMixer(spiraliser())
electricMixer(slicer())
electricMixer(dice())