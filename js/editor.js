require(['jquery', 'knockout', 'jquery-te', 'bootstrap'], function($, ko){


    ko.bindingHandlers.jqte = {
        init: function (element, valueAccessor) {
            $(element).jqte({
                change: function(){
                    var value = valueAccessor();
                    value($(element).val());
                }
            });
        }
    };

    function MyViewModel() {
        var self = this;

        self.info = ko.observable('');

        self.save = function() {
            console.log(self.info());
        };
    };

    $(function() {
        var vm = new MyViewModel();

        ko.applyBindings(vm);
    });

});