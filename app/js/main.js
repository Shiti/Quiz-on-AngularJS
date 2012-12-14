'use strict';

require.config({
    paths: {
        angular: 'thirdparty/angular'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

require(['angular', 'app','controllers/appCtrl', 'controllers/homeCtrl', 'controllers/quizCtrl', 'controllers/resultCtrl'], function (angular) {
    angular.bootstrap(document, ['quizApp']);
});