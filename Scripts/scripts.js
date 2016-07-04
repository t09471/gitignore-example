(function(){
    var app = angular.module("myApp", []);
    
    app.controller("countryController", function(){
       this.countries = [
            {name:"USA", capital:"Washington DC"},
            {name:"UK", capital:"London"},
            {name:"India", capital:"New Delhi"}
       ]; 
        
    });
})();