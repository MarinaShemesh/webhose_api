  (function () {
     'use strict';

      angular.module('femaleApp')
      .service('appService', appService);


       appService.$inject = ['$http', '$q'];
        function appService($http, $q){

          function getInfo(){
            return $http.get('http://webhose.io/filterWebContent?token=39bc015d-0b8b-47ad-bc43-acf8d0163cc2&format=json&sort=published&q=%22women%20artists%22%20language%3Aenglish');
           }
           
           return {
             getInfo:getInfo
             
           }
  
      }

   })();