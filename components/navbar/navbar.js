define(['quark', 'knockout', 'text!./navbar.html'], function($$, ko, template) {
    function Navbar(params, $scope, $imports) {
        this.pepe.papa();
    }

    return $$.component(Navbar, template);
});
