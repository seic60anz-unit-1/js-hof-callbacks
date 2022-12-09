//Callback function

const fn1 = function (param) {
    console.log(param);
}

const fn2 = function () {
    console.log('hi');
}

// fn2(fn1)

//Guess the Log

//Guess 1 = hi

//Guess 2 = HELLO

//Guess 3 = hi, hello (hello)

//Electric mixer

const electricMixer = function (attachment) {
    console.log(`This mixer is now: ${attachment}`);
}

const slicer = function() {
    return 'slicing'
}

const dicer = function() {
    return 'spiraling'
}

const grater = function() {
    return 'grating'
}

// const grinder = function(att1) {
//     return console.log('grinding');
// }

electricMixer(slicer())
electricMixer(dicer())
electricMixer(grater())
// electricMixer(grinder)
