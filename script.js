// Excercise 1

// const fn1 = function(param) {
//     param(42);
// }

// const fn2 = function(x) {
//     console.log(x);
//     console.log(`hi`);
// }

// fn1(fn2);

// Excercise 2

// const foo = (param, param2) => {
//     param(param2)
//   }

//   const bar = (param) => {
//     console.log(param)
//   }

//   foo(bar, 'hi')\

//   const foo = (param1, param2) => {
//     param1(param2)
//   }

//   const baz = (param) => {
//     console.log(param.toUpperCase())
//   }

//   foo(baz, 'hello')

  const electricMixer = (attachment) => {
    console.log(`This mixer is now ` + attachment());
  }

  const this1 = () => {
    return `this`;
  }

  const that = () => {
    return "that"
  }

  const other = () => {
    return "other"
  }
  electricMixer(this1);
  electricMixer(that);
  electricMixer(other);
