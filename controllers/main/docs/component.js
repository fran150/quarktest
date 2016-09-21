define(['quark', 'knockout'], function($$, ko) {
    function MainDocsComponentController() {
        var self = this;

        this.initComponent = function(name) {
            switch (name) {
                case 'content':
                    return { name: self.params.name }
                    break;
            }
        }
    }

    return MainDocsComponentController;
});
