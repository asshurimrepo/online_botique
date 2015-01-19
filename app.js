(function(){


    var app = angular.module("app", []);




    app.controller("BodyController", function($scope, $http) {

        $scope.config = {tempDir: 'templates/'};

        $scope.templates = {

            nav: $scope.config.tempDir+"nav.html",
            content: $scope.config.tempDir+"pages/home.html",
            spotlight: $scope.config.tempDir+"spotlight.html"

        };


        $scope.products = [
            {
                name: "Mango Man",
                price: "PHP 300.00",
                img: "mango-man-8424-764822-1.jpg",
                new: true
            },

            {
                name: "Basic Oxford Sleeve",
                price: "PHP 699.00",
                img: "zalora-basics-7865-037002-1.jpg",
                featured: true
            },

            {
                name: "Basic Hoodie",
                price: "PHP 949.00",
                img: "zalora-basics-3612-128881-1.jpg",
                featured: true
            },

            {
                name: "Leather Moccasins",
                price: "PHP 1,699.00",
                img: "zalora-basics-8437-407371-1.jpg"
            }
        ];


        $scope.init = function(){
            $("#spotlight").owlCarousel({
                pagination: false,
                autoPlay: true
            });

            new WOW().init();

        };


        $scope.changeView = function(view){
            $scope.templates.content = $scope.config.tempDir+"/pages/"+view+".html";
        };


    });









   app.controller("HeaderController", function($scope) {



   });


})();
