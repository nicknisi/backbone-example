define([
    './view',
    './model',
], function (View, Model, Collection, Router) {
    "use strict";

    var core = {
        Model: Model,
        View: View,
        // Collection: Collection,
        // Router: Router
    };

    return core;
});
