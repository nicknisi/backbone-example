define([
    './models/hat',
    './views/hat',
    './router'
], function (Hat, HatView, Router) {
    "use strict";
    var store = {};

    store.Hat = Hat;
    store.HatView = HatView;
    store.Router = Router;

    return store;
});
