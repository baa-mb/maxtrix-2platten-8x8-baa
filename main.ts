input.onButtonPressed(Button.A, function () {
    lauf = 1
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . # . . .
        . . # . .
        `)
    DLPLmatrix.schreibeText(
    nrMatrix.zentral,
    "" + randint(2, 10) + "+" + randint(2, 10) + "=" + "?",
    0x00ff00,
    false
    )
})
input.onButtonPressed(Button.AB, function () {
    lauf = 0
    DLPLmatrix.loescheMatrix(nrMatrix.zentral)
    DLPLmatrix.loescheMatrix(nrMatrix.links)
    basic.showIcon(IconNames.Heart)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString.includes("AB")) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_AB,
        EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    } else {
        if (receivedString.includes("A")) {
            control.raiseEvent(
            EventBusSource.MICROBIT_ID_BUTTON_A,
            EventBusValue.MICROBIT_BUTTON_EVT_CLICK
            )
        } else {
            if (receivedString.includes("B")) {
                control.raiseEvent(
                EventBusSource.MICROBIT_ID_BUTTON_B,
                EventBusValue.MICROBIT_BUTTON_EVT_CLICK
                )
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    lauf = 1
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . . #
        . . . # .
        . . # . .
        `)
    DLPLmatrix.schreibeText(
    nrMatrix.links,
    "DLPL-Neopixel",
    0xff0000,
    true
    )
})
let lauf = 0
basic.showString("DLPL")
lauf = 0
basic.showIcon(IconNames.Diamond)
radio.setGroup(54)
DLPLmatrix.definitionMatrix(nrMatrix.zentral, HWMatrix.m2, 0)
DLPLmatrix.definitionMatrix(nrMatrix.links, HWMatrix.m2, 1)
basic.forever(function () {
    if (lauf == 2) {
        DLPLmatrix.definitionMatrix(nrMatrix.links, HWMatrix.m2, 2)
        DLPLmatrix.schreibeText(
        nrMatrix.links,
        "Herzlich willkommen in DLPL.",
        0x0000ff,
        true
        )
        basic.pause(3000)
    }
})
