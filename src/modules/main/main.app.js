import angular from 'angular';
import ngRoute from 'angular-route';
import react from 'ngreact';

import getGlobal from '../../_helpers/getGlobal.js'

import MainController from './main.ctrl.js';
import Menu from '../menu/menu.component.js'

export default function () {

    var myApp = angular.module("myApp", [
    "ngRoute",
    "react"
    ]);
    getGlobal().myApp = myApp;
    myApp.config(($routeProvider, $locationProvider) => {
        $routeProvider
            .when('/pages/:pageId', {
                template: require("./main.html"),
                controller: MainController
            })
            .when('/', {
                redirectTo: '/pages/main'
            })

        $locationProvider.html5Mode(true);
    })
    myApp.value('Menu', Menu);
}
