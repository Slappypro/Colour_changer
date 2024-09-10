let boxes = document.getElementsByClassName("box")
function randomnum() {
    let ran1 = Math.ceil(0 + Math.random() * 255)
    let ran2 = Math.ceil(0 + Math.random() * 255)
    let ran3 = Math.ceil(0 + Math.random() * 255)
    return `rgb(${ran1},${ran2},${ran3})`
}
Array.from(boxes).forEach((e) => {
    setInterval(() => {
        e.style.backgroundColor = randomnum()

    }, 100);
})
