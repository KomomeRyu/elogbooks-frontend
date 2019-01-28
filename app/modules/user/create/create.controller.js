(function () {
    'use strict';

    angular
        .module('elogbooks.job')
        .controller('UserCreateController', ['$http', '$state', UserCreateController]);

    function UserCreateController($http, $state) {
        var vm = this;
        vm.user = {
            name : null,
            email : null,
            jobid : 0
        };
        vm.create = create;

        function create() {
            $http.post(
                'http://localhost:8001/user',
                vm.user
            ).then(function (response) {
                $state.go('users.view', {id:response.data.id});
            }, function () {
                console.log('Request Failed');
            });
        }
    }
})();
