input.onButtonPressed(Button.A, function () {
    updateScoreBy(-0.1)
})
function draw () {
    basic.clearScreen()
    if (rope < 0) {
        basic.showString("A")
    } else if (rope > 4) {
        basic.showString("B")
    } else {
        led.plot(rounded, 2)
    }
}
input.onButtonPressed(Button.B, function () {
    updateScoreBy(0.1)
})
function updateScoreBy (num: number) {
    last = rounded
    rope += num
    rounded = Math.round(rope)
    if (last != rounded) {
        tone = list[rounded]
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Sine,
        tone,
        tone,
        255,
        255,
        2000,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), SoundExpressionPlayMode.InBackground)
    }
    draw()
}
let tone = 0
let last = 0
let list: number[] = []
let rounded = 0
let rope = 0
rope = 2
rounded = 2
list = [
262,
294,
330,
349,
392
]
draw()
