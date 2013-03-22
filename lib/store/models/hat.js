define([
    'core/view'
], function (View) {
    "use strict";

    var Hat = View.extend({
        defaults: {
            size: 'XL',
            price: 3.50,
            color: 'black'
        }
    });

    return Hat;
});
