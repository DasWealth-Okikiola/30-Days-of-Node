function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(num) {
    var triangle = "";

    // We start at 1, and go up to 'num'
    for (var i = 1; i <= num; i++) {
        // Each time the loop runs, we ask makeLine for 'i' stars
        // When i is 1, it makes 1 star. When i is 2, it makes 2 stars.
        triangle += makeLine(i);
    }

    return triangle;
}

console.log(buildTriangle(10));

