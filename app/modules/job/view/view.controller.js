(function () {
    'use strict';

    angular
        .module('elogbooks.job')
        .controller('JobViewController', ['jobResponse', 'userResponse', JobViewController]);

    function JobViewController(jobResponse, userResponse) {
        var vm = this;
        vm.job = jobResponse;
        vm.user = userResponse;
        var i;
        vm.users;
        var users = [];
        for (i=0;i<vm.user.data.length;i++){
            if (vm.user.data[i].jobId === vm.job.id){
                users.push(vm.user.data[i]);
            }
        }
        vm.users = users;
    }
})();
