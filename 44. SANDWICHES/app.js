function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sand wich with ".concat(items.join(', '), "."));
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "ketchup", "tomato", "aalu");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
