// click event listener
var lines = document.querySelectorAll(".hline, .hline2, .vline, .vline2");
console.log(lines);

lines.forEach(e => {
    e.addEventListener("click", () => {e.style.backgroundColor == "black" ? e.style.backgroundColor = "white" : e.style.backgroundColor = "black"})
})
