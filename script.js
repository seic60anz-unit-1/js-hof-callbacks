// const logging = function(param){
//     console.log(param)
// }
// const hi = function(){
//     console.log("hi")
// }
// logging(hi)

// const AlteredLogging = function(param){
//     param()
// }
// AlteredLogging(hi)

//Guess the Log
//1. I guess it will log "hi"!
const foo = (param, param2) => {
    param(param2)
  }
  
  const bar = (param) => {
    console.log(param)
  }
  
  foo(bar, 'hi')
//2. I guess it will log "HELLO"!
const foo2 = (param1, param2) => {
    param1(param2)
  }
  
  const baz = (param) => {
    console.log(param.toUpperCase())
  }
  
  foo2(baz, 'hello')

//3. I guess it will log "hello"!
const foo3 = (param, param2) => {
    param(param2, 'hello')
  }
  
  const bar3 = (param, param2) => {
    console.log(param2)
  }
  
  foo3(bar3, 'hi')