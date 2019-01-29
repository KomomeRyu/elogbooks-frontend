(function () {
    'use strict';

    angular
        .module('elogbooks.user')
        .controller('UserViewController', ['userResponse', 'jobResponse',UserViewController]);

    function UserViewController(userResponse, jobResponse) {
        var vm = this;
        vm.user = userResponse;
        vm.job = jobResponse;
        var i;
        vm.jobs;
        var jobs = [];
        for (i=0;i<vm.job.data.length;i++){
            if (vm.job.data[i].userid === vm.user.id){
                jobs.push(vm.job.data[i]);
            }
        }
        vm.jobs = jobs;
    }
})();
