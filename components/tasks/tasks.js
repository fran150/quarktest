define(['quark', 'knockout', 'text!./tasks.html'], function($$, ko, template) {
    function Tasks(params, $scope, $imports) {
        var self = this;

        $$.wait($imports.ready, function() {
            $imports.get('texto').setText('Hola');
        });
    }

    return $$.component(Tasks, template);
});
