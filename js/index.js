const elButtton = document.getElementById("button")
const elFlash = document.getElementById("flash")
const elSun = document.getElementById("sun")
const elMoon = document.getElementById("moon")
const elRange = document.getElementById("range")
const elText = document.getElementById("text")

elSun.addEventListener("click", () => {
    document.body.classList.toggle("dark")
} )
elMoon.addEventListener("click", () => {
    document.body.classList.toggle("dark")
} )

elRange.addEventListener("input" , () => {
    elText.style.fontSize = elRange.value + "px"
})

document.addEventListener("mousemove", (e) => {
    const {clientX, clientY} = e

    elFlash.style.cssText = `
    left: ${clientX}px;
    top: ${clientY}px;
    `;
});