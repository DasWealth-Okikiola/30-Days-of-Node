// function laugh() {
//     var it = "hahahahahahahahahaha!";
//     return it;
// }

// console.log(laugh())

function laugh(num) {
    var sound = ""; // 1. Start with an empty string

    // 2. Loop from 0 up to (but not including) num
    for (var i = 0; i < num; i++) {
        sound += "ha"; // 3. Add a "ha" each time
    }

    // 4. Return the final string to whoever called the function
    return sound + "!";
}

console.log(laugh(10)); // Output: "hahaha!"

