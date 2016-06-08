define(['quark', 'knockout', 'text!./test.html'], function($$, ko, template) {
    return $$.component(function(params, $scope, $imports) {
        this.name = "Componente 1";
    }, template);
});
    