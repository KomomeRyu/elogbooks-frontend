(function () {
    'use strict';

    angular
        .module('elogbooks.job')
        .controller('JobAssignController', ['$http', '$state', 'jobResponse', 'userResponse' ,JobAssignController]);

    function JobAssignController($http, $state, jobResponse, userResponse) {
        var vm = this;
        vm.job = jobResponse;
        vm.user = userResponse;
        vm.userpick;
        vm.assign = assign;

        function assign(){
            var user = JSON.parse(vm.userpick);
            vm.job.userid = user.id.toString();
            var id = vm.job.id;
            delete vm.job.id;
            $http.put(
                'http://localhost:8001/job/' + id,
                vm.job
            ).then(function (response) {
                $state.go('jobs.view', {id:response.data.id});
            }, function () {
                console.log('Request Failed badly');
            });
        }
    }
})();
