input.onButtonPressed(Button.A, function () {
    x += 1
    basic.showNumber(x)
    basic.pause(50)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(x + y)
    basic.pause(50)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    y += 1
    basic.showNumber(y)
    basic.pause(50)
    basic.clearScreen()
})
let y = 0
let x = 0
x = 0
y = 0
