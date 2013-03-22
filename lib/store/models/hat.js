define([
    'core/model'
], function (Model) {
    "use strict";

    var Hat = Model.extend({
        defaults: {
            size: 'XL',
            price: 3.50,
            color: 'black'
        }
    });

    return Hat;
});
