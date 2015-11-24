require(['jquery', 'knockout', 'bootstrap'], function($, ko){

    ko.bindingHandlers.bootstrapShowModal = {
        init: function (element, valueAccessor) {

        },
        update: function (element, valueAccessor) {
            var value = valueAccessor();
            if (ko.utils.unwrapObservable(value)) {
                $(element).modal('show');
                // this is to focus input field inside dialog
                $("input", element).focus();
            }
            else {
                $(element).modal('hide');
            }
        }
    };

    ko.components.register('widget', { require: 'widget' });

    function MyViewModel() {
        var self = this;

        self.userRating = ko.observable();

        self.ticketName = ko.observable();

        self.ticketModal = ko.observable(false);

        self.showTicketModal = function() {
            self.ticketModal(true);
        };

        self.hideTicketModal = function() {
            self.ticketModal(false);
        };

        self.saveTicket = function() {
            console.log('Save ' + self.ticketName());
        };
    };

    $(function() {
        var viewModel = new MyViewModel();

        ko.applyBindings(viewModel);
    });

});