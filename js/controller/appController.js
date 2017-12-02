     angular.module('femaleApp')
      .controller('appController', appController);

       appController.$inject = ['appService', '$scope'];
         function appController(appService, $scope){
            
          const vm = this;
          vm.listData   = [];
                  
          appService.getInfo()
          .then(function (data){
           const info = data.data.posts;
            vm.listData.push(info);
            
            console.log("info:", info);
     
          });
    }
      
