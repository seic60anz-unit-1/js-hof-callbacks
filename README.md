# Higher Order Functions & Callbacks

### Getting Started

1. Fork this repo and `git clone` it down to your computer
1. Create two files `index.html` and `script.js`
1. Include `script.js` in `index.html` using a `<script>` tag
1. Open `index.html` in your web browser and open the console
1. After answering each section below, `git commit` your work
1. When you're finished or when time is up, push your work to your remote repo, and file a Pull Request

---

### Callback Drills

Follow these steps:

1. Create a function that takes a parameter and logs it
1. Create a second function that logs 'hi'
1. Call the first function, passing in the second function as an argument
1. You should see a function reference being logged
1. Alter the first function so that it calls its parameter
1. If you did these steps correctly, you should get a log of 'hi'

---

### Guess the Log

Write your guesses as a comment in `script.js`. Run the code after you guess to see if you were correct.

1. Guess what this will log:

    ``` js
    const foo = (param, param2) => {
      param(param2)
    }

    const bar = (param) => {
      console.log(param)
    }

    foo(bar, 'hi')
    ```

2. Guess what this will log:

    ```js
    const foo = (param1, param2) => {
      param1(param2)
    }

    const baz = (param) => {
      console.log(param.toUpperCase())
    }

    foo(baz, 'hello')
    ```

3. Guess what this will log:

    ``` js
    const foo = (param, param2) => {
      param(param2, 'hello')
    }

    const bar = (param, param2) => {
      console.log(param2)
    }

    foo(bar, 'hi')
    ```

---

### Electric Mixer 

![electric mixer](https://i.imgur.com/zwwHz2L.jpg)

A callback is like an electric mixer attachment. Each mixer attachment _does_ something different: slice, dice, spiralise, and all sorts of fancy things depending on the attachment.

The electric mixer also _does_ something: it **uses** the mixer attachment.

1. Write a function `electricMixer` that takes one parameter named `attachment`. The `electricMixer` function should console log `"This mixer is now: _____"` plus the return value of the attachment.

1. Write at least 3 attachments for the electric mixer. Each attachment is a function that returns what it's doing.

    i.e.
    ``` js
    const spiraliser = () => {
      return "spiralising"
    }
    ```

2. Call `electricMixer` 3 or more times, passing in each of your attachments as arguments.

Example:

``` javascript
electricMixer(spiraliser)
electricMixer(dicer)
electricMixer(grinder)

// Console should show:
// "This mixer is now: spiralising"
// "This mixer is now: dicing"
// "This mixer is now: grinding meat"
```
