define(['quark', 'knockout', 'text!./test.html'], function($$, ko, template) {
    function TestComponent(params, $scope, $imports) {
        this.name = "Componente Test 1";
    }
    
    return $$.component(TestComponent, template);
});
