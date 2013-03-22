define([
    'jquery',
    'core/router',
    './models/hat',
    './views/hat'
], function ($, Router, Hat, HatView) {
    "use strict";

    return Router.extend({
        routes: {
            'hat/:color': 'hatRoute'
        },

        initialize: function () {
        },

        hatRoute: function (color) {
            var hat = new Hat({ color: color });
            var hatView = new HatView({ model: hat });
            $('body').html(hatView.render().el);
            return this;
        }
    });
});
