const svg = document.getElementById("svgCanvas");
let dots = [];

function getMousePosition(event) {
    const svgArea = svg.getBoundingClientRect();
    return {
        x: event.clientX - svgArea.left,
        y: event.clientY - svgArea.top
    };
}

svg.addEventListener("click", function (event) {
    const position = getMousePosition(event);

    const dot = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
    );

    dot.setAttribute("cx", position.x);
    dot.setAttribute("cy", position.y);
    dot.setAttribute("r", 8);
    dot.setAttribute("fill", "#2f80ff");

    svg.appendChild(dot);
    dots.push(dot);
});

function undo() {
    if (dots.length > 0) {
        const lastDot = dots.pop();
        svg.removeChild(lastDot);
    }
}
