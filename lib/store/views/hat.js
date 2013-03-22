define([
    'core',
    'text!../templates/hat.html'
], function (core, template) {
    "use strict";

    var Hat = core.View.extend({
        template: template,
        initialize: function () {
            this.model.on('change:description', this.updateDescription, this);
            this._super('initialize', arguments);
        },
        confirmBuy: function (e) {
            alert('are you sure?');
        },
        updateDescription: function () {
            this.$('.description').text(this.model.get('description'));
            return this;
        },
        render: function () {
            this._super('render', arguments);
            this.$('.description').css('color', 'red');
            return this;
        }
    });

    return Hat;
});
