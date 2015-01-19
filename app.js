(function(){


    var app = angular.module("app", []);

    app.controller("BodyController", function($scope) {

        $scope.templates = {

            nav: "templates/nav.html",
            content: "templates/pages/home.html",
            spotlight: "templates/spotlight.html"

        };

        $scope.init = function(){
            $("#spotlight").owlCarousel({
                pagination: false,
                autoPlay: true
            });

            new WOW().init();


        };


    });









   app.controller("HeaderController", function($scope) {



   });


})();
