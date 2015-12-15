import angular from 'angular';
import ngRoute from 'angular-route';
import react from 'ngreact';

import getGlobal from './_helpers/getGlobal.js'

import MainController from './pages/index/index.ctrl.js';
import Menu from './modules/menu/menu.component.js'

let App = () => {

    var myApp = angular.module("myApp", [
    "ngRoute", // TODO: try ui.router
    "react"
    ]);
    getGlobal().myApp = myApp;
    myApp.config(($routeProvider, $locationProvider) => {
        $routeProvider
            .when('/pages/:pageId', {
                template: require("./pages/index/index.html"),
                controller: MainController
            })
            .when('/', {
                redirectTo: '/pages/index'
            })

        $locationProvider.html5Mode(true);
    })
    myApp.value('Menu', Menu); // Todo: move somewhere
}

App();
