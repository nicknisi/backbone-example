define([
    'core/view',
    'text!../templates/store.hbs'
], function (View, template) {
    "use strict";

    return View.extend({
        template: template
    });
});
