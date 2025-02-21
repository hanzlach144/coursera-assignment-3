(function (window) {
    var goodbye = {};

    goodbye.speak = function (name) {
        console.log("Goodbye " + name);
    };

    window.goodbye = goodbye; // Make it globally available
})(window);
