// Select all elements with the class 'box' and iterate over each
document.querySelectorAll('.box').forEach(function (box) {
    // Add a 'mousemove' event listener to each 'box' element
    box.addEventListener('mousemove', function (e) {
        // Calculate the mouse position relative to the current 'box'
        var x = e.pageX - box.offsetLeft;
        var y = e.pageY - box.offsetTop;
        // Select all 'span' elements and move them to the mouse position
        document.querySelectorAll('span').forEach(function (span) {
            span.style.left = "".concat(x, "px");
            span.style.top = "".concat(y, "px");
        });
    });
});
