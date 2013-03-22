require.config({
    baseUrl: '/lib',
    paths: {
        thumbs: '../components/thumbs/thumbs',
        jquery: '../components/jquery/jquery',
        backbone: '../components/backbone/backbone',
        underscore: '../components/underscore/underscore',
        handlebars: '../components/handlebars/handlebars',
        text: '../components/requirejs-text/text'
    },
    packages: [
        { name: 'store' },
        { name: 'core' }
    ],
    shim: {
        underscore: {
            exports: '_',
            init: function () {
                return _.noConflict();
            }
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore'],
            init: function ($, _) {
                return Backbone.noConflict();
            }
        },
        thumbs: {
            deps: ['backbone', 'underscore', 'jquery']
        }
    }
});

require([
    'store'
], function (store) {
    window.store = new store.Hat();
});
