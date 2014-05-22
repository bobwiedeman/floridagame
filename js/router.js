angular.module('stateService', [ 'ui.router' ])
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider,$rootScope) {
            $stateProvider
                .state('index', {
                    url: '',
                    templateUrl: 'partials/home.html'
                })
                .state('home', {
                    url: '/',
                    templateUrl: 'partials/home.html'
                })
                .state('fishing', {
                    url: '/Fishing',
                    templateUrl: 'partials/fishing.html'
                })
                .state('Golf', {
                    url: '/Golf',
                    templateUrl: 'partials/Golf.html'
                })
                .state('Tennis', {
                    url: '/Tennis',
                    templateUrl: 'partials/Tennis.html'
                })
                .state('Baseball', {
                    url: '/Baseball',
                    templateUrl: 'partials/Baseball.html'
                })
                .state('football', {
                    url: '/Football',
                    templateUrl: 'partials/Football.html'
                })
                .state('Basketball', {
                    url: '/Basketball',
                    templateUrl: 'partials/Basketball.html'
                })
                .state('hockey', {
                        url: '/Hockey',
                        templateUrl: 'partials/Hockey.html'
                    })
                .state('soccer', {
                    url: '/Soccer',
                    templateUrl: 'partials/Soccer.html'
                })
                .state('hunting', {
                    url: '/Hunting',
                    templateUrl: 'partials/Hunting.html'
                })
                .state('gambling', {
                    url: '/Gambling',
                    templateUrl: 'partials/Gambling.html'
                })
                .state('Equine', {
                    url: '/Equine',
                    templateUrl: 'partials/Equine.html'
                })
        }]);


