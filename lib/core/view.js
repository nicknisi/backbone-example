define([
    'backbone',
    'handlebars'
], function (Backbone, Handlebars) {
    "use strict";

    var View = Backbone.View.extend({
        template: null,

        initialize: function () {
            if (this.template) {
                this.template = Handlebars.compile(this.template);
            }
        }
    });

    return View;
});
