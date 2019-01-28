(function () {
    'use strict';

    angular
        .module('elogbooks.job')
        .controller('JobUpdateController', ['$http', '$state', 'jobResponse', JobUpdateController]);

    function JobUpdateController($http, $state, jobResponse) {
        var vm = this;
        vm.job = jobResponse;
        vm.job.status = vm.job.status.toString();
        vm.update = update;

        function update() {
            var id = vm.job.id;
            delete vm.job.id;
            $http.put(
                'http://localhost:8001/job/'+id,
                vm.job
            ).then(function (response) {
                $state.go('jobs.view', {id:response.data.id});
            }, function () {
                console.log('Request Failed badly');
            });
        }
    }
})();
