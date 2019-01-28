(function () {
    'use strict';

    angular
        .module('elogbooks.user')
        .controller('UserUpdateController', ['$http', '$state', 'userResponse', UserUpdateController]);

    function UserUpdateController($http, $state, userResponse) {
        var vm = this;
        vm.user = userResponse;
        vm.user.jobid = vm.user.jobId;
        delete vm.user.jobId;
        vm.update = update;

        function update() {
            var id = vm.user.id;
            delete vm.user.id;
            $http.put(
                'http://localhost:8001/user/'+id,
                vm.user
            ).then(function (response) {
                $state.go('users.view', {id:response.data.id});
            }, function () {
                console.log('Request Failed badly');
            });
        }
    }
})();
