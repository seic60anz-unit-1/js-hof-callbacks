// Callback Drills
    //1 Create a function that takes a parameter and logs it
        const fn1 = function (str) {
            console.log(str)
        }

    //2 Create a second function that logs 'hi'
        const fn2 = function(){
            console.log("hi")
        }

        const fn3 = function(){
            console.log("hello")
        }

    //3 Call the first function, passing in the second function as an argument
        fn1(fn2)

    //4 You should see a function reference being logged
        // f(){
        //     console.log("hi")
        // }

    //5 Alter the first function so that it calls its parameter
        const fn4 = function (str) {
            str()
        }

    //6 If you did these steps correctly, you should get a log of 'hi'
        fn4(fn2)    
        fn4(fn3)

// Guess the Log
    // Guess what this will log: 'hi'
        const foo1 = (param, param2) => {
        param(param2)
        }

        const bar1 = (param) => {
        console.log(param)
        }
        foo1(bar1, 'hi')

    // Guess what this will log: 'HELLO'
        const foo2 = (param1, param2) => {
        param1(param2)
        }

        const baz2 = (param) => {
        console.log(param.toUpperCase())
        }
        foo2(baz2, 'hello')

    // Guess what this will log: 'hello'
        const foo3 = (param, param2) => {
        param(param2, 'hello')
        }

        const bar3 = (param, param2) => {
        console.log(param2)
        }
        foo3(bar3, 'hi')

// Electric Mixer
    // 1 Write a function electricMixer that takes one parameter named attachment. The electricMixer function should console log "This mixer is now: _____" plus the return value of the attachment.
        const electricMixer = function(attachment){
            // const word = attachment()
            console.log(`This mixer is now: ${attachment()}`)
            return attachment()
        }
    // 2 Write at least 3 attachments for the electric mixer. Each attachment is a function that returns what it's doing.
    // i.e.
    // const spiraliser = () => {
    //   return "spiralising"
    // }
    const spiraliser = () => {
        return "spiralising"
    }
    const standMixer = () => {
        return "stand mixer"
    }
    const stickMixer = () => {
        return "stick mixer"
    }

    // 3 Call electricMixer 3 or more times, passing in each of your attachments as arguments.

electricMixer(spiraliser)
electricMixer(standMixer)
electricMixer(stickMixer)