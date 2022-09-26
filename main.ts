input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        basic.showIcon(IconNames.Silly)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        basic.showIcon(IconNames.Surprised)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
