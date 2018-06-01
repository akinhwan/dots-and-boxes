// click event listener
//81 document.getElementById("myDIV").childElementCount;

var lines = document.querySelectorAll(".hline, .hline2, .vline, .vline2");
console.log(lines);

lines.forEach(e => {
  e.addEventListener("click", () => {
    e.style.backgroundColor == "black"
      ? (e.style.backgroundColor = "white")
      : (e.style.backgroundColor = "black");
  });
});

var squaresCollection = document.getElementsByClassName("square");
var squares = Array.from(squaresCollection);
// console.log(squares);
var chunked = [];

for (let i = 0; i < squares.length; i += 9) {
  chunked.push(squares.slice(i, i + 9));
  //   console.log("...");
}
console.log(chunked);

chunked.forEach((c, i) => {
  var child = document.createElement("p");
  if (i % 2 !== 0) {
    //odd rows
    //.forward top right
    console.log(document.getElementsByClassName("forward"));
  } else {
    //even row
    //.backward top left
    console.log(document.getElementsByClassName("backward"));
  }
});
