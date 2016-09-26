define(['quark', 'knockout', 'text!./text2.html'], function($$, ko, template) {
    function Text2Component(params, $scope, $imports) {
        var self = this;

        this.test = ko.observable('Wait Ready Test');
    }

    return $$.component(Text2Component, template);
});
