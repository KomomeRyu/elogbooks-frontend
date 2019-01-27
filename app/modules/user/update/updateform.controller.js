(function () {
    'use strict';

    angular
        .module('elogbooks.job')
        .controller('JobUpdateFormController', ['jobResult', JobUpdateFormController]);

    function JobUpdateFormController(jobResult) {
        var vm = this;
        vm.job = jobResult;
    }
})();
