define(['quark', 'knockout', 'text!./test2.html'], function($$, ko, template) {
    return $$.component(function(params, $scope, $imports) {
        this.name = "Componente 2";
    }, template);
});
    