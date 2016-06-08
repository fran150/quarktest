define(['quark', 'knockout', 'text!./test3.html'], function($$, ko, template) {
    return $$.component(function(params, $scope, $imports) {
        this.name = "Componente 3";
    }, template);
});
    