define([
    'core',
    'text!../templates/hat.hbs'
], function (core, template) {
    "use strict";

    var Hat = core.View.extend({
        template: template
    });
});
