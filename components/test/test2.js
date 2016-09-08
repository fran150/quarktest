define(['quark', 'knockout', 'text!./test2.html'], function($$, ko, template) {
    function TestComponent2(params, $scope, $imports) {
    }

    return $$.component(TestComponent2, template);
});
