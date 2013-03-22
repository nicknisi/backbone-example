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
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

require([
    'jquery',
    'store',
    'thumbs'
], function ($, store, thumbs) {
    var router = new store.Router();
    thumbs.history.start();
    // var blueHat = new store.Hat({
    //     color: 'blue',
    //     price: 10.50,
    //     description: 'This is a really cool hat'
    // })
    // window.blueHat = blueHat;
    // var hatView = new store.HatView({
    //     model: blueHat
    // });

    // $('body').append(hatView.render().el);
});
