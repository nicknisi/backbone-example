define([
    'thumbs',
    'handlebars'
], function (thumbs, Handlebars) {
    "use strict";

    var View = thumbs.TemplateView.extend({
        template: null,

        initialize: function () {
            if (this.template) {
                this.template = Handlebars.compile(this.template);
            }
        },

        render: function () {
            if (this.template) {
                this.$el.html(this.template(this.model.toJSON()));
            }
            return this;
        }
    });

    return View;
});
