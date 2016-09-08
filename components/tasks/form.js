define(['quark', 'knockout', 'text!./form.html'], function($$, ko, template) {
    function TaskFormComponent(params, $scope, $import) {
        var self = this;

        this.nueva = function() {            
        }
    }

    return $$.component(TaskFormComponent, template);
});
