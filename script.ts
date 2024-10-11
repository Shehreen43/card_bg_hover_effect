
// Select all elements with the class 'box' and iterate over each
document.querySelectorAll<HTMLElement>('.box').forEach((box) => {
    // Add a 'mousemove' event listener to each 'box' element
    box.addEventListener('mousemove', (e: MouseEvent) => {
        // Calculate the mouse position relative to the current 'box'
        let x = e.pageX - box.offsetLeft;
        let y = e.pageY - box.offsetTop;

        // Select all 'span' elements and move them to the mouse position
        document.querySelectorAll<HTMLSpanElement>('span').forEach((span) => {
            span.style.left = `${x}px`;
            span.style.top = `${y}px`;
        });
    });
});

