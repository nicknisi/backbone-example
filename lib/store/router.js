define([
    'core/router'
], function (Router) {
    "use strict";

    return Router.extend({
        routes: {
            'hat/:color': 'hatRoute'
        },

        initialize: function () {
        },

        hatRoute: function (color) {
        }
    });
});
