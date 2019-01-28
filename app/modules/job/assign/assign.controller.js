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
            user.jobid = vm.job.id.toString();
            var id = user.id;
            delete user.id;
            delete user.jobId;
            $http.put(
                'http://localhost:8001/user/' + id,
                user
            ).then(function (response) {
                $state.go('users.view', {id:response.data.id});
            }, function () {
                console.log('Request Failed badly');
            });
        }
    }
})();
