// Callback drills

// const drill1 = function (param){
//     console.log(param);
// }

// const drill2 = function (){
//     console.log("hi");
// }

// drill1(drill2)

// guess the log 
// const foo = (param, param2) => {
//     param(param2)
//   }
  
//   const bar = (param) => {
//     console.log(param)
//   }
  
//   foo(bar, 'hi')

//   const foo = (param1, param2) => {
//     param1(param2)
//   }
  
//   const baz = (param) => {
//     console.log(param.toUpperCase())
//   }
  
//   foo(baz, 'hello')

// const foo = (param, param2) => {
//     param(param2, 'hello')
//   }
  
//   const bar = (param, param2) => {
//     console.log(param2)
//   }
  
//   foo(bar, 'hi')

// Electric mixer 

const electricMixer = function (attachment){
    console.log(`This mixer is now:` + attachment())
}; 

const spiraliser = function(){
    return "spiralizing"
}

const dicer = function(){
    return "dicing";
}

const grinder = function(){
    return "grinding";
}

electricMixer(spiraliser)
electricMixer(dicer)
electricMixer(grinder)

