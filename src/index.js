import angular from 'angular';
import ngRoute from 'angular-route';
import react from 'ngreact';

// controllers
import MainController from './pages/index/index.ctrl.js';

let App = () => {

    return angular.module("myApp", [
    "ngRoute", // TODO: try ui.router
    "react"
    ]).config(($routeProvider, $locationProvider) => {
        $routeProvider
            .when('/pages/:pageId', {
                template: require("./pages/index/index.html"),
                controller: MainController
            })
            .when('/', {
                redirectTo: '/pages/index'
            })

        $locationProvider.html5Mode(true);
    });

}

let myApp = App();

// Components to use
import Menu from './modules/menu/menu.component.js'
myApp.value('Menu', Menu); // Todo: move somewhere
