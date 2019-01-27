(function () {
    'use strict';

    angular
        .module('elogbooks.job')
        .controller('JobUpdateController', ['$http', '$state', JobUpdateController]);

    function JobUpdateController($http, $state) {
        var vm = this;
        vm.update = update;

        function update() {
            $http.post(
                'http://localhost:8001/job',
                vm.job
            ).then(function (response) {
                $state.go('jobs.view', {id:response.data.id});
            }, function () {
                console.log('Request Failed');
            });
        }
    }
})();
