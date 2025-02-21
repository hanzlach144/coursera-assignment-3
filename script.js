(function () {
    var names = ["John", "Paul", "Jen", "Jason", "Larry", "Linda", "Frank"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            goodbye.speak(names[i]);
        } else {
            hello.speak(names[i]);
        }
    }
})();
