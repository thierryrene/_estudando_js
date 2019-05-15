require.config({

    paths: {
        'jquery':     'libs/jquery-1.11.2',
        'underscore': 'libs/underscore',
        'backbone':   'libs/backbone',
        'bootstrap':  'libs/bootstrap.bundle'        
    },

    shim: {

        'underscore': {
            exports: '_'
        },

        'backbone': {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        
        'bootstrap': {
            deps: [
                'jquery'
            ]
        }

    }
});

require([
    'backbone',
    'app/app'
], function (Backbone, App) {

    'use strict';

    console.log(Backbone, App);

    App.initialize();
    App.displayTime();
    App.testFunction('thierry rene dos santos matos!');
    App.testFunction2();

});