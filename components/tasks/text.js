define(['quark', 'knockout', 'text!./text.html'], function($$, ko, template) {
    function TextComponent(params, $scope, $imports) {
        var self = this;

        this.text = ko.observable();

        this.setText = function(newText) {
            self.text(newText);
        }

        $$.wait($imports.ready, function() {
            debugger;
        });
    }

    return $$.component(TextComponent, template);
});
